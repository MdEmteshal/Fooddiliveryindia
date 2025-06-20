import { Nav } from "./nav"
import { Categories } from "./catogories"
import { Card } from "./card"
import { food_items } from "./food"
import { useContext } from "react"
import { dataContext } from "./userContextapi"
import { Cartsection } from "./cartsection"
import { useSelector } from "react-redux"

export const DashboardFood = () => {
   
    let { category_items, setcategory_items } = useContext(dataContext)

    function filterFood(category) {
        if (category === 'All') {
            setcategory_items(food_items)
        } else {
            let filteritem = food_items.filter((item) => (item.food_category === category))
            setcategory_items(filteritem)
        }

    }
    // let items=useSelector(state=>state.cart)
    // console.log(items)
    return (
        <>

            <div className="bg-gray-400 w-full h-full">
                {/* Nab bar */}
                <Nav />
                {/* nab sub section */}
                <div className="flex flex-wrap md:w-full justify-center ">
                    {
                        Categories.map((items) => (
                            <ul key={items.id} className="w-[150px] h-[160px] rounded-[10px]  hover:bg-green-200 bg-white shadow-2xl m-[10px]"  onClick={() => filterFood(items.name)} >
                                <li className=" flex text-[100px] justify-center text-green-400 m-[10px] " >{items.icon}</li>
                                <li className=" flex text-[20px] justify-center  ">{items.name}</li>
                            </ul>
                        ))
                    }
                </div>
                {/* section */}
                <div className="flex gap-8 flex-wrap justify-center p-[20px]">
                    {
                        category_items.map((items) => (
                            <div key={items.id} >
                                <Card name={items.food_name} image={items.food_image} type={items.food_type} id={items.id} price={items.price} />

                            </div>

                        ))
                    }
                </div>
               {/* cart section */}
               <Cartsection/>
            </div>


        </>
    )
}