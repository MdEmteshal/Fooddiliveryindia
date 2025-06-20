import { ImLeaf } from "react-icons/im";
import { GiChickenOven } from "react-icons/gi";
import {useDispatch} from "react-redux"
import { handleadditem, handleremoveitem } from "../foodstore/cartreducer";

export const Card=({name,image,type,id,price})=>{
    let dispatch=useDispatch()
    
    return(
        <>
        
        <div className="w-[250px] h-[380px] rounded-2xl bg-white hover:border-2 border-green-400 shadow-2xl p-[10px]" >
            <div className=" w-full h-[70%] overflow-hidden rounded-2xl">
                <img src={image} alt=""  className="w-full h-full object-cover" />
            </div>
            <div className="text-green-500 text-xl ">
                <span className="text-zinc-950 font-bold">{name}</span>
            </div>
            <div className="text-green-500 flex justify-between text-xl">
                <span>Prise: ${price}</span>
                <span className="flex justify-center">Type: {type=='veg'?<ImLeaf /> :<GiChickenOven />}</span>
            </div>
            <div className="flex justify-between items-center " style={{marginTop:'5px'}}>
                   <button className="bg-yellow-300 w-[110px] h-[40px] rounded-xl hover:bg-yellow-400" onClick={()=>dispatch(handleadditem({id,
        food_name: name,
        food_image: image,
        food_price: price,
        quantity: 1,}))}>Add to Cart</button>
                      <button className="bg-green-300 w-[110px] h-[40px] rounded-xl hover:bg-green-400" >Buy Now</button>
            </div>
         
        </div>
        
        
        </>
    )
}