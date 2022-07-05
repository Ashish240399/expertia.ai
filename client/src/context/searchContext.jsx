import { createContext, useState } from "react";

export const SearchContext=createContext();
const SearchContextProvider=({children})=>{
    const [searchItem,setSearchItem]=useState("");
    const findItem=(value)=>{
        //console.log(value)
        setSearchItem(value)
    }
    //console.log(searchItem)
    return <SearchContext.Provider value={{findItem,searchItem}}>{children}</SearchContext.Provider>
}

export default SearchContextProvider