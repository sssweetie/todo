import { TodoModel } from "../models/Todo";

export const TodoController = {
  create: async (data: any) => {
    await TodoModel.create(data);
  },
  delete: async ({ _id }: any) => {
    await TodoModel.findByIdAndDelete(_id);
  },
  update: async ({ _id, ...data }: any) => {
    await TodoModel.findByIdAndUpdate(_id, ...data);
  },
  getAll: async () => {
    return await TodoModel.find();
  },
};
