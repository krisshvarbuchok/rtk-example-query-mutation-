import { useDeleteToDoMutation, useEditTodoMutation } from '../../services/toDo'
import { useState } from 'react';
import { useGetToDosQuery, useIsComplTodoMutation } from '../../services/toDo'

const Task = ({ task}) => {
  const [deleteToDo, {isLoading}] = useDeleteToDoMutation();
  const [editTodo] = useEditTodoMutation();
  const [isComplTodo] = useIsComplTodoMutation();

  const { data: tasks  } = useGetToDosQuery()
  console.log(tasks);
  
  const [input, setInput] = useState(false);
  const [text, setText] = useState(task.title)
  const [completed, setCompleted] = useState(task.isCompleted)

  const handleUpdateTask = async () =>{
    setInput(!input)
  }
  const handleSave = async () =>{
    const updatedTask =  { title: text };
    await editTodo({id:task.id, updatedTask}); 
   setInput(false)
  }
  const handleIsComplTodo = async () =>{
    console.log(task.id, !task.isCompleted);
    await isComplTodo({id: task.id, boolean: !task.isCompleted});
    setCompleted(!completed)
  }
 
 
  return (
    <li>
      {isLoading ? (<div>...Loading</div>) : (input ? <input value={text} onChange={(e)=>setText(e.target.value)} /> : 
      <p><input type="checkbox" checked={completed} onChange={()=>handleIsComplTodo()}/> {text}</p>)}
      <button onClick={() => deleteToDo(task.id)}>delete</button>
      {input ? <button onClick={() => handleSave()}>save</button> :<button onClick={handleUpdateTask} disabled={isLoading}>edit</button>}
    </li>
  )
}

export default Task
