import React, { createContext, useState } from 'react'
import { food_items } from '../food';


export const dataContext = createContext()

const UserContext = ({children}) => {
    let [input,setInput] = useState("");
    let[category,setCategory] = useState(food_items)
    let [toggle,setToggle] = useState(false)

    let [cartItems, setCartItems] = useState([])
    let data={
  input,
  setInput,
  category,
  setCategory,
  toggle,
  setToggle,
  cartItems,setCartItems
    }
  return (
    <div>
        <dataContext.Provider value = {data}>
            {children}
        </dataContext.Provider>
        
    </div>
  )
}

export default UserContext;