import React from "react";
import { TodoCard } from "./components/TodoCard";
import * as S from "./styled";
import { useTodo } from "./hooks/useTodo";
import { TodoForm } from "./components/TodoForm";

export const TodoList = () => {
  const { createTodo, updateTodo, deleteTodo, todos, isLoading } = useTodo();
  return (
    <S.Wrapper>
      <TodoForm action={{ createTodo }}></TodoForm>
      {isLoading ? <p>Loading</p> : null}
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
