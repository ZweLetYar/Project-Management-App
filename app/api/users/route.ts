import User from "@/database/user.model";
import dbConnect from "@/lib/dbConnect";
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
    await dbConnect();
    const body = await req.json();
    const validatedData = validateBody(userSchema, body);
    const existingEmail = await User.findOne({ email: body.email });
    if (existingEmail) throw new Error("Email already exists");

    //@ts-ignore
    const newUser = await User.create(validatedData);
    return handleSuccessResponse(newUser, 201);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}
