import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/GRT.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const navRef = useRef(null);

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? "" : item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenDropdown("");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-webspecia" ref={navRef}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
          <li><Link to="/" className="font-semibold hover:text-blue-600 transition-colors">Qurbani 2025</Link></li>

          <li className="relative">
            <button onClick={() => toggleDropdown("emergency")} className="flex items-center gap-1 font-semibold hover:text-blue-600 transition-colors">
              Emergency Appeals <ChevronDown size={16} className={`transition-transform ${openDropdown === "emergency" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "emergency" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-56 z-50 border">
                <Link to="/gaza-emergency" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Gaza Appeal</Link>
                <Link to="/malnutrition-in-yemen" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Malnutrition in Yemen</Link>
                <Link to="/most-urgent" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Most Urgent Fund</Link>
                <Link to="/rohingya" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Rohingya</Link>
                <Link to="/students-gaza" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Students of Gaza</Link>
                <Link to="/syria-house" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Syria Housing</Link>
              </div>
            )}
          </li>

          <li className="relative">
            <button onClick={() => toggleDropdown("sadaqah")} className="flex items-center gap-1 font-semibold hover:text-blue-600 transition-colors">
              Sadaqah Jariyah <ChevronDown size={16} className={`transition-transform ${openDropdown === "sadaqah" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "sadaqah" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-56 z-50 border">
                <Link to="/water" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Water Project</Link>
                <Link to="/masjid-appeal" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Masjid Construction</Link>
                <Link to="/sponsor-orphan" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Orphan Sponsorship</Link>
                <Link to="/olive-tree" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Olive Tree</Link>
                <Link to="/hifa-sponsorship" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Medical Camp</Link>
                <Link to="/build-home" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Build Home</Link>
              </div>
            )}
          </li>

          <li><Link to="/" className="font-semibold hover:text-blue-600 transition-colors">Spread Barakah</Link></li>

          <li className="relative">
            <button onClick={() => toggleDropdown("countries")} className="flex items-center gap-1 font-semibold hover:text-blue-600 transition-colors">
              Countries <ChevronDown size={16} className={`transition-transform ${openDropdown === "countries" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "countries" && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-56 right-0 z-50 border">
                <Link to="/palestine" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Palestine</Link>
                <Link to="/yemen" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Yemen</Link>
                <Link to="/india" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">India</Link>
                <Link to="/bangladesh" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Bangladesh</Link>
                <Link to="/pakistan" className="block px-4 py-2 font-semibold hover:bg-gray-50 hover:text-blue-600 transition-colors">Pakistan</Link>
              </div>
            )}
          </li>
        </ul>

        <button className="md:hidden text-gray-800" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="flex justify-between items-center p-5 border-b">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <button onClick={closeMobileMenu}><X size={28} /></button>
          </div>

          <div className="p-6 space-y-4 text-gray-800">
            <Link to="/" onClick={closeMobileMenu} className="block text-lg font-semibold">Qurbani 2025</Link>

            <div>
              <button onClick={() => toggleDropdown("emergency")} className="flex justify-between w-full text-lg font-semibold">
                Emergency Appeals <ChevronDown size={18} className={`${openDropdown === "emergency" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "emergency" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/gaza-emergency" onClick={closeMobileMenu} className="block font-semibold">Gaza Appeal</Link>
                  <Link to="/malnutrition-in-yemen" onClick={closeMobileMenu} className="block font-semibold">Malnutrition in Yemen</Link>
                  <Link to="/most-urgent" onClick={closeMobileMenu} className="block font-semibold">Most Urgent Fund</Link>
                  <Link to="/rohingya" onClick={closeMobileMenu} className="block font-semibold">Rohingya</Link>
                  <Link to="/students-gaza" onClick={closeMobileMenu} className="block font-semibold">Students of Gaza</Link>
                  <Link to="/syria-house" onClick={closeMobileMenu} className="block font-semibold">Syria Housing</Link>
                </div>
              )}
            </div>

            <div>
              <button onClick={() => toggleDropdown("sadaqah")} className="flex justify-between w-full text-lg font-semibold">
                Sadaqah Jariyah <ChevronDown size={18} className={`${openDropdown === "sadaqah" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "sadaqah" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/water" onClick={closeMobileMenu} className="block font-semibold">Water Project</Link>
                  <Link to="/masjid-appeal" onClick={closeMobileMenu} className="block font-semibold">Masjid Construction</Link>
                  <Link to="/sponsor-orphan" onClick={closeMobileMenu} className="block font-semibold">Orphan Sponsorship</Link>
                  <Link to="/olive-tree" onClick={closeMobileMenu} className="block font-semibold">Olive Tree</Link>
                  <Link to="/hifa-sponsorship" onClick={closeMobileMenu} className="block font-semibold">Medical Camp</Link>
                  <Link to="/build-home" onClick={closeMobileMenu} className="block font-semibold">Build Home</Link>
                </div>
              )}
            </div>

            <Link to="/" onClick={closeMobileMenu} className="block text-lg font-semibold">Spread Barakah</Link>

            <div>
              <button onClick={() => toggleDropdown("countries")} className="flex justify-between w-full text-lg font-semibold">
                Countries <ChevronDown size={18} className={`${openDropdown === "countries" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "countries" && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/palestine" onClick={closeMobileMenu} className="block font-semibold">Palestine</Link>
                  <Link to="/yemen" onClick={closeMobileMenu} className="block font-semibold">Yemen</Link>
                  <Link to="/india" onClick={closeMobileMenu} className="block font-semibold">India</Link>
                  <Link to="/bangladesh" onClick={closeMobileMenu} className="block font-semibold">Bangladesh</Link>
                  <Link to="/pakistan" onClick={closeMobileMenu} className="block font-semibold">Pakistan</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
