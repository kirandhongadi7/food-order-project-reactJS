import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";


const Card = ({card}) => {
    const {food_name,food_category,food_type,food_image,price} = card
  return (
   <div className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">


      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={food_image}
          alt="Food Item"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-800">
          {food_name}
        </h3>

        <h3 className='text-md font-normal text-gray-600'>
            {food_category}
        </h3>

        {/* Price */}
        <div className='flex justify-between'>
        <p className="text-orange-500 font-bold text-md mt-1">
          {"₹"+price}
        </p>

        {/* Veg Tag */}
        <div className="flex items-center gap-2 text-green-600 text-sm font-medium mt-2">
           <span className={food_type ==="veg" ? "text-green-500": "text-orange-400"}>{food_type}</span>
          <span>{food_type === "veg"? <LuLeafyGreen />: <GiChickenOven className='text-orange-400'/> }</span>
        </div>
        </div>

        {/* Spacer to push button down */}
        <div className="grow"></div>

        {/* Add to Dish Button */}
        <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl transition duration-300 font-medium">
          Add to Dish
        </button>

      </div>

    </div>
  )
}

export default Card;
