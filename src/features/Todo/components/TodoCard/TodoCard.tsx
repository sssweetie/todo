import React from "react";
import * as S from "./styled";
import { Todo, UpdateTodo } from "../../../../../libs/features/todo";

interface Props {
  deleteTodo: (id: string) => void;
  updateTodo: (data: UpdateTodo) => void;
  todo: Todo;
}

export const TodoCard = ({ deleteTodo, updateTodo, todo }: Props) => {
  return (
    <S.Wrapper>
      <S.InputTitle
        isCompleted={todo.isCompleted}
        onInput={(e) =>
          updateTodo({
            _id: todo._id,
            title: (e.target as HTMLInputElement).value,
            isCompleted: todo.isCompleted,
          })
        }
        defaultValue={todo.title}
      />
      <S.CheckboxIsCompleted
        defaultChecked={todo.isCompleted}
        onChange={() => {
          updateTodo({
            _id: todo._id,
            title: todo.title,
            isCompleted: !todo.isCompleted,
          });
        }}
      />
      <S.DeleteButton onClick={() => deleteTodo(todo._id)} />
    </S.Wrapper>
  );
};
