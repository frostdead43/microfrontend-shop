"use client";

import { useCart } from "@/app/context/cartContext";
import { fetchProductsById } from "@/lib/fetchersById";
import CartSidebar from "./CartSidebar";
import toast from "react-hot-toast";

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart();

  return (
  <div className="min-h-screen bg-gray-50 py-8">
    <CartSidebar />
  
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8"> 
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
            <img src={product.image} alt={product.title} className="max-h-96 object-contain"/>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
              <h6 className="text-2x2 text-gray-900 mb-4">{product.category}</h6>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
              <div className="flex items-start gap-7">
                <p className="text-red-700 text-3x1 mb-4">{product.rating.rate}  point of</p>
                <p>{product.rating.count} Reviews</p>
              </div>
                <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-gray-900">$ {product.price} </span>
                <span className="font-bold">%50 Sale!</span>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                </div>
                <button onClick={() => {addToCart(product); toast.success("Product Add to Cart!")}} className="flex-1  bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}