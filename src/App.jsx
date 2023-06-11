
import React, { useState, useEffect } from "react"
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";




function TodoApp() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [sortBy, setSortBy] = useState("text");
  const [filterBy, setFilterBy] = useState(false);

  useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks)); }, [tasks]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleTask = (id) => setTasks(
    tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task
    ));

  return (
    <div className=" min-h-screen main" >
      <div className="max-w-lg mx-auto p-4 py-8">
        <TodoForm addTask={addTask} sortBy={sortBy} setSortBy={setSortBy} filterBy={filterBy} setFilterBy={setFilterBy} />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          sortBy={sortBy}
          filterBy={filterBy}
        />
      </div>
    </div>
  );
}

export default TodoApp;
