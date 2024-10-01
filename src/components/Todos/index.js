import { useGetToDosQuery } from '../../services/toDo'
import Task from '../Task'
const Todos = () => {
  const { data, isLoading, error } = useGetToDosQuery()
  
  if(isLoading){
    return <div>...loading...</div>
  }
  if(error){
    return <div>{error.status}</div>
  }
  return (
    <div>
      <ul>{data && data.map(task => <Task key={task.id} task={task} />)}</ul>
    </div>
  )
}

export default Todos
