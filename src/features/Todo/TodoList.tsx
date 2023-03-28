import React from "react";
import { TodoCard } from "./components/TodoCard";
import { useTodo } from "./hooks/useTodo";
import { todoApi } from "./todoApi";
import { TodoForm } from "./components/TodoForm";
import { httpClient } from "../../services/httpClient";
import { Layout } from "./components/Layout";

export const TodoList: React.FC = () => {
  const { createTodo, updateTodo, deleteTodo, todos, isLoading } = useTodo(
    todoApi(httpClient)
  );

  return (
    <Layout
      todoForm={<TodoForm action={{ createTodo }}></TodoForm>}
      todos={todos?.map((todo) => (
        <TodoCard
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          key={todo._id}
        ></TodoCard>
      ))}
      isLoading={isLoading}
    ></Layout>
  );
};
