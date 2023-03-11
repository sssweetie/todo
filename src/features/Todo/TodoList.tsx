import React from "react";
import * as S from "./styled";

type TodoList = {
  children: any; //rename
};

export const TodoList = ({ children }: TodoList) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
