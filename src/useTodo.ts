import { createUseTodo } from "./features/Todo/createUseTodo";

import { todoApi } from "./features/Todo/api";

export const useTodo = createUseTodo({ todoApi });
