import React, { useState } from "react";
import * as S from "./styled";

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface Props {
  deleteTodo: (id: string) => void;
  todo: Todo;
}

export const TodoCard = ({ deleteTodo, todo }: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Title isCompleted={todo.isCompleted}>{todo.title}</S.Title>
      <S.Completed
        defaultChecked={todo.isCompleted}
        onChange={() => setChecked(!checked)}
      ></S.Completed>
      <S.Delete onClick={() => deleteTodo(todo.id)}></S.Delete>
    </S.Wrapper>
  );
};
