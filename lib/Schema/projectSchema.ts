import z from "zod";

const projectSchema = z
  .object({
    companyId: z
      .string()
      .min(24, "Company ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    name: z.string().min(1, "Project name is required"),
    description: z.string().optional(),
    status: z.enum(["ACTIVE", "COMPLETED", "ON_HOLD"]).default("ACTIVE"),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    createdBy: z
      .string()
      .min(24, "Creator ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
  })
  .strict();

export default projectSchema;
