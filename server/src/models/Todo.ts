import { model, Schema } from "mongoose";

interface Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
}

const todoSchema = new Schema<Todo>({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export const TodoModel = model<Todo>("Todo", todoSchema);
