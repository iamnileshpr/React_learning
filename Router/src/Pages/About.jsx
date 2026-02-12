import React, { useState , useEffect } from 'react'
import Header from '../assets/Components/Header'

function About() {
  let [count,setCount]=useState(0)
  function increse(){
    setCount((a)=>a+1)  // a store current value, for further use or change we will target a not count
  }
  function decrese(){
    setCount(count-1)
  }
                //useEffect(function, dependency arr)
  useEffect(function(){
    console.log('About wala component chala and kuch chize change hui');
  },[increse,decrese])  
  //dependency array--empty -- creation(mount)
  //dependency array--change -- creation(mount)

  return (
    <div>
      <Header/>
      <h1>{count}</h1>
      <button style={btnStyle} onClick={increse}>Increment</button>
      <button style={btnStyle} onClick={decrese}>Decrement</button>
    </div>
  )
}

export default About

let btnStyle={
  background:'blue',
  color:'white',
  padding:'10px',
  border:'none',
  borderRadius:'6px',
  margin:'8px'
}