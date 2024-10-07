/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react"
import { tasks as tareas } from "../tasks";
export const TaskContext = createContext()
function TaskContexProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [task,setTask] = useState({})
  const [isEditable, setIsEditable]= useState(false)
  const createTask= (tarea) =>{
    setTasks([...tasks,{
      id: tasks.length,
      ...tarea
    }]);
  }
  const getTask =(tarea)=>{
    setTask({...tarea})
    setIsEditable(true)
  }
  const deleteTask = ({id})=>{
    const tareas = tasks.filter((t)=> t.id !== id)
    setTasks(tareas)
  }

  const updateTask = ({ id, tarea }) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, ...tarea } : t
    );
    setTasks(updatedTasks);
    setIsEditable(false);
  };

  useEffect(() => {
    setTasks(tareas);
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      task,
      createTask,
      deleteTask,
      updateTask,
      isEditable,
      getTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContexProvider
