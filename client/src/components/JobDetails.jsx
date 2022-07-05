import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./JobDetails.css"
function JobDetails() {
    const navigate=useNavigate()
    const singleJob=JSON.parse(localStorage.getItem("job"));
    console.log(singleJob);
    function applyJobs(el){
        localStorage.setItem("apply",JSON.stringify(singleJob))
        navigate("/apply")
    }
  return (
    <div>
        {singleJob!==undefined && 
        <div className='single-card'>
            <p><b>Job Title : </b>{singleJob.title}</p>
            <p><b>Location : </b>{singleJob.location}</p>
            <p><b>Salry : </b>{singleJob.ctc} LPA</p>
            <p><b>Experience : </b>{singleJob.experience}</p>
            <p><b>Company : </b>{singleJob.company}</p>
            <button className='btn' onClick={()=>{
                    applyJobs()
                }}>Apply</button>
        </div>}
    </div>
  )
}

export default JobDetails