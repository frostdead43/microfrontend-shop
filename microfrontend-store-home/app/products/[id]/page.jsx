import { fetchProductsById } from "@/lib/fetchersById";
import { use } from "react";

export default function ProductDetail({params}) {
  const {id} = use(params);
  const productDetail = use(fetchProductsById(id));
  return(
    <div>
      <img src={productDetail.image} alt="" />
      <h2>{productDetail.title}</h2>
    </div>
  )
}