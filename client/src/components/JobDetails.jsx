import React from 'react'
import { useNavigate } from 'react-router-dom';

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
        {singleJob!==undefined && <div>
            <p>{singleJob.title}</p>
            <p>{singleJob.ctc}</p>
            <p>{singleJob.experience}</p>
            <button onClick={()=>{
                    applyJobs()
                }}>Apply</button>
        </div>}
    </div>
  )
}

export default JobDetails