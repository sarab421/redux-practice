import AddButton from './AddButton'
import './App.css'
import ShowNumbers from './ShowNumbers'
// import React, { useState } from "react";

function App() {
  //  const [updatedNumber, setUpdatedNumber] = useState(0);
  // const increment=(updatedNumber)=>{
  //      setUpdatedNumber((prevNumber) => prevNumber + 1);
  //  console.log("increment fuction cllled" + updatedNumber)
  // }
  return (
    <>
      <ShowNumbers />
      <AddButton />
    </>
  );
}

export default App
