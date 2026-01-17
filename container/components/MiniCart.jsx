"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/lib/cartStorage";
import { useRouter } from "next/navigation";

export default function MiniCart() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  const refreshCart = () => {
    setCart(getCart());
  };

  useEffect(() => {
    refreshCart();
    window.addEventListener("cart-updated", refreshCart);

    return () => {
      window.removeEventListener("cart-updated", refreshCart);
    };
  }, []);

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside className="w-80 p-4 border-l">
      <h3 className="font-bold mb-4">Sepet</h3>

      {cart.length === 0 && (
        <p className="text-sm text-gray-500">Sepet boş</p>
      )}

      {cart.map(item => (
        <div key={item.id} className="flex gap-3 mb-3">
          <img
            src={item.image}
            alt={item.title}
            className="w-10 h-10 object-contain"
          />
          <div className="flex-1">
            <p className="text-sm">{item.title}</p>
            <p className="text-xs text-gray-600">
              {item.quantity} × {item.price} ₺
            </p>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-4 border-t pt-4">
          <p className="text-sm">
            Toplam Ürün: <strong>{totalQuantity}</strong>
          </p>
          <p className="text-sm mb-3">
            Toplam Tutar:{" "}
            <strong>{totalPrice.toFixed(2)} ₺</strong>
          </p>

          <button
            onClick={() => router.push("/cart")}
            className="w-full bg-black text-white py-2"
          >
            Ödemeye Git
          </button>
        </div>
      )}
    </aside>
  );
}
