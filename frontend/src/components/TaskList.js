import React from "react";
import { updateTask, deleteTask } from "../services/api";

const TaskList = ({ tasks, refresh }) => {
  const markComplete = async (task) => {
    await updateTask(task._id, { status: "Completed" });
    refresh();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    refresh();
  };

  return (
    <div className="task-list-wrapper">
      {tasks.map((task) => (
        <div className="single-task-item" key={task._id}>
          <div className="task-info-left">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>

          <div className="task-info-right">
            <p className="task-date">
              {new Date(task.createdAt).toDateString()}
            </p>
            <div className="button-row">
              {task.status !== "Completed" && (
                <button className="complete-btn" onClick={() => markComplete(task)}>
                  Complete
                </button>
              )}
              <button className="delete-btn" onClick={() => removeTask(task._id)}>
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