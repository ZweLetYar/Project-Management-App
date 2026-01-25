import { Schema, model, models, Document, Types } from "mongoose";

export interface ICompany extends Document {
  name: string;
  slug: string;
  industry?: string;
  logo?: string;
  timezone: string;
  createdBy: Types.ObjectId;
  isActive: boolean;
}

const CompanySchema = new Schema<ICompany>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    industry: String,
    logo: String,
    timezone: { type: String, default: "UTC" },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default models.Company || model<ICompany>("Company", CompanySchema);
