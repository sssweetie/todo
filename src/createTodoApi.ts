import { AxiosInstance } from "axios";
import { CreateTodo, UpdateTodo, GetTodos } from "../libs/features/src/todo";

export interface TodoApi {
  delete: (id: string) => Promise<void>;
  update: (data: UpdateTodo) => Promise<GetTodos>;
  create: (data: CreateTodo) => Promise<void>;
  getAll: () => Promise<never[]>;
}

export const createToDoApi = (httpClient: AxiosInstance): TodoApi => ({
  create: async (data: CreateTodo) => {
    await httpClient.post("/todo", data);
  },
  delete: async (id: string) => {
    await httpClient.delete(`/todo/${id}`);
  },
  update: async (data: UpdateTodo) => {
    const response = await httpClient.put("/todo", data);
    console.log(response);
    return response.data;
  },
  getAll: async () => {
    const response = await httpClient.get("/todo/getAll");
    return response.data;
  },
});
