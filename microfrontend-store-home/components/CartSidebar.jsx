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
             <div className="w-full">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-semibold text-gray-800 line-clamp-1">{item.title}</p>
                  <p className="text-xs text-orange-600 font-medium mt-0.5">${item.price}</p>
                </div>
                <button onClick={() => remove(item.id)} className="text-xs bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white border border-orange-200 rounded-full px-2 py-1">
                    <button 
                      className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 flex items-center justify-center transition-colors active:scale-95" onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>-
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
                    <button 
                      className="w-7 h-7 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center transition-colors active:scale-95" onClick={() => increaseQuantity(item.id)}>+
                    </button>
                  </div>
                  
                  <div className="text-xs">
                    <span className="text-gray-500">Total: </span>
                    <span className="font-bold text-orange-700">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    ${item.price} × {item.quantity}
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <Link href="/cart" className="block text-center bg-orange-500 text-white py-2 rounded"> Pay Now! </Link>
        </div>
      </aside>
    </>
  );
}
