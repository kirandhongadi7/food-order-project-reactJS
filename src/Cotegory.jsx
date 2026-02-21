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
        fname:"All",
        image: <TiThSmall />

    },
    {
        id:2,
        name: "Breakfast",
        fname:"breakfast",
        image: <MdOutlineBreakfastDining />

    },
    {
        id:3,
        name: "Soups",
        fname:"soups",
        image: <TbSoup />

    },
    {
        id:4,
        name: "Pasta",
        fname:"pasta",
        image: <CiBowlNoodles  />

    },
    {
        id:5,
        name: "Main Course",
        fname:"main_course",
        image: <BiDish />

    },
    {
        id:6,
        name: "Pizza",
        fname:"pizza",
        image: <GiFullPizza />

    },
    {
        id:7,
        name: "Burger",
        fname:"burger",
        image: <TbBurger />

    },
]


export default Category;