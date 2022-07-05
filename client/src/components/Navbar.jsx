import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import { SearchContext } from '../context/searchContext';
import "./Navbar.css"
function Navbar() {
    //const [searchItem,setSearch]=useState("");
    const {findItem}=useContext(SearchContext)
  return (
    <div className='nav_container'>
        <div className='nav_letter'><Link to="/">Home</Link></div>
        <input onChange={e=>findItem(e.target.value.toLowerCase())} type="search" placeholder='Search'/>
        <div className='nav_letter'><Link to="/login">Login</Link></div>
        <div className='nav_letter'><Link to="/signup">Signup</Link></div>
    </div>
  )
}

export default Navbar