import { useContext } from "react";
import { TaskContext } from "../context/TaskContex";

/* eslint-disable react/prop-types */
function TaskCard({ task }) {
  const {deleteTask, getTask } = useContext(TaskContext)
 
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.descripcion}</p>
      <button className="bg-red-500 py-1 px-2 rounded-sm mt-3 mb-2 hover:bg-red-400" 
        onClick={() => {
          deleteTask(task);
        }}
      >
        Eliminar
      </button>
      <button className="bg-yellow-500 py-1 px-2 rounded-sm mt-3 mb-2 ml-2 hover:bg-yellow-300" 
        onClick={()=> getTask(task)}
      >
        Editar
      </button>
    </div>
  );
}

export default TaskCard;
