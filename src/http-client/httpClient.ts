import { createHttpClient } from "./createHttpClient";

export const httpClient = createHttpClient({
  baseURL: "http://localhost:3001",
});
