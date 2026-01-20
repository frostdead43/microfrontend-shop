export default function CardItem({ product }) {
  return (
    <div className="w-120 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img src={product.image} className="w-full h-full object-contain object-center"/>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 h-14 overflow-hidden">{product.title}</h3>
          <p className="text-sm font-medium text-blue-900 mt-2">{product.category} $</p> 
        <p className="text-sm font-medium text-blue-900 mt-2">{product.price} $</p> 

        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-200">Details</button>
      </div>
    </div>
  );
}