import { useEffect, useState } from "react"


export default function TaskForm({onAdd,taskToEdit,onUpdate}) {

  const [text, setText] = useState('');

   useEffect(() => {
    if(taskToEdit) {
      setText(taskToEdit.text);
    }

   }, [taskToEdit]); 

  const handleClick =() => {
    if(taskToEdit) {
      onUpdate({
        ...taskToEdit,
        text: text
      })
    } else {
      onAdd({
        id:crypto.randomUUID(),
        text:text,
      });
    }

    setText('');
  }


  return (
    <div className="col-span-4 p-3 bg-slate-100 rounded shadow-sm">
        <h2 className="text-2xl font-bold mb-3">Task Form</h2>
        <input value={text} onChange={(e) =>setText(e.target.value)} type="text" className="border p-2 w-full mb-2 rounded" />
        <button onClick={handleClick} className="py-2 px-4 bg-green-600 text-white rounded">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
    </div>
  )
}

