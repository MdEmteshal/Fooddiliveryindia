import { ImCross } from "react-icons/im";
import { MdAutoDelete } from "react-icons/md";
import image1 from "../../assets/foodimg/image1.avif"
import { useContext } from "react";
import { dataContext } from "./userContextapi";
import { useDispatch, useSelector } from "react-redux";
import { handledecreasequantity, handleincreasequantity, handleremoveitem } from "../foodstore/cartreducer";
export const Cartsection = () => {
    let { showcart, setshowcart } = useContext(dataContext)
    const dispatch = useDispatch()
    const cartitems = useSelector((state) => state.cartlist.cartlist)
    console.log(cartitems)
    return (
        <>
            <div className={`w-[100%] md:w-[40vw] h-[100%] bg-white  fixed top-0 right-0 ${showcart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 p-[32px]`} >
                <header className="flex justify-between items-center text-3xl text-green-500 mb-1">
                    <span>Order items...</span>
                    <span onClick={() => setshowcart(false)}><ImCross /></span>
                </header>
                <hr  />

                {/* section area */}

                {
                    cartitems.length === 0 ? (<p className="text-center text-xl mt-10 text-gray-500">Your cart is empty</p>) :
                        (

                            <div className="h-full overflow-y-auto mt-4">{
                                cartitems.map((items) => (


                                <div key={items.id}>

                                    <div className="w-full h-[150px] shadow-2xl bg-gray-300 flex justify-center items-center rounded-4xl" style={{ marginTop: '40px' }}>

                                        <div className="w-[60%] h-[160px]  flex gap-2 justify-center items-center">

                                            <div className="w-[60%] h-[120px]  overflow-hidden rounded-3xl">
                                                <img src={items.food_image} alt="" />
                                            </div>
                                            <div className=" w-[30%] h-[150px] flex  flex-col justify-between text-xl items-center " style={{ padding: '20px' }}>
                                                <span className="font-medium">{items.food_name}</span>
                                                <div className="w-[80px] h-[30px] bg-amber-50 flex justify-center items-center rounded-2xl overflow-hidden border-2 border-b-emerald-600">
                                                    <button className="w-[40%] h-full flex justify-center items-center bg-white font-bold " onClick={() => dispatch(handledecreasequantity( items))} >-</button>
                                                    <div className="w-[30%] h-full flex justify-center items-center bg-gray-300" >{items.quantity}</div>
                                                    <button className="w-[40%] h-full flex justify-center items-center bg-white font-bold" onClick={() => dispatch(handleincreasequantity(items))} >+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[30%] h-[140px]  text-green-500 flex flex-col justify-between items-end text-[25px]" style={{ padding: '20px' }}>
                                            <span> ${items.food_price}</span>
                                            <span className="text-red-500 cursor-pointer" onClick={()=>dispatch(handleremoveitem(items))}><MdAutoDelete /></span>
</div>
                                        </div>
                                    </div>


                            ))}

                                    <hr />
                                    <div className="text-green-500 font-bold text-2xl text-end m-2.5 ">Total:${cartitems.reduce((acumulator, currentitem) => acumulator +currentitem.quantity*currentitem.food_price, 0)}</div>
                              
                              </div>
                            )}



                            </div>


        </>
            )
}