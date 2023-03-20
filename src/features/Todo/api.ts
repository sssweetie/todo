import { createToDoApi } from "./createTodoApi";
import { httpClient } from "../../http-client/httpClient";

export const todoApi = createToDoApi(httpClient);
