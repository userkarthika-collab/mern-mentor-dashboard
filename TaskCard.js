import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Category: {task.category}</p>
      <p>Progress: {task.progress}%</p>
      <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;