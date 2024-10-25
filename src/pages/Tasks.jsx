import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="tasks-page">
      <h1>Manage Your Tasks</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
