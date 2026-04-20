import React, { useState } from "react";
import { createTask } from "../services/api";

const TaskForm = ({ refresh }) => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    setTask({ title: "", description: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
        required
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;