import { MdDeleteOutline } from 'react-icons/md'

export default function TodoItem({ task, deleteTask, toggleTask }) {
   const today = new Date().toISOString().slice(0, 10);
   const isOverTime = task.deadline < today && !task.completed;

   return (
      <li className={`flex items-center justify-between p-2 mb-2 border-b border-gray-200 bg-gray-100 shadow-md rounded-lg ${isOverTime ? "bg-red-100 " : ""} ${task.completed ? 'opacity-70' : ''}`}>
         <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="form-checkbox h-5 w-5 rounded border-white bg-white border-2  text-blue-500 transition-all duration-300 transform checked:scale-100 scale-75 checked:rotate-0 rotate-90"
         />
         <span className={`flex-1 ml-2 ${task.completed ? "line-through text-gray-400" : ""} ${isOverTime ? "text-red-500" : ""}`}>
            {task.text}
         </span>
         <span className={`text-sm text-gray-500 ${isOverTime ? "text-red-500" : ""}`}>{task.deadline}</span>
         <button onClick={() => deleteTask(task.id)}
            className="py-1 px-2 text-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded hover:bg-red-700 m-2 transition-all duration-300 transform active:scale-50"
         >
            <MdDeleteOutline />
         </button>
      </li >
   );
}
