import React from 'react';
interface Props {
  taskText: string;
}

const Task: React.FC<Props> = ({taskText}) => {
  return (
    <div className='border mt-4'>
      <h1>{taskText}</h1>
    </div>
  );
};

export default Task;