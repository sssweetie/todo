import React, { useState, useEffect } from 'react';
import { UpdateTodo, CreateTodo, GetTodos } from '@todonx/types';
import { TodoApi } from '../todoApi';

export const useTodo = (todoApi: TodoApi) => {
  const [todos, setTodos] = useState<GetTodos>([]);
  const [isLoading, setLoading] = useState(false);
  const getAllTodos = async () => {
    try {
      setLoading(true);
      const todos = await todoApi.getAll();
      setTodos(todos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteTodo = async (id: string) => {
    try {
      setLoading(true);
      await todoApi.delete(id);
    } catch (error) {
      console.error(error);
    } finally {
      getAllTodos();
      setLoading(false);
    }
  };
  const updateTodo = async (data: UpdateTodo) => {
    try {
      setLoading(true);
      await todoApi.update(data);
    } catch (error) {
      console.error(error);
    } finally {
      getAllTodos();
      setLoading(false);
    }
  };
  const createTodo = async (data: CreateTodo) => {
    try {
      setLoading(true);
      await todoApi.create(data);
    } catch (error) {
      console.error(error);
    } finally {
      getAllTodos();
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTodos();
    return () => {
      console.log('Cleaning function');
    };
  }, []);

  return {
    createTodo,
    updateTodo,
    deleteTodo,
    getAllTodos,
    isLoading,
    todos,
  };
};
