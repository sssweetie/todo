import React, { useState, useEffect } from "react";
import {
  UpdateTodo,
  CreateTodo,
} from "../../../../libs/features/src/todo/types";
import { TodoApi } from "../../../createTodoApi";
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
    const updateTodo = async (data: UpdateTodo) => {
      try {
        await todoApi.update(data);
      } catch (error) {
        console.error(error);
      } finally {
        getAllTodos();
      }
    };
    const createTodo = async (data: CreateTodo) => {
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
      return () => {
        console.log("Cleaning function");
      };
    }, []);
    return { createTodo, updateTodo, deleteTodo, getAllTodos, todos };
  };
