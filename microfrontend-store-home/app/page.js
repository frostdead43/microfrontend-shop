import CardItem from "@/components/ProductCard";
import { fetchProducts } from "@/lib/fetchers";
export default async function Home() {
  const products = await fetchProducts();
  return (
  <div>
    {products.map(x => (
     <CardItem key={x.id} product={x}/>
    ))}
  </div>
  );
}
