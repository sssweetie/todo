import { TodoModel } from "../models/Todo";

export const TodoController = {
  create: async (data: any) => {
    await TodoModel.create(data);
  },
  delete: async (id: string) => {
    await TodoModel.findByIdAndDelete(id);
  },
  update: async ({ _id, ...data }: any) => {
    await TodoModel.findByIdAndUpdate(_id, data);
  },
  getAll: async () => {
    const todo = await TodoModel.find();
    return todo;
  },
};
