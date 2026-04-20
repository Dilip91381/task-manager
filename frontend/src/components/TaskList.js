import React from "react";
import { updateTask, deleteTask } from "../services/api";

const TaskList = ({ tasks, refresh }) => {

  // Mark task as completed
  const markComplete = async (task) => {
    await updateTask(task._id, {
      status: "Completed"
    });
    refresh();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    refresh();
  };

  return (
    <div className="task-wrapper">
      <h2>Task List</h2>

      {tasks.map((task) => (
        <div className="task-row" key={task._id}>

          {/* LEFT */}
          <div className="task-left">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>

          {/* RIGHT */}
          <div className="task-right">
            <p className="date">
              {new Date(task.createdAt).toDateString()}
            </p>

            <span
              className={`status ${
                task.status === "Completed" ? "completed" : "pending"
              }`}
            >
              {task.status}
            </span>

            <div className="btn-group">
              
              {/* Show Complete button ONLY if Pending */}
              {task.status === "Pending" && (
                <button
                  className="complete-btn"
                  onClick={() => markComplete(task)}
                >
                  Complete
                </button>
              )}

              <button
                className="delete-btn"
                onClick={() => removeTask(task._id)}
              >
                Delete
              </button>

            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default TaskList;