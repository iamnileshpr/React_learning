import React, { useEffect, useState } from 'react'
import Header from '../assets/Components/Header'

function Home() {
let [isSubscribed,isUnsubscribed] = useState('Subscribe')
console.log(isUnsubscribed);
function handleClick(){
isUnsubscribed('Thanks for Subscribing')}
useEffect(function(){
  console.log('Home wala component chala');

  return function(){
    console.log('Home wala component mar gaya');
  }
},[handleClick])

  return (
    <div>
      <Header/>
      <h1>This is home page of coding ki duniya</h1>
      <button onClick={handleClick} style={btnStyle}>{isSubscribed}</button>
    </div>
  )
}

export default Home
let btnStyle={
  background:'blue',
  color:'white',
  padding:'10px',
  border:'none',
  borderRadius:'6px'
}
