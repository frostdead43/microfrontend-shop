export default function Header() {
  return(
    <div>
      <header className="bg-orange-500 text-white w-full">
    <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 font-bold text-xl">O</span>
            </div>
            <div>
<a href="/products"><h1 className="text-xl font-bold">MicroFrontend</h1></a>
            </div>
        </div>

        <div className="flex space-x-6">
            <a href="#" className="font-medium hover:text-orange-200 transition-colors duration-200">
                <i className="fas fa-home mr-1"></i> Home
            </a>
            <a href="/products" className="font-medium hover:text-orange-200 transition-colors duration-200">
                <i className="fas fa-info-circle mr-1"></i> Products
            </a>
            <a href="/cart" className="font-medium hover:text-orange-200 transition-colors duration-200">
                <i className="fas fa-briefcase mr-1"></i> Cart
            </a>
            <a href="#" className="font-medium hover:text-orange-200 transition-colors duration-200">
                <i className="fas fa-envelope mr-1"></i> Contact
            </a>
        </div>

        <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700 transition-colors duration-200">
                <i className="fas fa-user mr-1"></i> Sign In
            </button>
            <button className="px-4 py-2 bg-white text-orange-500 rounded hover:bg-orange-100 transition-colors duration-200">
                <i className="fas fa-rocket mr-1"></i> Get Started
            </button>
        </div>
    </nav>

    <div className="bg-orange-600 py-2 px-8 text-center text-sm text-orange-100">
        <i className="fas fa-bullhorn mr-2"></i> New Year sales have begun! • 
        <a href="#" className="underline ml-1 hover:text-white">Special offer available</a>
    </div>
</header>
    </div>
  )
}