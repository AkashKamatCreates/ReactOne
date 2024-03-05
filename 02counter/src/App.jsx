import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  let [counter, setCounter] = useState(15)

  // let counter = 0;

  const addValue = ()=>{
    setCounter(counter+1)
  }

  const removeValue = () =>{
    if(counter<1){
      counter = 0;
      setCounter(counter)
    }else{
      counter = counter-1;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Akash Kamat, Counter App</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick = {removeValue}>Reset Value</button>
    </>
  )
}

export default App
