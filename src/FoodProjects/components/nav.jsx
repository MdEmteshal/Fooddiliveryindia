import { MdOutlineFoodBank } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { dataContext } from "./userContextapi";
import { food_items } from "./food";
import { useSelector } from "react-redux";
export const Nav = () => {
    const {input,setinput,category_items,setcategory_items,showcart,setshowcart}=useContext(dataContext)
    const cartitems=useSelector((state)=>state.cartlist.cartlist)
    useEffect(()=>{
       let newlist= food_items.filter((item)=>item.food_name.toLowerCase().includes(input) || item.food_name.includes(input))
       setcategory_items(newlist)
    },[input])
    return (
        <>
            <div className=" w-full h-[100px] flex justify-between  items-center p-[26px] md:p-[32px] " >
                {/* logo */}
                <div className=" w-[70px] h-[70px] bg-white  rounded-[10px] flex items-center justify-center shadow-xl ">
                    <MdOutlineFoodBank className="w-[50px] h-[50px] text-green-300 m-[5px] md:m-[0px]" />

                </div>
                {/* search bar */}
                <div >
                <form action="" onSubmit={(e)=>e.preventDefault()} className="w-[150px] bg-white flex items-center gap-2 rounded-[30px] cursor-pointer m-[5px] md:m-[0px] md:w-[700px] ">

                    <input value={input} type="text" name="" id=""  placeholder="Search items..." onChange={(e)=>setinput(e.target.value)} className="flex-1 h-[60px]  pl-2 font-bold rounded-l-[30px] outline-0"/>


                    <FaSearch className="w-[70px] h-[50px] text-green-300 rounded-r-[30px] "/>
                </form>
                

                </div>
                {/* add to cart */}
                <div className="flex w-[70px] h-[70px] bg-white  rounded-[10px] items-center justify-center shadow-xl p-[4px] m-[5px] md:m-[0px]" onClick={()=>setshowcart(true)} >
                    <BsFillCartCheckFill className="w-[50px] h-[50px] text-green-300 bg-white shadow-blue-100 " />
                    <span className="font-bold rounded-[50%] bg-green-300 w-[20px] items-center flex justify-center">{cartitems.reduce((acumalort,currentitem)=>acumalort+currentitem.quantity,0)}</span>
                </div > 

            </div>


        </>
    )
}