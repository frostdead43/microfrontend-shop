export default function Footer() {
  return(
    <div>
        <footer className="fixed bottom-0 left-0 w-full bg-orange-500 text-white">

        <div className="py-6 px-8 border-b border-orange-400">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-orange-500 font-bold text-xl">O</span>
                    </div>
                    <span className="text-xl font-bold">MicroFrontend</span>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-orange-200 transition-colors duration-200">Home</a>
                    <a href="#" className="hover:text-orange-200 transition-colors duration-200">About</a>
                    <a href="#" className="hover:text-orange-200 transition-colors duration-200">Services</a>
                    <a href="#" className="hover:text-orange-200 transition-colors duration-200">Contact</a>
                </div>
            </div>
        </div>
        
        <div className="py-4 px-8">
            <div className="flex justify-between items-center">
                <div className="text-orange-100">
                    © 2026 Mako. All rights reserved ©
                </div>
                <div className="flex space-x-4">
                  <p>Mehmet Akif Küçükyilmaz</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}