import React, { useContext } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { dataContext } from '../context/UserContext';

const Cart = ( {item}) => {

    let {cartItems,setCartItems} = useContext(dataContext)

    const deleteItem =(id) =>{
        const deleteIt = cartItems.filter((item) => item.id !== id)
        setCartItems(deleteIt)
    }
  return (
    <div className="mb-4">

      {/* Cart Item */}
      <div className="flex justify-between items-center bg-white shadow-md rounded-xl p-4">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          {/* Image */}
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={item.food_image} alt={item.food_name} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Name + Quantity */}
          <div>
            <h3 className="font-semibold text-lg">{item.food_name} </h3>

            {/* Quantity Control */}
            <div className="mt-2 w-24 flex justify-between items-center border border-orange-400 rounded-lg px-2 py-1 text-orange-500 font-medium">
              <span className="cursor-pointer">-</span>
              <span>1</span>
              <span className="cursor-pointer">+</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <div className="font-semibold text-gray-700 mb-2">₹{item.price}</div>
          <MdOutlineDeleteOutline className="text-red-600 text-2xl cursor-pointer" onClick={()=>  deleteItem(item.id)} />
        </div>

      </div>

      {/* Price Summary */}
      <div className="bg-white shadow-md rounded-xl p-4">

        <div className="flex justify-between mb-2 text-gray-600">
          <span>Price</span>
          <span>₹{item.price}</span>
        </div>

        <div className="flex justify-between mb-2 text-gray-600">
          <span>Delivery Charge</span>
          <span>₹10</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{item.price + 21}</span>
        </div>

      </div>

    </div>
  )
}

export default Cart;