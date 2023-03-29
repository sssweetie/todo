import React from 'react';
import { CreateTodo } from '@todonx/types';
import { useNewTodoForm } from './hooks';
import * as S from './styled';

export interface Action {
  createTodo: (data: CreateTodo) => void;
}

export const TodoForm: React.FC<Action> = ({ createTodo }) => {
  const { register, handleSubmit } = useNewTodoForm(createTodo);

  return (
    <S.Form
      onSubmit={handleSubmit} //get the form data
    >
      <S.Input
        {...register('title')} // get input value on submit
        placeholder="Input your activity..."
      />
      <S.Button type="submit">Add activity</S.Button>
    </S.Form>
  );
};
