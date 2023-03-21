import React from "react";
import { TodoCard } from "./components/TodoCard";
import { Todo } from "./components/TodoCard/TodoCard";
import * as S from "./styled";
import { useTodo } from "./hooks/useTodo";
import { TodoForm } from "./components/TodoForm";
type TodoList = {
  todos: Array<Todo>;
};

export const TodoList = () => {
  const { createTodo, updateTodo, deleteTodo, todos } = useTodo();
  return (
    <S.Wrapper>
      <TodoForm createTodo={createTodo}></TodoForm>
      {todos.map((todo, index) => (
        <TodoCard
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          key={index}
        ></TodoCard>
      ))}
    </S.Wrapper>
  );
};
