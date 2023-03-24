export type Todo = {
  _id: string;
  title: string;
  isCompleted: boolean;
};

export type CreateTodo = {
  title: string;
  isCompleted: boolean;
};

export type UpdateTodo = {
  _id: string;
} & Partial<Todo>;

export type GetTodos = Array<Todo>;



