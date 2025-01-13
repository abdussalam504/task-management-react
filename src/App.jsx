import { useState } from "react";
import TaskComponent from "./task/TaskComponent";
import { initialTasks } from "./data/initialTasks";


function App() {
 const [tasks, setTasks] = useState(initialTasks());
 const [taskToEdit, setTaskToEdit] = useState(null);


const handleAdd=(task) => {

  setTasks([
    ...tasks,
     task
  ]);
    
}

 const handleDelete = (id) => {
  setTasks(tasks.filter(task => task.id !==id ));
 }


 const handleEdit = (task) => {
  setTaskToEdit(task);
 }

const handleUpdate = (updateTask) => {
  setTasks(tasks.map(task => {
    if(task.id === updateTask.id) {
      return updateTask;
    } else {
      return task;
    }
  }));
  setTaskToEdit(null);
}

const handleClear = () => {
  setTasks([]);
}

  return (
    <TaskComponent 
    tasks={tasks} 
    onAdd={handleAdd}
    onDelete={handleDelete}
    onEdit={handleEdit}
    taskToEdit={taskToEdit}
    onUpdate={handleUpdate }
    onClear={handleClear} 
    />
  )
}

export default App