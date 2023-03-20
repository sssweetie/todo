import { AxiosInstance } from "axios";

export const createToDoApi = (httpClient: AxiosInstance) => ({
  create: async () => {
    httpClient.post("/todo");
  },
  delete: async (id: string) => {
    await httpClient.delete(`/todo/${id}`);
  },
  update: async () => {
    const response = await httpClient.put("/todo");
    return response.data;
  },
  getAll: async () => {
    const response = await httpClient.get("/todo/getAll");
    return response.data;
  },
});
