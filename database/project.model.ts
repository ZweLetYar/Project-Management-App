import { Schema, model, models, Document, Types } from "mongoose";

export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ON_HOLD";

export interface IProject extends Document {
  companyId: Types.ObjectId;
  name: string;
  description?: string;
  status: ProjectStatus;
  startDate?: Date;
  endDate?: Date;
  createdBy: Types.ObjectId;
}

const ProjectSchema = new Schema<IProject>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    name: { type: String, required: true },
    description: String,
    status: {
      type: String,
      enum: ["ACTIVE", "COMPLETED", "ON_HOLD"],
      default: "ACTIVE",
    },
    startDate: Date,
    endDate: Date,
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

const Project = models?.Project || model<IProject>("Project", ProjectSchema);
export default Project;
