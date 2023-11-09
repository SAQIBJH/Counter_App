import { useState } from 'react'
import './App.css'
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0)
  const Decrement = () => {
    if (count > 0) setCount(count - 1);
    else toast.error("Can't Decrement less than 0");
  }


  return (
    <>
      <div className='main'>
        <div className='cnt'>

        <h1>Counter : {count}</h1>
        </div>
        <div className='btn'>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

        </div>
      </div>
    </>
  );
}

export default App
