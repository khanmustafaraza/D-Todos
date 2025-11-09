import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CreateTodo from "./pages/createtodo/CreateTodo";
import TodoList from "./pages/todolist/TodoList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-todo" element={<CreateTodo />} />
      <Route path="/todo-list" element={<TodoList />} />
    </Routes>
  );
};

export default App;
