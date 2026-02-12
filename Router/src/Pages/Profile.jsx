import React from 'react'
import Header from '../assets/Components/Header'
import { useParams } from 'react-router-dom'

function Profile() {
let {name}=useParams()//through de-structring 
console.log(name);

  return (
    <div>
      <Header/>
      <h1>Hii.. {name} welcome to coding ki duniya</h1>
    </div>
  )
}

export default Profile
