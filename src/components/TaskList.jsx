import { BsCheck2Square } from 'react-icons/bs';
import { TbRefresh } from 'react-icons/tb';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin7Line } from 'react-icons/ri';

export const TaskList = ({tasks}) => {
  return (
    <ul className='grid max-w-lg gap-2 px-5 m-auto'>
      {tasks.map(task => (
        <li
          key={task.id}
          className={`p-5 rounded-xl bg-zinc-200 ${
            task.completed ? 'bg-opacity-50 text-zinc-500' : ''
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
                  <span className='flex items-center gap-1 hover:underline'>
                    <TbRefresh />
                    Set Active
                  </span>
                ) : (
                  <span className='flex items-center gap-1 hover:underline'>
                    <BsCheck2Square />
                    Set Completed
                  </span>
                )}
              </button>
              <div className='flex items-center gap-2'>
                <button className='flex items-center gap-1 hover:underline'>
                  <FaRegEdit />
                  Edit
                </button>
                <button className='flex items-center gap-1 text-red-500 hover:underline'>
                  <RiDeleteBin7Line />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
