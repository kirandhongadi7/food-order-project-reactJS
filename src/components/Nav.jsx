import React, { useState } from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

const Nav = () => {
  const [search,setSearch] = useState('')
  return (
    <div className="w-full h-20 px-6 bg-gray-100 flex items-center justify-between shadow-md">

      {/* Logo */}
      <div className="w-16 h-16 bg-white flex justify-center items-center text-4xl rounded-xl shadow">
        <IoFastFoodOutline className='text-orange-400' />
      </div>

      {/* Search Bar */}
      <form>
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md w-80 md:w-80">
          <GoSearch className="text-2xl mr-2 text-orange-400" />
          <input
            type="text"
            placeholder="Search Items..."
            className="outline-none w-full"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>
      </form>

      {/* Cart */}
      <div className="w-16 h-16  bg-white flex justify-center items-center text-4xl  rounded-xl shadow relative ">
        <IoCartOutline  className='text-orange-400'/>
        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
          0
        </span>
      </div>

    </div>
  )
}

export default Nav;
