import TaskItem from "./taskItem";
import TaskListHeader from "./TaskListHeader";

export default function TaskList({ tasks,onDelete,onEdit,onClear}) {
  return (
    <div className="col-span-8 p-3 bg-slate-100 rounded shadow-sm">
      <TaskListHeader onClear={onClear} />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} 
          onDelete={onDelete}
          onEdit={onEdit}
           />
        ))}
      </ul>
    </div>
  );
}
