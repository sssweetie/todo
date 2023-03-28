import { useForm } from 'react-hook-form';
import { CreateTodo } from '@todonx/types';
import { Action } from '../TodoForm';
export const useNewTodoForm = ({ createTodo }: Action) => {
  const { reset, register, handleSubmit } = useForm<CreateTodo>();
  const onSubmit = (data: CreateTodo) => {
    createTodo(data);
    reset();
  };
  return { reset, register, handleSubmit: handleSubmit(onSubmit) };
};
