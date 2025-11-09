import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTodo from "../../store/todocontext/TodoContext";

const CreateTodo = () => {
  const { todoObj, setTodoObj, handleTodoChange, handleAddTodo } = useTodo();
  return (
    <div>
      <Navbar />
      <div className="container p-2">
        <div className="row">
          <div className="form-container shadow py-5 px-1">
            <h1 className="p-2 text-center text-primary">
              Add A New Task.......
            </h1>
            <form className="p-2">
              {/* title */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={todoObj.title}
                  name="title"
                  onChange={handleTodoChange}
                />
              </div>

              {/* description */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={todoObj.description}
                  onChange={handleTodoChange}
                  name="description"
                />
              </div>

              <button
                type="button"
                className="btn btn-warning text-white font-bold"
                onClick={handleAddTodo}
              >
                Add Todo
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateTodo;
