"use client";

import { useCart } from "@/app/context/cartContext";
import { fetchProductsById } from "@/lib/fetchersById";
import CartSidebar from "./CartSidebar";

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart();

  return (
   
    <div>
       <CartSidebar />
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h6>$ {product.price}</h6>

      <button onClick={() => addToCart(product)} className="bg-black text-white px-4 py-2">Add to Cart</button>
    </div>
  );
}