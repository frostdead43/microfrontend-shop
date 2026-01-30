"use client"
import { createContext, useContext, useState, useEffect } from "react";
import cartService from "@/lib/cartApi";

const CartContext = createContext();

export function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(cart);

  useEffect(() => {
    loadCartFromBackend();
  }, []);

  async function loadCartFromBackend() {
    const res = await cartService.getCart();
    setCart(res.data || []);
  }

  async function addToCart(x) {
    setCart(prev => {
      const currentItem = prev.find(i => i.id === x.id);

      if (currentItem) {
        return prev.map(i =>
          i.id === x.id ? { ...i, quantity: i.quantity + 1 } : i);
      }

      return [...prev, { ...x, quantity: 1 }];
    });
    
    const res = await cartService.addToCart(x);
    if (res.data) {
      setCart(prev => prev.map(p => p.id === x.id ? {...p, ...res.data} : p));
    }
    setIsOpen(true);
  }

  async function increaseQuantity(id) {
    setCart(prev => (
      prev.map(i => i.id === id ? {...i, quantity: i.quantity + 1} : i)
    ));
    await cartService.increaseQuantity(id);
  }

  async function decreaseQuantity(id) {
    setCart(prev => (
      prev.map(i => i.id === id ? {...i, quantity: i.quantity - 1} : i)
    ));
    await cartService.decreaseQuantity(id);
  }

  async function remove(id) {
    setCart(prev => prev.filter(i => i.id !== id));
    await cartService.removeFromCart(id);
  } 

  function total() {
    return cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  } 

  return (
    <CartContext.Provider value={{cart,setCart,addToCart,isOpen,setIsOpen,increaseQuantity,decreaseQuantity,total,remove,refetchCart: loadCartFromBackend}}>
      {children}
    </CartContext.Provider>
  );
}  

export const useCart = () => useContext(CartContext);