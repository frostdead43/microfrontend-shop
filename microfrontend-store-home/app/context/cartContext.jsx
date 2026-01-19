"use client"
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (x) => {
    setCart((prev) => [...prev,x]);
    setIsOpen(true);
  }

  return(
    <CartContext.Provider value={{cart,setCart,addToCart, isOpen, setIsOpen}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);




