import React, { useContext, useState } from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";

const Card = ({ card }) => {
  const { food_name, food_category, food_type, food_image, price ,id} = card;

  let {cartItems,setCartItems} = useContext(dataContext)

  
  
  const addToCart = (id) =>{

    let item = food_items.find((food) => food.id === id)
    
    if(item) {
      setCartItems([...cartItems, item])
    }

  }


  return (
    <div className="w-35 md:w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col cursor-pointer">
      {/* Image */}
      <div className="w-full h-30 md:h-40 overflow-hidden">
        <img
          src={food_image}
          alt="Food Item"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        {/* Name */}
        <h3 className="text-lg  font-semibold text-gray-800 truncate" title={food_name}>{food_name}</h3>

        <h3 className="text-md font-normal text-gray-600">{food_category}</h3>

        {/* Price */}
        <div className="flex justify-between">
          <p className="text-orange-500 font-bold text-md mt-1">
            {"₹" + price}
          </p>

          {/* Veg Tag */}
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium mt-2">
            <span
              className={
                food_type === "veg" ? "text-green-500" : "text-orange-400"
              }
            >
              {food_type}
            </span>
            <span>
              {food_type === "veg" ? (
                <LuLeafyGreen />
              ) : (
                <GiChickenOven className="text-orange-400" />
              )}
            </span>
          </div>
        </div>

        {/* Spacer to push button down */}
        <div className="grow"></div>

        {/* Add to Dish Button */}
        <button className="mt-2 w-full md:mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl transition duration-300 font-medium cursor-pointer"
         onClick={()=>addToCart(id)}
        >
          Add to Dish
        </button>
      </div>
    </div>
  );
};

export default Card;
