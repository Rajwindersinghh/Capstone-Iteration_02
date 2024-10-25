import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <p>{task.name}</p>
    </div>
  );
};

export default TaskItem;
