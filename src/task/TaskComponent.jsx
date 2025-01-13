import TaskForm from "./TaskForm"
import TaskList from "./TaskList"


export default function TaskComponent({tasks,onAdd,onDelete,onEdit,taskToEdit,onUpdate,onClear}) {

  return (
        <div className="max-w-7xl mx-auto my-3 grid grid-cols-12 gap-4">
            <TaskForm
             onAdd={onAdd}
             taskToEdit={taskToEdit}
             onUpdate={onUpdate}
              />
            <TaskList
             tasks={tasks}
             onDelete={onDelete}
             onEdit={onEdit}
             onClear={onClear}
              />
        </div>
  )
}

