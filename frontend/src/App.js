import { useState } from "react";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!title || !desc) return;

    const newTask = {
      id: Date.now(),
      title,
      desc,
      date: new Date().toDateString(),
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTitle("");
    setDesc("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="app">
      <div className="card">
        <h1>🚀 Task Manager</h1>

        <div className="form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button onClick={addTask}>+ Add Task</button>
        </div>

        <h2>Task List</h2>

        {tasks.map((task) => (
          <div key={task.id} className="task">
            <div className="task-info">
              <h3>{task.title}</h3>
              <p>{task.desc}</p>
            </div>

            <div className="task-actions">
              <span>{task.date}</span>
              <button
                className="complete"
                onClick={() => toggleComplete(task.id)}
              >
                {task.completed ? "Done" : "Complete"}
              </button>
              <button
                className="delete"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}