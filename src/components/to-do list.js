"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PersistentTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editing, setEditing] = useState({ id: null, text: "" });
  const [selectedTodos, setSelectedTodos] = useState([]); // Track selected todos for deletion

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([{ id: Date.now(), text: newTodo, completed: false }, ...todos]);
      setNewTodo("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditClick = (id, text) => setEditing({ id, text });

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editing.text } : todo
      )
    );
    setEditing({ id: null, text: "" });
  };

  const toggleSelectTodo = (id) => {
    setSelectedTodos((prev) =>
      prev.includes(id) ? prev.filter((todoId) => todoId !== id) : [...prev, id]
    );
  };

  const clearSelectedTodos = () => {
    setTodos(todos.filter((todo) => !selectedTodos.includes(todo.id)));
    setSelectedTodos([]); // Clear the selection after deleting
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div
      className="min-h-screen min-w-full flex flex-col items-center pt-10 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/back.webp)" }}
    >
      <div className="bg-white/75 p-6 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown} // Add keydown handler here
            placeholder="Add a task..."
            className="flex-1 p-2 border rounded-l"
          />
          <button
            onClick={addTodo}
            className="p-2 bg-green-500 text-white rounded-r"
          >
            Add
          </button>
        </div>
        <ul>
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`p-2 flex items-center justify-between border-b ${
                  todo.completed ? "bg-green-100" : "bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTodos.includes(todo.id)}
                  onChange={() => toggleSelectTodo(todo.id)} // Toggle selection for delete
                  className="mr-2"
                />
                {editing.id === todo.id ? (
                  <div className="flex-1">
                    <input
                      type="text"
                      value={editing.text}
                      onChange={(e) =>
                        setEditing({ ...editing, text: e.target.value })
                      }
                      className="w-full border p-1"
                    />
                    <button
                      onClick={() => saveEdit(todo.id)}
                      className="mt-2 p-2 bg-blue-500 text-white rounded"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <span
                    className={`flex-1 cursor-pointer ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                    onClick={() => handleEditClick(todo.id, todo.text)}
                  >
                    {todo.text}
                  </span>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {todos.length > 0 && (
          <button
            onClick={clearSelectedTodos} // Clear selected todos
            className="mt-4 w-full bg-red-500 text-white p-2 rounded"
          >
            Clear Selected
          </button>
        )}
      </div>
    </div>
  );
};

export default PersistentTodoList;
