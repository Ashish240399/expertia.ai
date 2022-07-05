import React, { useState } from 'react'
import "./Signup.css"
function Signup() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        phone:""
    });
    function handleChange(e){
        setUser({
            ...user,
            [e.target.id]:e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(user)
        fetch("http://localhost:5000/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
    }
  return (
    <div className='signup'>
        <form onSubmit={handleSubmit}>
            <input className='input' id="name" onChange={handleChange} type="text" placeholder='Name'/>
            <input className='input' id="email" onChange={handleChange} type="email" placeholder='Email'/>
            <input className='input' id="password" onChange={handleChange} type="password" placeholder='Password'/>
            <input className='input' id="phone" onChange={handleChange} type="text" placeholder='Phone number'/>
            <input className='button' type="submit" />
        </form>
    </div>
  )
}

export default Signup