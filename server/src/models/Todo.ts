import { model, Schema } from "mongoose";
interface Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
}
const todoSchema = new Schema<Todo>(
  {
    // _id: {
    //   type: String,
    //   required: true,
    // }, trying to avoid passing the random id
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "todos" }
);

export const TodoModel = model<Todo>("todo", todoSchema);
