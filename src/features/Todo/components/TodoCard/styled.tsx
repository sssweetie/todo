import styled from "styled-components";
import deleteButton from "../../../../assets/img/delete.png";

export const Title = styled.h3``;

export const Completed = styled.input.attrs(() => ({ type: "checkbox" }))`
  outline: none;
  margin: 0;
  cursor: pointer;
  visibility: none;
`;

export const Delete = styled.img.attrs(() => ({ src: deleteButton }))`
  visibility: none;
`;

export const Wrapper = styled.div`
  display: flex;
  min-width: 16rem;
  &:hover {
    ${Completed} {
      visibility: block;
    }
    ${Delete} {
      visibility: block;
    }
  }
`;
