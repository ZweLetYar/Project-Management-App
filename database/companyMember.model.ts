import { Schema, model, models, Document, Types } from "mongoose";

export type Role = "CEO" | "CTO" | "VP" | "TEAM_LEADER" | "TEAM_MEMBER";

export interface ICompanyMember extends Document {
  userId: Types.ObjectId;
  companyId: Types.ObjectId;
  role: Role;
  teamId?: Types.ObjectId;
  isActive: boolean;
}

const CompanyMemberSchema = new Schema<ICompanyMember>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    role: {
      type: String,
      enum: ["CEO", "CTO", "VP", "TEAM_LEADER", "TEAM_MEMBER"],
      required: true,
    },
    teamId: { type: Schema.Types.ObjectId, ref: "Team" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

CompanyMemberSchema.index({ companyId: 1, userId: 1 }, { unique: true });

export default models.CompanyMember ||
  model<ICompanyMember>("CompanyMember", CompanyMemberSchema);
