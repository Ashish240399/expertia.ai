import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import { SearchContext } from '../context/searchContext';
function Navbar() {
    //const [searchItem,setSearch]=useState("");
    const {findItem}=useContext(SearchContext)
  return (
    <div>
        <Link to="/">Home</Link>
        <input onChange={e=>findItem(e.target.value.toLowerCase())} type="search"/>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Navbar