import React, { useContext, useEffect, useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  //  Using context
  let { input, setInput, setCategory, toggle, setToggle, cartItems } =
    useContext(dataContext);
  // search box
  useEffect(() => {
    let search = input.trim().toLowerCase();
    if (search === "") {
      setCategory(food_items);
    } else {
      let newList = food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.trim().toLowerCase()),
      );
      setCategory(newList);
    }
  }, [input]);

  let items = useSelector((state) => state.cart);

  return (
    <div className="w-full h-20 px-6 bg-gray-100 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="w-16 h-16 bg-white flex justify-center items-center text-4xl rounded-xl shadow">
        <IoFastFoodOutline className="text-orange-400" />
      </div>

      {/* Search Bar */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md w-55 md:w-80">
          <GoSearch className="text-2xl mr-2 text-orange-400" />
          <input
            type="text"
            placeholder="Search Items..."
            className="outline-none w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>

      {/* Cart */}
      <div
        className="w-16 h-16  bg-white flex justify-center items-center text-4xl  rounded-xl shadow relative cursor-pointer "
        onClick={() => setToggle((prev) => !prev)}
      >
        <IoCartOutline className="text-orange-400" />
        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
          {items.length}
        </span>
      </div>
    </div>
  );
};

export default Nav;
