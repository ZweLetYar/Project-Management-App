import z from "zod";

const teamSchema = z
  .object({
    companyId: z
      .string()
      .min(24, "Company ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    projectId: z
      .string()
      .min(24, "Project ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    name: z.string().min(1, "Team name is required"),
    type: z.enum(["FRONTEND", "BACKEND", "QA"]),
    leaderId: z
      .string()
      .min(24, "Leader ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
  })
  .strict();

export default teamSchema;
