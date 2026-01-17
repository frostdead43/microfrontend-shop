import CardItem from "@/components/ProductCard";
import { fetchProducts } from "@/lib/fetchers";
import Link from "next/link";

export default async function Home() {
  const products = await fetchProducts();
  return (
  <div>
    {products.map(x => (
      <Link key={x.id} href={`/products/${x.id}`}>
        <CardItem  product={x}/>
      </Link>
    ))}
  </div>
  );
}
