import React from "react";
import Nav from "../components/Nav";
import Category from "../Cotegory";
import Card from "../components/Card";
import { food_items } from "../food";


const Home = () => {
  return (
    <div className="bg-orange-200 w-full min-h-screen">
      <div className="sm:hidden bg-gray-600 text-white text-center p-3 text-sm font-medium">
  For better experience, please open this page in Desktop Mode.
</div>

      <Nav />
        {/* Categories */}
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {Category.map((item) => (
          <div
            key={item.id}
            className="w-30 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 pb-1.5 flex justify-center items-center"
          >
            <div>
              <div className="h-25 object-cover rounded-lg flex justify-center items-center text-5xl text-orange-500">
                {item.image}
              </div>
              <h2 className="flex justify-center font-semibold text-lg">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
        

        {/* cards map */}
        <div className="flex flex-wrap gap-7 justify-center m-10">
         {food_items.map((card) => <div key={card.id} ><Card card={card} /> </div> )}
        </div>

      

     
    </div>
  );
};

export default Home;
