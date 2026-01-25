import { Schema, model, models, Document, Types } from "mongoose";

export type TaskStatus =
  | "TODO"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "APPROVED"
  | "REJECTED";

export interface ITask extends Document {
  companyId: Types.ObjectId;
  projectId: Types.ObjectId;
  teamId: Types.ObjectId;
  title: string;
  description?: string;
  assignedTo: Types.ObjectId;
  createdBy: Types.ObjectId;
  status: TaskStatus;
  deadline?: Date;
  completedAt?: Date;
  approvedAt?: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    teamId: { type: Schema.Types.ObjectId, ref: "Team", required: true },
    title: { type: String, required: true },
    description: String,
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["TODO", "IN_PROGRESS", "COMPLETED", "APPROVED", "REJECTED"],
      default: "TODO",
    },
    deadline: Date,
    completedAt: Date,
    approvedAt: Date,
  },
  { timestamps: true },
);

export default models.Task || model<ITask>("Task", TaskSchema);
