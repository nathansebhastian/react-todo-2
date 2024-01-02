import { useState } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { BsCheck2Square } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin7Line } from 'react-icons/ri';

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
      {/* Task Title */}
      <div className='max-w-lg px-5 m-auto mt-20'>
        <h1 className='flex justify-center text-3xl font-bold underline'>
          My Todo List
          <FaCheckSquare style={{ color: '#42C239' }} />
        </h1>
      </div>
      {/* Add Task */}
      <form>
        <div className='flex items-center w-full max-w-lg gap-2 p-5 m-auto'>
          <input
            type='text'
            placeholder='start typing ...'
            className='w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-sky-700'
          />
          <button
            type='submit'
            className='px-5 py-2 text-md text-white bg-blue-500 border-2 border-transparent rounded-lg hover:bg-blue-700'
          >
            Submit
          </button>
        </div>
      </form>
      {/* Task List */}
      <ul className='grid max-w-lg gap-2 px-5 m-auto'>
        {tasks.map(task => (
          <li
            key={task.id}
            className={`p-5 rounded-xl bg-zinc-200 ${
              task.completed === 'completed' && 'bg-opacity-50 text-zinc-500'
            }`}
          >
            <div className='flex flex-col gap-5'>
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.title}
              </span>
              <div className='flex justify-between gap-5'>
                <button>
                  {task.completed ? (
                    <span className='flex items-center gap-1'>
                      <TbRefresh />
                      Set Active
                    </span>
                  ) : (
                    <span className='flex items-center gap-1'>
                      <BsCheck2Square />
                      Set Completed
                    </span>
                  )}
                </button>
                <div className='flex items-center gap-2'>
                  <button
                    className='flex items-center gap-1 '
                  >
                    <FaRegEdit />
                    Edit
                  </button>
                  <button
                    className='flex items-center gap-1 text-red-500'
                  >
                    <RiDeleteBin7Line />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
