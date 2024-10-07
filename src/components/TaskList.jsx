import { TaskContext } from "../context/TaskContex";
import TaskCard from "./TaskCard";
import { useContext } from "react";
/* eslint-disable react/prop-types */
function TaskList() {
  const {tasks}= useContext(TaskContext)
  if (tasks.length === 0) {
    return <div className="text-4xl font-bold text-white text-center">No hay tareas por el momento</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
         <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskList;
