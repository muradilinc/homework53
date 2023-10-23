import React from 'react';
interface Props {
  taskText: string;
  deleteButton: React.MouseEventHandler;
  onChangeStatus: React.ChangeEventHandler<HTMLInputElement>;
}

const Task: React.FC<Props> = ({taskText, deleteButton, onChangeStatus}) => {
  return (
    <div className='border mt-4'>
      <input type="checkbox" onChange={onChangeStatus}/>
      <h1>{taskText}</h1>
      <button onClick={deleteButton}>delete</button>
    </div>
  );
};

export default Task;