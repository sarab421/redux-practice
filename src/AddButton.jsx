import React from 'react'
import { useAppDispatch } from './store/hook'
import { increament,decrement } from './store/counterSlice';
const AddButton = () => {

  const dispatch = useAppDispatch();
 
  return (
    <div><button onClick={()=>{
  dispatch(increament());}}>Click to add</button>
  <div><button onClick={()=>{dispatch(decrement())}}>Click to delete</button></div>
  </div>
  )
}

export default AddButton