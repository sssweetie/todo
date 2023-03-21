import { AxiosInstance } from "axios";

export const createToDoApi = (httpClient: AxiosInstance) => ({
  create: async (data: any) => {
    await httpClient.post("/todo", data);
  },
  delete: async (id: string) => {
    await httpClient.delete(`/todo/${id}`);
  },
  update: async (data: any) => {
    const response = await httpClient.put("/todo", data);
    return response.data;
  },
  getAll: async () => {
    const response = await httpClient.get("/todo/getAll");
    return response.data;
  },
});
