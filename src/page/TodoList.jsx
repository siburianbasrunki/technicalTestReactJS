import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Todo List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center mb-2 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className="cursor-pointer"
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
