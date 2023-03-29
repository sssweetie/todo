import { useForm } from 'react-hook-form';
import { CreateTodo } from '@todonx/types';

export const useNewTodoForm = (createTodo: any) => {
  const { reset, register, handleSubmit } = useForm<CreateTodo>();
  const onSubmit = (data: CreateTodo) => {
    createTodo(data);
    reset();
  };

  return { reset, register, handleSubmit: handleSubmit(onSubmit) };
};
