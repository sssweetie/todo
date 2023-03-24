import React, { useState, useEffect } from "react";
import { UpdateTodo, CreateTodo } from "../../../../libs/features/todo/types";
import { TodoApi } from "../../../createTodoApi";
type Deps = {
  todoApi: TodoApi;
};

export const createUseTodo =
  ({ todoApi }: Deps) =>
  () => {
    const [todos, setTodos] = useState([]);
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
        console.log("Cleaning function");
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
