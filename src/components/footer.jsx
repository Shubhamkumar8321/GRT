import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#022C43] text-white py-8 md:py-12 font-webspecia">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-12">

        {/* Left Block */}
        <div className="space-y-4 sm:space-y-6">
          <p className="font-medium text-sm sm:text-base leading-relaxed">
            GRT Malaysia is dedicated to eradicating poverty, promoting education for underprivileged children, and providing comprehensive community support
          </p>

          <div className="space-y-2 sm:space-y-3">
            <h3 className="font-bold text-base sm:text-lg">Address</h3>
            <address className="not-italic space-y-1 text-sm sm:text-base">
              <p>23-2 Jalan Wangsa Delima 10,</p>
              <p>Wangsa Maju 53300,</p>
              <p>Kuala Lumpur</p>
              <p>Phone: +60 11-2767 8531</p>
            </address>
          </div>
        </div>

        {/* Center Block */}
        <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-0">
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base">Contact Us</a></li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-6">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">FOLLOW US</h3>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="bg-[#3b5998] p-2 sm:p-2.5 rounded-full hover:opacity-90 transition-opacity">
                <Facebook color="#fff" size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-[#bc2a8d] p-2 sm:p-2.5 rounded-full hover:opacity-90 transition-opacity">
                <Instagram color="#fff" size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="bg-[#ff0000] p-2 sm:p-2.5 rounded-full hover:opacity-90 transition-opacity">
                <Youtube color="#fff" size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Block */}
        <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-0">
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">BANK ACCOUNT DETAILS</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="font-medium">Name:</span>
                <span>Global Relief Team Berhad</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Bank:</span>
                <span>Maybank Islamic</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Account No:</span>
                <span>562188357404</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Swift Code:</span>
                <span>MBBEMYK</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-700">
        <p className="text-center text-gray-400 text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} GRT Malaysia. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;