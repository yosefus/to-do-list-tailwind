import TodoItem from "./TodoItem";

export default function TodoList({ tasks, deleteTask, toggleTask, sortBy, filterBy }) {

   const sortedTasks = tasks.sort((a, b) => {
      if (sortBy === "text") return a.text.localeCompare(b.text);
      else if (sortBy === "deadline") return a.deadline.localeCompare(b.deadline);
      else if (sortBy === "completed") return a.completed - b.completed;
      else return 0;
   });

   const filteredTasks = filterBy ? sortedTasks.filter((task) => !task.completed) : sortedTasks;

   return (
      <ul className="todo-list">
         {filteredTasks.map((task) => (
            <TodoItem
               key={task.id}
               task={task}
               deleteTask={deleteTask}
               toggleTask={toggleTask}
            />
         ))}
      </ul>
   );
}