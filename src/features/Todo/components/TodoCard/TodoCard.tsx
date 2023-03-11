import React from "react";
import * as S from "./styled";

export const TodoCard = () => {
  return (
    <S.Wrapper>
      <S.Title></S.Title>
      <S.Completed></S.Completed>
      <S.Delete></S.Delete>
    </S.Wrapper>
  );
};
