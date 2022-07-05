import React from 'react'

function ApplyJobs() {
    const applyingJob=JSON.parse(localStorage.getItem("apply"));
    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user._id)
    async function formSubmit(e){
        e.preventDefault();
        let applied=false;
        const data=await fetch(`http://localhost:5000/users/${user._id}/by-Id`);
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
            fetch(`http://localhost:5000/users/${user._id}/job_apply`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(applyingJob._id)
            })
        }
        
    }
  return (
    <div>
        <form onSubmit={formSubmit}>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Higher Education'/>
            <input type="text" placeholder='Experience'/>
            <input type="text" placeholder='Current CTC'/>
            <input type="text" placeholder='Expected CTC'/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default ApplyJobs