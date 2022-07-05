import React, { useState } from 'react'

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
    <div>
        <form onSubmit={handleSubmit}>
            <input id="name" onChange={handleChange} type="text" placeholder='Name'/>
            <input id="email" onChange={handleChange} type="email" placeholder='Email'/>
            <input id="password" onChange={handleChange} type="password" placeholder='Password'/>
            <input id="phone" onChange={handleChange} type="text" placeholder='Phone number'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup