"use client"
import AddressForm from "@/components/UI/AddressForm";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItem,setCardItem] = useState([]);

  useEffect(() => {
    const storedCart  = localStorage.getItem("cart");
    if (storedCart ) {
      setCardItem(JSON.parse(storedCart))
    }
  },[]);
  
   if (cartItem.length === 0) {
    return <p>Your basket is empty! How about we go shopping?</p>;
  }

  return (
      <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Cart</h1>
      {cartItem.map(item => (
        <div key={item.id} className="flex items-center gap-4 border-b py-4">
          <img src={item.image} className="w-16 h-16 object-contain" />
          <div>
            <h2>{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>{item.price} $</p>
            <h6>{item.price * item.quantity}$</h6>
          </div>
        </div>
      ))}
      <AddressForm />
    </div>
  );
}
