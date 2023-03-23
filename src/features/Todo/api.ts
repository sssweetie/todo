import { httpClient } from "../../httpClient";
import { createToDoApi } from "../../createTodoApi";

export const todoApi = createToDoApi(httpClient);
