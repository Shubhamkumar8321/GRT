import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/GRT.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const navRef = useRef(null);
  const dropdownTimeout = useRef(null);

  // Toggle dropdown visibility and auto-close after 5 seconds
  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? "" : item);
    clearTimeout(dropdownTimeout.current);

    if (openDropdown !== item) {
      dropdownTimeout.current = setTimeout(() => {
        setOpenDropdown("");
      }, 5000);
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(dropdownTimeout.current);
    };
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenDropdown("");
  };

  // All dropdown link data
  const menuLinks = {
    emergency: [
      { to: "/gaza-emergency", label: "Gaza Appeal" },
      { to: "/malnutrition-in-yemen", label: "Malnutrition in Yemen" },
      { to: "/most-urgent", label: "Most Urgent Fund" },
      { to: "/rohingya", label: "Rohingya" },
      { to: "/students-gaza", label: "Students of Gaza" },
      { to: "/syria-house", label: "Syria Housing" },
    ],
    sadaqah: [
      { to: "/water", label: "Water Project" },
      { to: "/masjid-appeal", label: "Masjid Construction" },
      { to: "/sponsor-orphan", label: "Orphan Sponsorship" },
      { to: "/olive-tree", label: "Olive Tree" },
      { to: "/hifa-sponsorship", label: "Hifa Sponsorship" },
      { to: "/build-home", label: "Build Home" },
      { to: "/cataracts", label: "Cataracts" },
    ],
    special: [
      { to: "/food", label: "Food" },
      { to: "/livelihood", label: "Livelihood" },
      { to: "/wheelchair", label: "Wheelchair Appeal" },
      { to: "/medical", label: "Medical" },
      { to: "/women-care-pack", label: "Women’s Care Pack" },
      { to: "/bread-appeal", label: "Yemen & Syria Bread Appeal" },
      { to: "/aqeeqah", label: "Aqeeqah" },
    ],
    countries: [
      { to: "/malaysia", label: "Malaysia" },
      { to: "/palestine", label: "Palestine" },
      { to: "/yemen", label: "Yemen" },
      { to: "/india", label: "India" },
      { to: "/bangladesh", label: "Bangladesh" },
      { to: "/pakistan", label: "Pakistan" },
      { to: "/syria", label: "Syria" },
    ],
  };

  const renderLinks = (key) =>
    menuLinks[key].map((item) => (
      <Link
        to={item.to}
        key={item.to}
        onClick={closeMobileMenu}
        className="block px-4 py-2 font-semibold hover:bg-gray-50"
      >
        {item.label}
      </Link>
    ));

  return (
    <nav className="font-webspecia z-50 bg-transparent absolute top-0 left-0 w-full" ref={navRef}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {/* Spread Barakah link */}
          <li>
            <Link to="/" className="font-bold text-black hover:text-blue-600 transition-colors">
              Spread Barakah
            </Link>
          </li>

          {/* Dropdown Menus */}
          {Object.keys(menuLinks).map((key) => (
            <li className="relative" key={key}>
              <button
                onClick={() => toggleDropdown(key)}
                className="flex items-center gap-1 font-bold text-black hover:text-blue-600 transition-colors"
              >
                {key === "emergency"
                  ? "Emergency Appeals"
                  : key === "sadaqah"
                  ? "Sadaqah Jariyah"
                  : key === "special"
                  ? "Special Appeals"
                  : "Countries"}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openDropdown === key ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Items */}
              {openDropdown === key && (
                <div
                  className={`absolute bg-white shadow-lg rounded-md mt-2 py-2 w-56 z-50 border ${
                    key === "countries" ? "right-2" : ""
                  }`}
                >
                  {renderLinks(key)}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="flex justify-between items-center p-5 border-b">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <button onClick={closeMobileMenu}>
              <X size={28} />
            </button>
          </div>

          <div className="p-6 space-y-4">
            {/* Spread Barakah link */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block text-lg font-bold text-black"
            >
              Spread Barakah
            </Link>

            {/* Mobile Dropdown Menus */}
            {Object.keys(menuLinks).map((key) => (
              <div key={key}>
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex justify-between w-full text-lg font-bold text-black"
                >
                  {key === "emergency"
                    ? "Emergency Appeals"
                    : key === "sadaqah"
                    ? "Sadaqah Jariyah"
                    : key === "special"
                    ? "Special Appeals"
                    : "Countries"}
                  <ChevronDown
                    size={18}
                    className={`${openDropdown === key ? "rotate-180" : ""}`}
                  />
                </button>

                {openDropdown === key && (
                  <div className="pl-4 mt-2 space-y-2">{renderLinks(key)}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
