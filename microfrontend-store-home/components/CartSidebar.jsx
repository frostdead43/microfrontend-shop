"use client";
import { useCart } from "@/app/context/cartContext";
import Link from "next/link";

export default function CartSidebar() {
  const { cart, isOpen, setIsOpen, increaseQuantity, decreaseQuantity,total, remove } = useCart();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsOpen(false)}/>
      )}

      <aside className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-semibold text-lg">Cart</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          {cart.length === 0 && (
            <p className="text-sm text-gray-500">Cart is Empty</p>
          )}

          {cart.map((item, i) => (
            <div key={i} className="flex gap-3 mb-4">
              <img src={item.image} className="w-12 h-12 object-contain" alt=""/>
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">${item.price}</p>
                <p className="text-xs text-blue-500">{item.quantity}</p>
                <p className="text-xs text-gray-500">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => remove(item.id)}>Delete</button>
                <div className="flex items-center gap-2 mt-1">
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <Link href="/cart" className="block text-center bg-black text-white py-2 rounded"> Pay Now! </Link>
        </div>
      </aside>
    </>
  );
}
