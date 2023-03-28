import { AxiosInstance } from 'axios';
import { CreateTodo, UpdateTodo, GetTodos } from '@todonx/types';

export interface TodoApi {
  delete: (id: string) => Promise<void>;
  update: (data: UpdateTodo) => Promise<GetTodos>;
  create: (data: CreateTodo) => Promise<void>;
  getAll: () => Promise<GetTodos>;
}

export const todoApi = (httpClient: AxiosInstance): TodoApi => ({
  create: async (data: CreateTodo) => {
    await httpClient.post('/todo', data);
  },
  delete: async (id: string) => {
    const response = await httpClient.delete(`/todo/${id}`);
    console.log(response);
  },
  update: async (data: UpdateTodo) => {
    console.log(data);
    const response = await httpClient.put('/todo', data);
    console.log(response);
    return response.data;
  },
  getAll: async () => {
    const response = await httpClient.get<GetTodos>('/todo/getAll');
    return response.data;
  },
});
