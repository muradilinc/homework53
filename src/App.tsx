import React, {useState} from 'react';
import AddTaskForm from './component/AddTaskForm/AddTaskForm.tsx';
import Task from './component/Task/Task.tsx';

interface Task {
  id: string;
  taskText: string;
  statusTask: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id: new Date().toString(), taskText: 'Byu milk', statusTask: false},
    {id: new Date().toString(), taskText: 'Walk with dog', statusTask: false},
    {id: new Date().toString(), taskText: 'Do homework', statusTask: false},
  ]);
  const [taskText, setTaskText] = useState('');

  const addText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    const task: Task = {
      id: new Date().toString(),
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
      {
        tasks.map(task => {
          return <Task key={task.id} {...task}/>;
        })
      }
    </div>
  );
};

export default App;