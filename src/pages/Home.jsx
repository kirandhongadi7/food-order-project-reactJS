import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Category from "../Cotegory";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const Home = () => {
  let { category, setCategory, input, toggle, setToggle } =
    useContext(dataContext);

  const filter = (category) => {
    if (category === "All") {
      setCategory(food_items);
    } else {
      let newCat = food_items.filter((item) => item.food_category === category);
      setCategory(newCat);
    }
  };

  let items = useSelector((state) => state.cart);

  // calculate subtotal by summing each item price times quantity
  let subTotal = items.reduce(
    (total, item) => total + item.price * (item.qty || 1),
    0,
  );

  return (
    <div className="bg-orange-200 w-full">
      <div className="sm:hidden bg-gray-600 text-white text-center p-3 text-sm font-medium">
        For better experience, please open this page in Desktop Mode.
      </div>

      <Nav />

      {/* Categories */}
      {input ? null : (
        <div className="flex flex-wrap gap-6 p-6  justify-center cursor-pointer">
          {Category.map((item) => (
            <div
              onClick={() => filter(item.fname)}
              key={item.id}
              className="w-30 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 pb-1.5 flex justify-center items-center"
            >
              <div>
                <div className="h-25  object-cover rounded-lg flex justify-center items-center text-5xl text-orange-500">
                  {item.image}
                </div>
                <h2 className="flex justify-center font-semibold text-xs md:text-lg truncate cursor-pointer">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* cards map */}
      <div className="flex flex-wrap gap-7 justify-center m-10 pb-10">
        {category.length === 0 ? (
          <div className="text-center text-gray-600 text-lg font-medium">
            No such item found 🍽️
          </div>
        ) : (
          category.map((card) => (
            <div key={card.id}>
              <Card card={card} />
            </div>
          ))
        )}
      </div>
      {toggle && (
        <div className="w-[63vh] h-full fixed top-0 right-0  shadow-xl p-7  backdrop-blur-lg overflow-y-auto ">
          <header className="w-full flex justify-between items-center mb-6">
            <div className="py-3 px-5 rounded-2xl bg-orange-500 text-white">
              <span className=" text-lg font-medium cursor-default ">
                Order Item ({items.length})
              </span>
            </div>
            <span
              className="cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            >
              <ImCross className="text-orange-600 hover:text-orange-700 transition text-xl  " />
            </span>
          </header>
          {items.length === 0 ? (
            <div className="text-center text-gray-600 mt-10">
              <p className="text-lg">No items in cart</p>
            </div>
          ) : (
            <>
              {/* list each cart item */}
              {items.map((item) => (
                <Cart
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  image={item.image}
                  qty={item.qty}
                />
              ))}

              {/* summary box after all items */}
              <div className="bg-white shadow-md rounded-xl p-4 mt-6">
                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Price</span>
                  <span>₹{subTotal}</span>
                </div>

                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Delivery Charge</span>
                  <span>₹21</span>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{subTotal + 21}</span>
                </div>

                <div className="flex justify-center">
                  <button
                    className="w-3/4 mt-4 py-3 rounded-xl bg-orange-400 text-white font-semibold text-lg 
                            hover:bg-orange-500
                            active:scale-95 transition-all duration-200 shadow-lg"
                    onClick={() => toast.success("Order placed...")}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
