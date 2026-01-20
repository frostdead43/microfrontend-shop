import CardItem from "@/components/ProductCard";
import Searchbar from "@/components/Searchbar";
import { fetchProducts } from "@/lib/fetchers";
import Link from "next/link";

export default async function Home() {
  const products = await fetchProducts();
  return (
    <div>
      <Searchbar/>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb mx-16 my-20">
    {products.map(x => (
      <Link key={x.id} href={`/products/${x.id}`}>
        <CardItem  product={x}/>
      </Link>
    ))}
  </div>
  </div>
  );
}
