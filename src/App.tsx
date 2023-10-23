import {useState} from 'react';
import AddTaskForm from './component/AddTaskForm/AddTaskForm.tsx';
import Task from './component/Task/Task.tsx';

interface Task {
  id: Date;
  taskText: string;
  statusTask: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const task: Task = {
      id: new Date(),
      taskText: 'Cook cakes',
      statusTask: false
    };

    const taskArray = [...tasks];
    taskArray.push(task);

    setTasks(taskArray);
  };

  console.log(tasks);

  return (
    <div className="container mx-auto my-5">
      <AddTaskForm addButton={addTask}/>
      <Task/>
    </div>
  );
};

export default App;