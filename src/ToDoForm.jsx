// import React library and hooks
import React, { useState } from "react";
// import tailwindcss library
import "tailwindcss/tailwind.css";

export default function TodoForm({ addTask, sortBy, setSortBy, filterBy, setFilterBy }) {
   const [text, setText] = useState("");
   const [deadline, setDeadline] = useState("");

   const handleTextChange = (e) => setText(e.target.value);

   const handleDateChange = (e) => setDeadline(e.target.value);

   const handleSortChange = (e) => setSortBy(e.target.value);

   const handleFilterChange = (e) => setFilterBy(e.target.checked);

   const handleSubmit = (e) => {
      e.preventDefault();
      if (text && deadline) {
         const newTask = {
            id: Math.floor(Math.random() * 100000),
            text,
            deadline,
            completed: false,
         };
         addTask(newTask);
         setText("");
         setDeadline("");
      }
   };

   return (
      // add tailwind classes for responsive design
      <form className="flex flex-col items-center mb-5 bg-gray-100 shadow-md rounded-lg p-4 w-full mx-auto" onSubmit={handleSubmit}>
         <h1 className="font-sans mb-4 text-3xl font-bold leading-tight text-center md:text-4xl md:leading-none  my-2">
            what do you have to do?         </h1>
         <div className="flex items-center  mb-2 flex-wrap justify-center gap-1 w-full">
            <input
               type="text"
               value={text}
               required
               placeholder="Enter task"
               onChange={handleTextChange}
               // add tailwind classes for responsive design
               className="w-full md:w-1/2 p-1 border border-gray-400 bg-gray-200 rounded"
            />
            <input
               type="date"
               value={deadline}
               required
               onChange={handleDateChange}
               // add tailwind classes for responsive design
               className="w-full md:w-1/4 p-1 border border-gray-400 bg-gray-200 rounded "
            />
            <button type="submit"
               // add tailwind classes for responsive design
               className="w-full md:w-auto py-1 px-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded hover:from-blue-700 hover:to-blue-900 sm:w-32">
               Add
            </button>
         </div>
         <div className="flex items-center space-x-1 flex-wrap gap-2 w-full sm:justify-center">
            <label htmlFor="sort-by" className="text-gray-500">Sort by:</label>
            <select id="sort-by" value={sortBy} onChange={handleSortChange}
               // add tailwind classes for responsive design
               className="w-full md:w-auto sm:w-24 p-1 border border-gray-400 bg-gray-200 rounded">
               <option value="text">Text</option>
               <option value="deadline">Deadline</option>
               <option value="completed">Completed</option>
            </select>
            <label htmlFor="filter-by" className="text-gray-500">Filter not completed:</label>
            <input id="filter-by" type="checkbox" checked={filterBy} onChange={handleFilterChange} className="form-checkbox" />
         </div>
      </form>
   );
}
