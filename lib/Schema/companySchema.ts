import z from "zod";

const companySchema = z
  .object({
    name: z.string().min(1, "Company name is required"),
    slug: z.string().min(1, "Company slug is required"),
    industry: z.string().optional(),
    logo: z.string().optional(),
    timezone: z.string().min(1, "Timezone is required").default("UTC"),
    createdBy: z
      .string()
      .min(24, "Creator ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    isActive: z.boolean().default(true),
  })
  .strict();

export default companySchema;
