import z from "zod";

const taskActivitySchema = z
  .object({
    taskId: z
      .string()
      .min(24, "Task ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    userId: z
      .string()
      .min(24, "User ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    action: z.enum(["CREATED", "COMPLETED", "APPROVED", "REJECTED"]),
    comment: z.string().optional(),
  })
  .strict();

export default taskActivitySchema;
