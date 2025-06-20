import { MdDensitySmall } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { LuSoup } from "react-icons/lu";
import { GiFoodTruck } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { FaBurger } from "react-icons/fa6";

export const Categories=[
    {
        id:1,
        name:'All',
        icon:<MdDensitySmall />
    },
      {
        id:2,
        name:'breakfast',
        icon:<MdFreeBreakfast />
    },  {
        id:3,
        name:'soups',
        icon:<LuSoup />
    },  {
        id:4,
        name:'pasta',
        icon:<GiNoodles />
    },  {
        id:5,
        name:'main_course',
        icon:<GiFoodTruck />
    },  {
        id:6,
        name:'pizza',
        icon:<GiFullPizza />
    },  {
        id:7,
        name:'burger',
        icon:<FaBurger />
    }
]