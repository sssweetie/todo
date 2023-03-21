import { createUseTodo } from "./createUseTodo";

import { todoApi } from "../api";

export const useTodo = createUseTodo({ todoApi });
