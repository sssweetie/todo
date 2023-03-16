import React, { useState, useEffect } from "react";
import { TodoList } from "./features/Todo";
import axios from "axios";
// const todos = [
//   { id: "24", title: "hello", isCompleted: false },
//   { id: "25", title: "bye", isCompleted: true },
//   { id: "264", title: "hello", isCompleted: false },
// ];

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todo/getAll")
      .then((response) => {
        setTodos(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return <TodoList todos={todos}></TodoList>;
}

export default App;
