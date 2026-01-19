"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartSidebar() {
  const { cart, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-80 bg-white z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-semibold text-lg">Sepet</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          {cart.length === 0 && (
            <p className="text-sm text-gray-500">Sepet boş</p>
          )}

          {cart.map((item, i) => (
            <div key={i} className="flex gap-3 mb-4">
              <img
                src={item.image}
                className="w-12 h-12 object-contain"
                alt=""
              />
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <Link
            href="/cart"
            className="block text-center bg-black text-white py-2 rounded"
          >
            Ödemeye Geç
          </Link>
        </div>
      </aside>
    </>
  );
}
