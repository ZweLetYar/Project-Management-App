import { Schema, model, models, Document, Types } from "mongoose";

export type TeamType = "FRONTEND" | "BACKEND" | "QA";

export interface ITeam extends Document {
  companyId: Types.ObjectId;
  projectId: Types.ObjectId;
  name: string;
  type: TeamType;
  leaderId: Types.ObjectId;
}

const TeamSchema = new Schema<ITeam>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ["FRONTEND", "BACKEND", "QA"] },
    leaderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

const Team = models?.Team || model<ITeam>("Team", TeamSchema);

export default Team;
