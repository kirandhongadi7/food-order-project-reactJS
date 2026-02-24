import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { RemoveItem, UpdateQty } from "../redux/cartSlice";
import { toast } from "react-toastify";

const Cart = ({ name, id, image, price, qty }) => {
  let dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(RemoveItem(id));
  };

  const increment = () => {
    dispatch(UpdateQty({ id, qty: qty + 1 }));
  };

  const decrement = () => {
    if (qty <= 1) {
      dispatch(RemoveItem(id));
    } else {
      dispatch(UpdateQty({ id, qty: qty - 1 }));
    }
  };

  return (
    <div className="mb-4">
      {/* Cart Item */}
      <div className="flex justify-between items-center bg-white shadow-md rounded-xl p-3 sm:p-4">
        {/* Left Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Image */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
          bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name + Quantity */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg">
              {name}
            </h3>

            {/* Quantity Control */}
            <div
              className="mt-2 w-20 sm:w-24 flex justify-between items-center 
            border border-orange-400 rounded-lg px-2 py-1 
            text-orange-500 font-medium text-sm sm:text-base"
            >
              <span onClick={decrement} className="cursor-pointer select-none">
                -
              </span>
              <span>{qty}</span>
              <span onClick={increment} className="cursor-pointer select-none">
                +
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <div className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
            ₹{price}
          </div>

          <MdOutlineDeleteOutline
            className="text-red-600 text-xl sm:text-2xl cursor-pointer hover:text-red-700 transition"
            onClick={() => deleteItem(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
