import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApplyJobs from '../components/ApplyJobs'
import Home from '../components/Home'
import JobDetails from '../components/JobDetails'
import Jobs from '../components/Jobs'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'

function Routers() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/jobs" element={<Jobs/>}></Route>
            <Route path="/job-details" element={<JobDetails/>}></Route>
            <Route path="/apply" element={<ApplyJobs/>}></Route>
        </Routes>
    </div>
  )
}

export default Routers