import React, {useState} from 'react';
import AddTaskForm from './component/AddTaskForm/AddTaskForm.tsx';
import Task from './component/Task/Task.tsx';

interface Task {
  id: Date;
  taskText: string;
  statusTask: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const addText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    const task: Task = {
      id: new Date(),
      taskText,
      statusTask: false
    };

    const taskArray = [...tasks];
    taskArray.push(task);

    setTasks(taskArray);
  };


  return (
    <div className="container mx-auto my-5">
      <AddTaskForm
        text={taskText}
        onChangeText={(event) => addText(event)}
        addButton={addTask}/>
      <Task/>
    </div>
  );
};

export default App;