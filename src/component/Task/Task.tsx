import React from 'react';
import {Trash} from '@phosphor-icons/react';
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
      <button onClick={deleteButton}><Trash size={32}/></button>
    </div>
  );
};

export default Task;