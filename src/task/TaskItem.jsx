

export default function TaskItem({task,onDelete,onEdit}) {
  
  const handleClick= () => {
      let isConfirm = confirm('Are you sure?');
      if(isConfirm) {
        onDelete(task.id);
      }
  }
  
  return (
    <div>
        <li className="flex items-center bg-white shadow-sm p-2 rounded mb-3">
            <span className="font-semibold text-lg">#</span> 
            <p className="font-semibold text-lg ml-2">{task.text}</p>
            <button onClick={() => onEdit(task)} className="py-1 px-2 rounded bg-green-600 text-white ml-auto">Edit</button>
            <button onClick={handleClick} className="py-1 px-2 rounded bg-rose-600 text-white ml-1">Delete</button>
        </li>
    </div>
  )
}

 