import styled, { css } from "styled-components";
import deleteButton from "../../../../assets/img/delete.png";

export const InputTitle = styled.input.attrs(() => ({ type: "text" }))<{
  isCompleted: boolean;
}>`
  cursor: pointer;
  border: none;
  width: 80%;
  &:active,
  &:focus {
    outline: none;
  }
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
    `}
`;

export const CheckboxIsCompleted = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  outline: none;
  margin: 0;
  cursor: pointer;
  visibility: hidden;
  margin-left: auto;
  width: 16px;
  height: 16px;
`;

export const DeleteButton = styled.img.attrs(() => ({ src: deleteButton }))`
  visibility: hidden;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  min-width: 12rem;
  align-items: center;
  height: 3rem;

  &:hover {
    ${CheckboxIsCompleted} {
      visibility: visible;
    }
    ${DeleteButton} {
      visibility: visible;
    }
  }
`;
