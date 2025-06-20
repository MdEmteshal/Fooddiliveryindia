import {  createContext, useState } from "react"
import { food_items } from "./food";


export const dataContext=createContext();
export const UserContextapi=({children})=>{
    let[category_items,setcategory_items]=useState(food_items);
    let [input,setinput]=useState("")
    let [showcart,setshowcart]=useState(false)

    const data={
        input,
        setinput,
        category_items,
        setcategory_items,
        showcart,
        setshowcart
    }
    return(
        <>
        <dataContext.Provider value={data}>
{children}

        </dataContext.Provider>
        
        
        </>
    )
}