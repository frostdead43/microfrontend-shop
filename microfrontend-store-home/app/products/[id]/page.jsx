import ProductDetailClient from "@/components/productDetails";
import { fetchProductsById } from "@/lib/fetchersById";
import { use } from "react";

export default function ProductDetail({params}) {
  const {id} = use(params);
  const productDetail = use(fetchProductsById(id));
  return(
    <div>
      <ProductDetailClient product={productDetail} />;
    </div>
  )
}