import z from "zod";

const taskSchema = z
  .object({
    companyId: z
      .string()
      .min(24, "Company ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    projectId: z
      .string()
      .min(24, "Project ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    teamId: z
      .string()
      .min(24, "Team ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    title: z.string().min(1, "Task title is required"),
    description: z.string().optional(),
    assignedTo: z
      .string()
      .min(24, "Assigned user ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    createdBy: z
      .string()
      .min(24, "Creator ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    status: z
      .enum(["TODO", "IN_PROGRESS", "COMPLETED", "APPROVED", "REJECTED"])
      .default("TODO"),
    deadline: z.coerce.date().optional(),
    completedAt: z.coerce.date().optional(),
    approvedAt: z.coerce.date().optional(),
  })
  .strict();

export default taskSchema;
