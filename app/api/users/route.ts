import User from "@/database/user.model";
import dbConnect from "@/lib/dbConnect";
import { createDevelopmentUser, hashPassword } from "@/lib/auth";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/response";
import userSchema from "@/lib/Schema/userSchema";
import validateBody from "@/lib/vaildateBody";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return handleSuccessResponse(users, 200);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.password) {
      throw new Error("Password is required");
    }

    const { password, ...userData } = body;
    const normalizedEmail = userData.email.trim().toLowerCase();
    const validatedData = validateBody(userSchema, {
      ...userData,
      email: normalizedEmail,
      passwordHash: hashPassword(password),
    });

    let newUser;

    try {
      await dbConnect();
      const existingEmail = await User.findOne({ email: normalizedEmail });
      if (existingEmail) throw new Error("Email already exists");

      //@ts-ignore
      newUser = await User.create(validatedData);
    } catch (dbError) {
      if (process.env.NODE_ENV !== "production" && !process.env.MONGODB_URI) {
        newUser = createDevelopmentUser({
          //@ts-ignore
          name: validatedData.name,
          //@ts-ignore
          email: validatedData.email,
          //@ts-ignore
          passwordHash: validatedData.passwordHash,
        });
      } else {
        throw dbError;
      }
    }

    return handleSuccessResponse(newUser, 201);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}
