import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
 const initialState=0;
  const [state,dispatch] = useReducer(counterReducer,initialState);
  return (
    <>
    <div id="main">
    <span>{state}</span>
<button id="increment-btn" onClick={()=>dispatch({type: "increment"})}>Increment</button>
<button id="decrement-btn" onClick={()=>dispatch({type: "decrement"})}>Decrement</button> 
    </div>
  )
}


export default App;
