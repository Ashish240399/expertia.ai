import { createContext, useState } from "react";

export const JobContext=createContext();
const JobContextProvider=({children})=>{
    const [jobtotal,setJobs]=useState();
    const totalJobs=(value)=>{
        setJobs(value);
    }
    return <JobContext.Provider value={{jobtotal,totalJobs}}>{children}</JobContext.Provider>
}
export default JobContextProvider;