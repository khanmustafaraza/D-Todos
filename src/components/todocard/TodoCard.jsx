import React from "react";
import { FaEdit, FaTrashAlt, FaCheckCircle, FaClock } from "react-icons/fa";
import useTodo from "../../store/todocontext/TodoContext";

const TodoCard = ({ todo }) => {
  const isCompleted = todo.status === "completed";
  const { handleEdit, handleDelete, handleTodoChange, todoObj, handleAddTodo } =
    useTodo();

  return (
    <>
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Update Todo
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
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
                    UpDate Todo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card my-3 border-0 shadow-sm position-relative overflow-hidden rounded-4"
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          transition: "all 0.4s ease",
        }}
      >
        {/* Gradient Accent */}
        <div
          className="position-absolute top-0 start-0 w-100"
          style={{
            height: "4px",
            background:
              "linear-gradient(90deg, #0d6efd, #6f42c1, #d63384, #0d6efd)",
            backgroundSize: "300% 100%",
            animation: "gradientMove 5s ease infinite",
          }}
        ></div>

        <div className="card-body p-4">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5 className="card-title fw-semibold text-dark mb-0">
              {todo.title || "Untitled Task"}
            </h5>

            <span
              className={`badge rounded-pill ${
                isCompleted
                  ? "bg-success-subtle text-success"
                  : "bg-warning-subtle text-warning"
              }`}
              style={{ fontSize: "0.75rem" }}
            >
              {/* {isCompleted ? (
                <>
                  <FaCheckCircle className="me-1" /> Completed
                </>
              ) : (
                <>
                  <FaClock className="me-1" /> Pending
                </>
              )} */}
            </span>
          </div>

          {/* Description */}
          <p className="card-text text-secondary mb-4">
            {todo.description || "No description provided."}
          </p>

          {/* Footer */}
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted d-flex align-items-center">
              <FaClock className="me-1" />
            </small>

            <div className="d-flex gap-2">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="btn btn-sm btn-outline-success rounded-pill px-3 d-flex align-items-center"
                onClick={() => handleEdit(todo.id)}
              >
                <FaEdit className="me-1" /> Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger rounded-pill px-3 d-flex align-items-center"
                onClick={() => handleDelete(todo.id)}
              >
                <FaTrashAlt className="me-1" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;

/* Optional CSS Animation (Add this to your global CSS file or style tag)
-------------------------------------------------------------- */
// const styles = `
// @keyframes gradientMove {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
// .card:hover {
//   transform: translateY(-6px);
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
// }
// `;
// document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
