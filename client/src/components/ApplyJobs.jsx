import React from 'react'
import "./ApplyJobs.css"
function ApplyJobs() {
    const applyingJob=JSON.parse(localStorage.getItem("apply"));
    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user._id)
    async function formSubmit(e){
        e.preventDefault();
        let applied=false;
        const data=await fetch(`https://job-portal-app-ex.herokuapp.com/users/${user._id}/by-Id`);
        const res=await data.json();
        console.log(res.applied_job)
        if(res.applied_job!==undefined){
            for(var i=0;i<res.applied_job.length;i++){
                if(res[i]==applyingJob._id){
                    applied=true;
                    break;
                }
            }
        }
        if(!applied){
            console.log("in")
            fetch(`https://job-portal-app-ex.herokuapp.com/users/${user._id}/job_apply`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(applyingJob._id)
            })
        }
        
    }
  return (
    <div className='apply'>
        <form onSubmit={formSubmit}>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Higher Education'/>
            <input type="text" placeholder='Experience'/>
            <input type="text" placeholder='Current CTC'/>
            <input type="text" placeholder='Expected CTC'/>
            <button className='btnapp' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ApplyJobs