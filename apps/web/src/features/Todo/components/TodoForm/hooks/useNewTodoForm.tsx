import { useForm } from 'react-hook-form';
import { CreateTodo } from '@todonx/types';
import { CreateTodoAction } from '../TodoForm';

export const useNewTodoForm = (createTodo: CreateTodoAction) => {
  const { reset, register, handleSubmit } = useForm<CreateTodo>();
  const onSubmit = (data: CreateTodo) => {
    createTodo(data);
    reset();
  };

  return { reset, register, handleSubmit: handleSubmit(onSubmit) };
};
