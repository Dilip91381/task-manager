import React, { useState } from "react";
import { createTask } from "../services/api";

const TaskForm = ({ refresh }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    setTask({ title: "", description: "" });
    refresh();
  };

  return (
    <form className="task-input-section" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <input
        className="input-field"
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <button className="add-task-btn" type="submit">+ Add Task</button>
    </form>
  );
};

export default TaskForm;