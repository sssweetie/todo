import React from "react";
import { TodoList } from "./features/Todo";

const todos = [
  { id: "24", title: "hello", isCompleted: false },
  { id: "25", title: "bye", isCompleted: true },
  { id: "264", title: "hello", isCompleted: false },
];

function App() {
  return <TodoList todos={todos}></TodoList>;
}

export default App;
