
import { useAppSelector } from "./store/hook"
const ShowNumbers = () => {
const showItemNumber = useAppSelector((state)=>state.counter)
  
  return (
    <div>{showItemNumber}</div>
  )
}

export default ShowNumbers