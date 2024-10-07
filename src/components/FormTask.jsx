/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContex";

function FormTask() {
  const { createTask, task, isEditable, updateTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const handleOnsubmit = (e) => {
    e.preventDefault();
    createTask({ title, descripcion });
    setTitle("");
    setDescripcion("");
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const {id}= task
    const tarea = {title,descripcion} 
    updateTask({id,tarea});

  };
  useEffect(() => {
    if (isEditable) {
      setTitle(task.title || "");
      setDescripcion(task.descripcion || "");
    } else {
      setTitle("");
      setDescripcion("");
    }
  }, [task, isEditable]);
  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={isEditable ? handleUpdate : handleOnsubmit}
        className="bg-slate-800 p-10 mb-4"
      >
        <h1 className="text-2xl text-white font-bold mb-3">{isEditable? "Actualizar Tarea": "Crea tu tarea"}</h1>
        <input
          className="w-full bg-gray-300 p-3 mb-3"
          type="text"
          placeholder="Titulo de la Tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="w-full bg-gray-300 p-3 mb-3"
          cols="15"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        ></textarea>
        <button className={isEditable? "bg-green-800 rounded-sm px-3 py-1 text-white hover:bg-green-400":"bg-indigo-600 rounded-sm px-3 py-1 text-white hover:bg-indigo-400" }>
          {isEditable? "Actualizar": "Registrar"}
        </button>
      </form>
    </div>
  );
}

export default FormTask;
