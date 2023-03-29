import { TodoModel } from '../models/Todo';
import { CreateTodo, UpdateTodo } from '@todonx/types';

export const TodoController = {
  create: async (data: CreateTodo) => {
    await TodoModel.create(data);
  },
  delete: async (id: string) => {
    await TodoModel.findByIdAndDelete(id);
  },
  update: async ({ _id, ...data }: UpdateTodo) => {
    await TodoModel.findByIdAndUpdate(_id, data);
  },
  getAll: async () => {
    const todo = await TodoModel.find();
    return todo;
  },
};
