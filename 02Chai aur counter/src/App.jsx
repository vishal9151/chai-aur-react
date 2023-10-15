import { useState } from "react";

function App() {
  let [count,setCount]=useState(0);
  const addValue=()=>{
    if(count<20){
      setCount(count+1);
    }
  }
  const decreseValue=()=>{
    if(count>0){
      setCount(count-1);
    }
  }
  return (
    <>
      <h1>Chai aur counter project</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Increase the Value</button>
      <button onClick={decreseValue}>Decrease the Value</button>
    </>
  );
}

export default App;
