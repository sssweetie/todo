import React from "react";
import { TodoCard } from "./components/TodoCard";
import * as S from "./styled";
import { useTodo } from "./hooks/useTodo";
import { TodoForm } from "./components/TodoForm";

export const TodoList = () => {
  const { createTodo, updateTodo, deleteTodo, todos } = useTodo();
  return (
    <S.Wrapper>
      <TodoForm createTodo={createTodo}></TodoForm>
      {todos?.map((todo) => (
        <TodoCard
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          key={todo["_id"]}
        ></TodoCard>
      ))}
    </S.Wrapper>
  );
};
