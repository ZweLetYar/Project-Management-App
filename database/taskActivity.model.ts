import { Schema, model, models, Document, Types } from "mongoose";

export type TaskAction = "CREATED" | "COMPLETED" | "APPROVED" | "REJECTED";

export interface ITaskActivity extends Document {
  taskId: Types.ObjectId;
  userId: Types.ObjectId;
  action: TaskAction;
  comment?: string;
}

const TaskActivitySchema = new Schema<ITaskActivity>(
  {
    taskId: { type: Schema.Types.ObjectId, ref: "Task", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: {
      type: String,
      enum: ["CREATED", "COMPLETED", "APPROVED", "REJECTED"],
      required: true,
    },
    comment: String,
  },
  { timestamps: true },
);

export default models.TaskActivity ||
  model<ITaskActivity>("TaskActivity", TaskActivitySchema);
