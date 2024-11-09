import { Link } from "react-router-dom"

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-white text-xl font-bold mb-4">AfifaCare</h2>
              <p className="text-gray-400">
                Providing comprehensive healthcare solutions with a personal touch.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/afifacare" className="hover:text-white">Home</Link></li>
                <li><Link to="/afifacare/about" className="hover:text-white">About</Link></li>
                <li><Link to="/afifacare/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/afifacare/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Healthcare Ave</li>
                <li>contact@afifacare.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} AfifaCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer