import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue !== "") {
      const newTask = {
        id: tasks.length + 1,
        name: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleToggleCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: newName };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="Todo">
      <h1>Todo List</h1>
      <ul className="Todo-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task.id)}
              className="Todo-checkbox"
            />
            <span className="Todo-text">{task.name}</span>
            <input
              type="text"
              defaultValue={task.name}
              onBlur={(event) => handleEditTask(task.id, event.target.value)}
              className="Todo-input"
            />
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="Todo-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="Todo-input-container">
        <input
          type="text"
          placeholder="Add new task"
          value={inputValue}
          onChange={handleChange}
          className="Todo-input"
        />
        <button onClick={handleAddTask} className="Todo-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default Todo;
