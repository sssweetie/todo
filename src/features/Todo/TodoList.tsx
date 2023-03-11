import React from "react";
import { TodoCard } from "./components/TodoCard";
import { Todo } from "./components/TodoCard/TodoCard";
import * as S from "./styled";

type TodoList = {
  children?: any; //rename
  todos: Array<Todo>;
};

export const TodoList = ({ children, todos }: TodoList) => {
  const deleteTodo = () => {
    return;
  };

  return (
    <S.Wrapper>
      {todos.map((todo, index) => (
        <TodoCard todo={todo} deleteTodo={deleteTodo} key={index}></TodoCard>
      ))}
    </S.Wrapper>
  );
};
