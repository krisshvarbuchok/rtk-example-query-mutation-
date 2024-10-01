import { useCreateToDoMutation } from '../../services/toDo'
import { enterText } from '../../redux/textSlice'
import { useSelector, useDispatch } from 'react-redux'

const InputField = () => {
  const dispatch = useDispatch()
  const { value: title } = useSelector(store => store.text)

  const [
    createToDo,// Это и есть триггер mutation
    {isLoading }
  ] = useCreateToDoMutation()

 //console.log('error', error);
  
// if(isLoading){
//   return <div>...Loading</div>
// }
const handleCreate = async(e) =>{
  await createToDo({ title });
  e.target.value = ''
  dispatch(enterText(e.target.value))
}
  return (
    <div>
      <input
        value={title}
        onChange={e => dispatch(enterText(e.target.value))}
      />
      <button onClick={(e) => handleCreate(e)} disabled={isLoading}>add</button>
    </div>
  )
}

export default InputField
