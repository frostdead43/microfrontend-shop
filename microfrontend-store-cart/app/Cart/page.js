"use client"
import Card from "@/components/CartItem";
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
    <div className="p-6 grid grid-cols-2 gap-50">
      <div>
        <h1 className="text-xl font-bold mb-4">Cart</h1>
        {cartItem.map(item => (
          <Card key={item.id} item = {item}/>
        ))}
        <button className="mt-37  w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition duration-200">Pay Now!</button>
      </div>
        <AddressForm />
    </div>
  );
}
