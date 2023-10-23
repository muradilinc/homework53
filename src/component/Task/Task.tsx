import React from 'react';
interface Props {
  taskText: string;
  deleteButton: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({taskText, deleteButton}) => {
  return (
    <div className='border mt-4'>
      <h1>{taskText}</h1>
      <button onClick={deleteButton}>delete</button>
    </div>
  );
};

export default Task;