export default function CardItem({ product }) {
  return (
    <div>
      <img src={product.image}/>
      <h3>{product.title}</h3>
      <h6>{product.price}</h6>
      <button>Details</button>
    </div>
  );
}