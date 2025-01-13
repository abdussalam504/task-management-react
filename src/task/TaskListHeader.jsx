

export default function TaskListHeader({onClear}) {
  return (
    <div className="flex items-center mb-5">
         <h2 className="text-2xl font-bold mb-3">Task List</h2>
         <button onClick={() => onClear()} className="py-2 px-4 rounded bg-rose-600 text-white ml-auto">Delete All</button>
    </div>
  )
}

 