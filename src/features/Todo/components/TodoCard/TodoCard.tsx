import React from "react";
import * as S from "./styled";

export interface Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
}

interface Props {
  deleteTodo: (id: string) => void;
  updateTodo: (data: Todo) => void;
  todo: Todo;
}

export const TodoCard = ({ deleteTodo, updateTodo, todo }: Props) => {
  return (
    <S.Wrapper>
      <S.Title
        isCompleted={todo.isCompleted}
        onInput={(e) =>
          updateTodo({
            _id: todo._id,
            title: (e.target as HTMLInputElement).value,
            isCompleted: todo.isCompleted,
          })
        }
        defaultValue={todo.title}
      ></S.Title>
      <S.Completed
        defaultChecked={todo.isCompleted}
        onChange={() => {
          updateTodo({
            _id: todo._id,
            title: todo.title,
            isCompleted: !todo.isCompleted,
          });
        }}
      ></S.Completed>
      <S.Delete onClick={() => deleteTodo(todo._id)}></S.Delete>
    </S.Wrapper>
  );
};
