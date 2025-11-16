import React from "react";
import { useState, createContext } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItem)=>[...prevItem , item])
    console.log(cartItems)
  }

  const removeFromCart = (foodname) => {
    setCartItems(cartItems.filter((food)=> food.product.name != foodname))
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart , removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}