import { model, Schema } from 'mongoose';
import { Todo } from '@todonx/types';

const todoSchema = new Schema<Todo>(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { collection: 'todos' }
);

export const TodoModel = model<Todo>('todo', todoSchema);
