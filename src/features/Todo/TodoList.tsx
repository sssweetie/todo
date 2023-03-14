import React from "react";
import { TodoCard } from "./components/TodoCard";
import { Todo } from "./components/TodoCard/TodoCard";
import * as S from "./styled";

type TodoList = {
  todos: Array<Todo>;
};

export const TodoList = ({ todos }: TodoList) => {

  const request = async () => {
    
  }

  const deleteTodo = async () => {
    const data = await request();
  };

  return (
    <S.Wrapper>
      {todos.map((todo, index) => (
        <TodoCard todo={todo} deleteTodo={deleteTodo} key={index}></TodoCard>
      ))}
    </S.Wrapper>
  );
};
