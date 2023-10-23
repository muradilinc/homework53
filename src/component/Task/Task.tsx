import React from 'react';
import {Trash} from '@phosphor-icons/react';
interface Props {
  taskText: string;
  statusTask: boolean;
  deleteButton: React.MouseEventHandler;
  onChangeStatus: React.ChangeEventHandler<HTMLInputElement>;
}

const Task: React.FC<Props> = ({taskText, statusTask, deleteButton, onChangeStatus}) => {
  return (
    <div className={`border rounded-2xl mt-4 flex justify-between p-4 ${statusTask ? 'bg-green-500' : 'bg-white'}`}>
      <div className='flex items-center'>
        <div className="flex items-center mr-4">
          <input onChange={onChangeStatus} checked={statusTask} id="green-checkbox" type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        </div>
        <p className={`ml-5 text-xl ${statusTask ? 'text-white': 'text-black'}`}>{taskText}</p>
      </div>
      <button onClick={deleteButton}><Trash className={statusTask ? 'text-white': 'text-black'} size={32}/></button>
    </div>
  );
};

export default Task;