import React, { useState } from 'react'
import "./Login.css"
function Login() {
    const [user,setUser]=useState({
       
        email:"",
        password:"",
        
    });
    function handleChange(e){
        setUser({
            ...user,
            [e.target.id]:e.target.value
        })
    }
    async function handleSubmit(e){
        e.preventDefault();
        console.log(user)
        try {
            await fetch("https://job-portal-app-ex.herokuapp.com/users/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }).then(async(res)=>{
                console.log(res);
                if(res.status==200){
                    const data=await fetch(`https://job-portal-app-ex.herokuapp.com/users/${user.email}`);
                    const respond=await data.json();
                    localStorage.setItem("user",JSON.stringify(respond));
                }
                if(res.status==400){
                    alert("Invalid credential")
                    console.log("yes")
                }
            })
        } catch (error) {
            alert("Invalid credantials")
        }
    }
  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
            <input className='input' id="email" onChange={handleChange} type="email" placeholder='Email'/>
            <input className='input' id="password" onChange={handleChange} type="password" placeholder='Password'/>
            <input id="button" type="submit" />
        </form>
    </div>
  )
}

export default Login