import z from "zod";

const companyMemberSchema = z
  .object({
    userId: z
      .string()
      .min(24, "User ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    companyId: z
      .string()
      .min(24, "Company ID is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId"),
    role: z.enum(["CEO", "CTO", "VP", "TEAM_LEADER", "TEAM_MEMBER"]),
    teamId: z
      .string()
      .min(24, "Team ID must be a valid ObjectId")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId")
      .optional(),
    isActive: z.boolean().default(true),
  })
  .strict();

export default companyMemberSchema;
