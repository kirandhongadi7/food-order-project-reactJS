import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Category from "../Cotegory";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";
import Cart from "../components/Cart";

const Home = () => {

  let {category,setCategory,input,toggle,setToggle,cartItems} = useContext(dataContext);
  
  

  const filter = (category) =>{
    if (category === "All"){
      setCategory(food_items)
    } 
    else{
      let newCat = food_items.filter((item) => (item.food_category === category))
      setCategory(newCat)
    }
  }

  return (
    <div className="bg-orange-200 w-full min-h-screen">
      <div className="sm:hidden bg-gray-600 text-white text-center p-3 text-sm font-medium">
        For better experience, please open this page in Desktop Mode.
      </div>

      <Nav />

      {/* Categories */}
      {input?null:
      <div className="flex flex-wrap gap-6 p-6  justify-center">
        {Category.map((item) => (
          <div
            onClick={()=>filter(item.fname)}
            key={item.id}
            className="w-30 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 pb-1.5 flex justify-center items-center"
          >
            <div>
              <div className="h-25  object-cover rounded-lg flex justify-center items-center text-5xl text-orange-500">
                {item.image}
              </div>
              <h2 className="flex justify-center font-semibold text-xs md:text-lg truncate">
                {item.name}
              </h2>
            </div>

            
          </div>
        ))}
      </div>
      }
      

      {/* cards map */}
      <div className="flex flex-wrap gap-7 justify-center m-10 pb-10">
        {
          category.length === 0?(
          <div className="text-center text-gray-600 text-lg font-medium">
      No such item found 🍽️
    </div>
          ):
        category.map((card) => (
          <div key={card.id}>
            <Card card={card} />
          </div>
        ))}
      </div>
      {toggle &&
      <div className="w-[63vh] h-full fixed top-0 right-0  shadow-xl p-7  backdrop-blur-lg overflow-y-auto ">
        <header className="w-full flex justify-between items-center mb-6">
          <div className="py-3 px-5 rounded-2xl bg-orange-500 text-white">

          
          <span className=" text-lg font-medium cursor-default ">
            Order Item ({cartItems.length})
          </span>
          </div>
          <span className="cursor-pointer" onClick={() => setToggle(prev => !prev)}>
            <ImCross className="text-orange-600 hover:text-orange-700 transition text-xl  "/>
          </span> 
        </header>
         {
            cartItems.length === 0 ? (
              <div className="text-center text-gray-600 mt-10">
                <p className="text-lg">No items in cart</p>
              </div>
            ) : (
              cartItems.map((item) => <div key={item.id}>
                <Cart item = {item} />
              </div>)
            )
         }
        
      </div>
      }
    </div>
  );
};

export default Home;
