import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./styled";

interface Props {
  createTodo: (data: any) => void;
}

export const TodoForm = ({ createTodo }: Props) => {
  const { reset, register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    createTodo(data);
    reset();
  };

  return (
    <S.Form
      onSubmit={handleSubmit(onSubmit)} //get the form data
    >
      <S.Input
        {...register("title")} // get input value on submit
        placeholder="Input your activity..."
      />
      <S.Button type="submit">Add activity</S.Button>
    </S.Form>
  );
};
