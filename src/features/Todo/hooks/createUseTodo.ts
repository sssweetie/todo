import React, { useState, useEffect } from "react";
interface TodoApi {
  delete: (id: string) => Promise<void>;
  update: (data: any) => Promise<any>;
  create: (data: any) => Promise<void>;
  getAll: () => Promise<any>;
}

type Deps = {
  todoApi: TodoApi;
};

export const createUseTodo =
  ({ todoApi }: Deps) =>
  () => {
    const [todos, setTodos] = useState([]);
    const getAllTodos = async () => {
      try {
        const todos = await todoApi.getAll();
        setTodos(todos);
      } catch (error) {
        console.error(error);
      }
    };
    const deleteTodo = async (id: string) => {
      try {
        await todoApi.delete(id);
      } catch (error) {
        console.error(error);
      } finally {
        getAllTodos();
      }
    };
    const updateTodo = async (data: any) => {
      try {
        await todoApi.update(data);
      } catch (error) {
        console.error(error);
      } finally {
        getAllTodos();
      }
    };
    const createTodo = async (data: any) => {
      try {
        await todoApi.create(data);
      } catch (error) {
        console.error(error);
      } finally {
        getAllTodos();
      }
    };

    useEffect(() => {
      getAllTodos();
    }, []);
    return { createTodo, updateTodo, deleteTodo, getAllTodos, todos };
  };
