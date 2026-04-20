import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="main-container">
      <div className="task-card-main">
        <h1>🚀 Task Manager</h1>
        <TaskForm refresh={fetchTasks} />
        <h2 className="list-title">Task List</h2>
        <TaskList tasks={tasks} refresh={fetchTasks} />
      </div>
    </div>
  );
}

export default App;