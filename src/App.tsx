import React from 'react';
import AddTaskForm from './component/AddTaskForm/AddTaskForm.tsx';
import Task from './component/Task/Task.tsx';

const App = () => {
  return (
    <div className="container mx-auto my-5">
      <AddTaskForm/>
      <Task/>
    </div>
  );
};

export default App;