import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";


const Footer = () => {
  return (
    <div>
     <footer className="bg-[#131A22] text-gray-300 py-16 px-5 md:px-20 mt-20">
  <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
    
    {/* Column 1: Brand Info */}
    <div className="space-y-6">
       <span className="text-orange-500 text-3xl">Shop</span><span className="text-white">Hub</span>
      <p className="text-sm leading-relaxed">
        Your one-stop premium shop for all your lifestyle needs. High quality products delivered to your doorstep.
      </p>
      <div className="flex gap-4 text-2xl">
        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        <FaTwitter className="hover:text-sky-400 cursor-pointer" />
      </div>
    </div>

    {/* Column 2: Quick Links */}
    <div>
      <h4 className="text-white font-bold mb-6 text-lg">Shop</h4>
      <ul className="space-y-4 text-sm">
        <li className="hover:text-white cursor-pointer">All Products</li>
        <li className="hover:text-white cursor-pointer">Featured</li>
        <li className="hover:text-white cursor-pointer">New Arrivals</li>
        <li className="hover:text-white cursor-pointer">Discounts</li>
      </ul>
    </div>

    {/* Column 3: Help & Support */}
    <div>
      <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
      <ul className="space-y-4 text-sm">
        <li className="hover:text-white cursor-pointer">Order Tracking</li>
        <li className="hover:text-white cursor-pointer">Shipping Policy</li>
        <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
        <li className="hover:text-white cursor-pointer">Contact Us</li>
      </ul>
    </div>

    {/* Column 4: Newsletter */}
    <div className="space-y-6">
      <h4 className="text-white font-bold text-lg">Subscribe</h4>
      <p className="text-sm">Get the latest updates on new products and upcoming sales.</p>
      <div className="flex flex-col space-y-2">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-slate-800 border border-slate-700 p-3 rounded-md focus:outline-none focus:border-orange-500"
        />
        <button className=" hover:cursor-pointer bg-orange-400 text-gray-700 py-3 rounded-md font-bold hover:bg-orange-500 transition-all">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm">
    <p>© 2026 Shop Hub. All rights reserved. Built with Taiwind and Shadcn  in React.</p>
  </div>
</footer>
    </div>
  )
}

export default Footer