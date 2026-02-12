import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div  style={header}>
      <p>Coding ki duniya</p>   
      <div style={header}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  )
}

export default Header

let header={
    display:'flex',
    alignItems:'centre',
    justifyContent:'space-between',
    gap:'10px',
    fontWeight:'bold'
}
