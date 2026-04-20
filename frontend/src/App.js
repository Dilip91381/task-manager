import React, { useEffect, useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Load tasks on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <h1>Task Manager 🚀</h1>

      {/* Add Task */}
      <TaskForm refresh={fetchTasks} />

      {/* Show Tasks */}
      <TaskList tasks={tasks} refresh={fetchTasks} />
    </div>
  );
}

export default App;