import React, { useState, useEffect } from "react";
import { TodoCard } from "./components/TodoCard";
import { Todo } from "./components/TodoCard/TodoCard";
import * as S from "./styled";
import axios from "axios";
type TodoList = {
  todos: Array<Todo>;
};

export const TodoList = ({ todos }: TodoList) => {
  // const [todoState, setTodoState] = useState(todos);
  // const deleteTodo = (id: string) => {
  //   axios
  //     .delete(`http://localhost:3001/api/todo/${id}`)
  //     .then((response) => setTodoState(todos.filter((el) => el._id !== id)))
  //     .catch((error) => console.error(error));
  // }; todo: rerender on delete

  return (
    <S.Wrapper>
      {todos.map((todo, index) => (
        <TodoCard todo={todo} deleteTodo={deleteTodo} key={index}></TodoCard>
      ))}
    </S.Wrapper>
  );
};
