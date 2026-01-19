"use client"
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(cart);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
    console.log(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  

function addToCart(x) {
  setCart(prev => {
    const currentItem = prev.find(i => i.id === x.id);

    if (currentItem) {
      return prev.map(i =>
        i.id === x.id? { ...i, quantity: i.quantity + 1 }: i);
    }

    console.log(currentItem);
    return [...prev, { ...x, quantity: 1 }];
  });
   setIsOpen(true);
}

function increaseQuantity(id) {
  setCart(prev => (
    prev.map(i => i.id === id ? {...i, quantity:i.quantity + 1}:i)
  ))
}

function decreaseQuantity(id) {
  setCart(prev => (
    prev.map(i => i.id === id ? {...i, quantity:i.quantity - 1}:i)
  ))
}

function total() {
cart.reduce((sum, item) => sum + Number(item.price) * item.quantity,0)
} 



  return(
    <CartContext.Provider value={{cart,setCart,addToCart, isOpen, setIsOpen, increaseQuantity, decreaseQuantity, total}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);




