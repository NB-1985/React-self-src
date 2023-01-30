import React, { useState } from 'react'
import "../Styles/contact.css"
const Contact = () => {

  const[name,setname]=useState("default")

  return (
    <div  className='contact'>
      <form>
        <input type="text" 
        placeholder='Enter your name' 
        onChange={(e)=>setname(e.target.value)}
        value={name}/>
        <input type="email" placeholder='Enter your email id'/>
        <button onClick={()=>console.log(name)}>CLICK</button>
        <p>{name}</p>
      </form>
    </div>
  )
}

export default Contact