import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTodo from "../../store/todocontext/TodoContext";
import TodoCard from "../../components/todocard/TodoCard";

const TodoList = () => {
  const { todoList } = useTodo();
  return (
    <div>
      <Navbar />
      <div className="container">
        <h4 className="p-2 text-primary">All Todo List</h4>
        <div className="d-flex gap-4 flex-wrap justify-content-center p-2">
          {todoList.map((todo) => {
            return <TodoCard todo={todo} key={todo.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TodoList;
