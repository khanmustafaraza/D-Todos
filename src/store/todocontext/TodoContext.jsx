import { createContext, useContext, useEffect, useState } from "react";

const CreateTodoContext = createContext();

const TodoAppProvider = ({ children }) => {
  const [todoObj, setTodoObj] = useState({
    id: null,
    title: "",
    description: "",
  });

  const [todoList, setTodoList] = useState([]);

  // ✅ Handle input change
  const handleTodoChange = (e) => {
    setTodoObj({
      ...todoObj,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Add or Update todo
  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!todoObj.title.trim()) {
      alert("Please enter a title!");
      return;
    }

    if (todoObj.id) {
      // 🧩 EDIT MODE → update existing todo
      const updatedList = todoList.map((todo) =>
        todo.id === todoObj.id
          ? { ...todo, title: todoObj.title, description: todoObj.description }
          : todo
      );

      setTodoList(updatedList);
      setTodoObj({ id: null, title: "", description: "" });
      localStorage.setItem("todos", JSON.stringify(updatedList));
    } else {
      // 🆕 ADD MODE → add new todo
      const newTodo = {
        ...todoObj,
        id: Date.now(),
        completed: false,
      };
      const updatedList = [...todoList, newTodo];
      setTodoList(updatedList);
      setTodoObj({ id: null, title: "", description: "" });
      localStorage.setItem("todos", JSON.stringify(updatedList));
    }
  };

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodoList(JSON.parse(stored));
  }, []);

  // ✅ Auto-save when todoList changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  // ✅ Handle Edit
  const handleEdit = (id) => {
    const todoToEdit = todoList.find((todo) => todo.id === id);
    if (!todoToEdit) return;
    setTodoObj(todoToEdit);
    // prefill form with selected todo
  };

  // ✅ Handle Delete
  const handleDelete = (id) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
    localStorage.setItem("todos", JSON.stringify(updatedList));
  };

  return (
    <CreateTodoContext.Provider
      value={{
        todoObj,
        setTodoObj,
        todoList,
        setTodoList,
        handleTodoChange,
        handleAddTodo,
        handleEdit,
        handleDelete,
      }}
    >
      {children}
    </CreateTodoContext.Provider>
  );
};

// ✅ Custom hook
const useTodo = () => useContext(CreateTodoContext);

export default useTodo;
export { TodoAppProvider };
