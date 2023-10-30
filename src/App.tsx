import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import AddTaskForm from './component/AddTaskForm/AddTaskForm.tsx';
import Task from './component/Task/Task.tsx';

interface Task {
  id: string;
  taskText: string;
  statusTask: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id: uuid(), taskText: 'Byu milk', statusTask: true},
    {id: uuid(), taskText: 'Walk with dog', statusTask: false},
    {id: uuid(), taskText: 'Do homework', statusTask: false},
  ]);
  const [taskText, setTaskText] = useState<string>('');

  const addText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    const task: Task = {
      id: uuid(),
      taskText,
      statusTask: false
    };

    const taskArray = [...tasks];
    taskArray.push(task);

    setTasks(taskArray);
  };


  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const changeStatus = (id: string) => {
    // const tasksArray = tasks.map(task => {
    //   const copyObj = {...task};
    //   if (copyObj.id === id) {
    //     copyObj.statusTask = !copyObj.statusTask;
    //   }
    //
    //   return copyObj;
    // });

    setTasks(prevState => {
      return prevState.map(task => {
        const copyObj = {...task};
        if (copyObj.id === id) {
          copyObj.statusTask = !copyObj.statusTask;
        }

        return copyObj;
      });
    });
  };


  return (
    <div className="container mx-auto my-5">
      <AddTaskForm
        text={taskText}
        onChangeText={(event) => addText(event)}
        addButton={addTask}
      />
      {
        tasks.map(task => {
          return <Task
            key={task.id}
            {...task}
            deleteButton={() => deleteTask(task.id)}
            onChangeStatus={() => changeStatus(task.id)}
          />;
        })
      }
    </div>
  );
};

export default App;