import React, { ReactNode } from "react";
import * as S from "./styled";

interface Props {
  todoForm: ReactNode;
  todos: ReactNode;
  isLoading: boolean;
}

export const Layout: React.FC<Props> = ({ todoForm, todos, isLoading }) => {
  return (
    <S.Wrapper>
      {isLoading && <p>Loading...</p>}
      {todoForm}
      {todos}
    </S.Wrapper>
  );
};
