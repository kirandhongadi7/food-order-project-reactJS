import { TiThSmall } from "react-icons/ti";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { BiDish } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";
import { TbBurger } from "react-icons/tb";





 const Category = [
    {
        id:1,
        name: "All",
        image: <TiThSmall />

    },
    {
        id:2,
        name: "Breakfast",
        image: <MdOutlineBreakfastDining />

    },
    {
        id:3,
        name: "soup",
        image: <TbSoup />

    },
    {
        id:4,
        name: "Pasta",
        image: <CiBowlNoodles  />

    },
    {
        id:5,
        name: "Main Course",
        image: <BiDish />

    },
    {
        id:6,
        name: "Pizza",
        image: <GiFullPizza />

    },
    {
        id:7,
        name: "Burger",
        image: <TbBurger />

    },
]


export default Category;