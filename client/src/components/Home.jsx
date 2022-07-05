import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { JobContext } from '../context/jobsContext';
import { SearchContext } from '../context/searchContext';
import "./Home.css"
function Home() {
    const {jobtotal}=useContext(JobContext)
    const {totalJobs}=useContext(JobContext);
    const navigate=useNavigate();
    const [exp,setExp]=useState();
    const [items,setItems]=useState();
    const [ctc,setCtc]=useState();
    useEffect(()=>{
        if(jobtotal){
            setItems(jobtotal);
        }
    },[jobtotal])
    const {searchItem}=useContext(SearchContext)
    async function allJobs(){
        const data=await fetch("http://localhost:5000/jobs");
        const res=await data.json();
        totalJobs(res);
    }
    useEffect(()=>{
        allJobs();
    },[])
    function singleJob(el){
        localStorage.setItem("job",JSON.stringify(el));
        navigate("/job-details");
    } 
    function applyJobs(el){
        localStorage.setItem("apply",JSON.stringify(el));
        navigate("/apply")
    }
    if(exp==""){
        allJobs();
        setExp(null);
    }
    function setFilterData(){
        let start="";
        let end="";
        let index=0;
        if(ctc){
            for(var i=0;i<ctc.length;i++){
                if(ctc[i]==1||ctc[i]==2||ctc[i]==3||ctc[i]==4||ctc[i]==5||ctc[i]==6||ctc[i]==7||ctc[i]==8||ctc[i]==9||ctc[i]==0){
                    start+=ctc[i];
                    index=i;
                }
                else{
                    index=i;
                    break;
                }
            }
            for(var i=index+1;i<ctc.length;i++){
                if(ctc[i]==1||ctc[i]==2||ctc[i]==3||ctc[i]==4||ctc[i]==5||ctc[i]==6||ctc[i]==7||ctc[i]==8||ctc[i]==9||ctc[i]==0){
                    end+=ctc[i];
                    index=i;
                }
                else{
                    index=i;
                    break;
                }
            }
        }
        
        if(exp && ctc){
            setItems(jobtotal.filter((el)=>el.experience.includes(exp) && el.ctc>=+start && el.ctc<=+end))
        }
        else if(exp){
            setItems(jobtotal.filter((el)=>el.experience.includes(exp)));
        }
        else if(ctc){
            setItems(jobtotal.filter((el)=>el.ctc>=+start && el.ctc<=+end))
        }
    }
    //console.log(ctc,exp)
  return (
    <div className='home'>
        
            <select id="exp" onChange={(e)=>setExp(e.target.value)}>
                <option value="">Experience</option>
                <option value="fresher">Fresher</option>
                <option value="1-2 yr experience">1-2 yr</option>
                <option value="3-4 yr experience">3-4 yr</option>
                <option value=">4 yr experience">More than 4 yr</option>
            </select>
            <select id="ctc" onChange={(e)=>setCtc(e.target.value)}>
                <option value="">CTC</option>
                <option value="2-6">2-6</option>
                <option value="7-10">7-10</option>
                <option value="11-15">11-15</option>
                <option value="16-20">Above 15</option>
            </select>
            <button onClick={()=>{
                setFilterData()
            }}>Filter Data</button>
        {items!==undefined && items.filter((el)=>el.title.includes(searchItem)).map((el)=>(
            <div className='job-card'>
                <p>
                    <div><b>Job Title</b> : {el.title}</div>
                    <div><b>Company</b> : {el.company}</div>
                </p>
                <p>
                    <div style={{marginBottom:"7px"}}>
                    <button onClick={()=>{
                        applyJobs(el)
                    }}>Apply</button>
                    </div>
                    <button onClick={()=>{
                        singleJob(el)
                    }}>Show Details</button>
                </p>
            </div>
        ))}
    </div>
  )
}

export default Home