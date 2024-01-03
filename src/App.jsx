import { useState } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { AddTask, TaskList } from './components';
import { Toaster } from 'react-hot-toast';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Learn JavaScript',
      completed: true,
      id: 1,
    },
    {
      title: 'Learn React',
      completed: false,
      id: 2,
    },
  ]);

  return (
    <>
      <Toaster position='bottom-right' />
      {/* Task Title */}
      <div className='max-w-lg px-5 m-auto mt-20'>
        <h1 className='flex justify-center text-3xl font-bold underline'>
          My Todo List
          <FaCheckSquare style={{ color: '#42C239' }} />
        </h1>
      </div>
      <AddTask setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
