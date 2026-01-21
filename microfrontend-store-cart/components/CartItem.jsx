export default function Card({item}) {
  return (
      <div key={item.id} className="flex items-center gap-4 border-b border-gray-200 py-4">
        <div className="w-20 h-20 bg-orange-50 rounded-lg flex items-center justify-center p-2">
          <img src={item.image} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1">
          <h2 className="font-medium text-gray-800 mb-2">{item.title}</h2>
          <div className="flex items-start gap-6">
            <div className="text-sm text-gray-600">Quantity: <span className="font-medium">{item.quantity}</span></div>
            <div className="text-orange-600 font-medium">{item.price} $</div>
            <div className="ml-auto text-lg font-bold text-orange-700">{item.price * item.quantity}$</div>
          </div>
        </div>
      </div>
  )
}