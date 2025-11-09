import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          D-Todos
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <NavLink
              to="/create-todo"
              className={({ isActive }) =>
                isActive ? "nav-link text-warning border" : "nav-link"
              }
              aria-current="page"
            >
              Add Todo
            </NavLink>

            <NavLink
              to="/todo-list"
              className={({ isActive }) =>
                isActive ? "nav-link text-warning border" : "nav-link"
              }
              aria-current="page"
            >
              Todo List
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
