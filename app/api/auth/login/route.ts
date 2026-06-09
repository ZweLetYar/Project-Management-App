import { cookies } from "next/headers";
import User from "@/database/user.model";
import dbConnect from "@/lib/dbConnect";
import { getDevelopmentUser, verifyPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 },
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    let user: {
      _id?: unknown;
      name?: string;
      email?: string;
      passwordHash?: string;
    } | null = null;

    try {
      await dbConnect();
      user = await User.findOne({ email: normalizedEmail }).lean();
    } catch {
      if (process.env.NODE_ENV !== "production" && !process.env.MONGODB_URI) {
        user = getDevelopmentUser(normalizedEmail);
      } else {
        return NextResponse.json(
          {
            success: false,
            message:
              "Authentication database is unavailable. Please configure MONGODB_URI.",
          },
          { status: 503 },
        );
      }
    }

    if (!user || !user.passwordHash) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const passwordMatches = verifyPassword(password, user.passwordHash);

    if (!passwordMatches) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 },
      );
    }

    const cookieStore = await cookies();
    cookieStore.set({
      name: "auth_session",
      value: JSON.stringify({
        userId: user._id?.toString?.() || "dev-user",
        email: user.email,
      }),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        },
      },
      { status: 200 },
    );
  } catch (e: unknown) {
    return NextResponse.json(
      {
        success: false,
        message: e instanceof Error ? e.message : "Login failed",
      },
      { status: 500 },
    );
  }
}
