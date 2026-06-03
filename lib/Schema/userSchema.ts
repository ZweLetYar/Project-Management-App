import z from "zod";

const userSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    passwordHash: z.string().min(1, "Password hash is required"),
    avatar: z.string().optional(),
    isActive: z.boolean().default(true),
  })
  .strict();

export default userSchema;
