import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import vite from "../assets/vite.svg";
import logo from "../assets/images/Layer1.svg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { services } from "../pages/services/servicesData";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLinkClass = "text-[#F4C520] after:w-full";

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    {
      label: "Services",
      submenu: services.map((s) => ({
        to: `/services/${s.slug}`,
        label: s.title,
      })),
    },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={scrolled ? vite : logo}
            alt="SD Financial Logo"
            className="h-[48px] sm:h-[54px] transition-all duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex gap-8 font-medium ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {links.map((link, i) =>
            link.submenu ? (
              <div
                className="relative group"
                key={i}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="cursor-pointer text-xl">{link.label}</span>
                <div
                  className={`absolute left-0 top-full mt-2 bg-white overflow-hidden shadow-lg rounded-md z-50 w-52 transition-all duration-300 ${
                    dropdownOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {link.submenu.map((sublink, idx) => (
                    <NavLink
                      key={idx}
                      to={sublink.to}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {sublink.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : ""} text-xl`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-[32px] transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-[70%] sm:w-[60%] md:hidden h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[32px] text-black"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 px-8 py-4 text-black font-medium text-[18px]">
          {links.map((link, i) =>
            link.submenu ? (
              <div key={i}>
                <button
                  onClick={() =>
                    setDropdownOpen((prev) =>
                      prev === link.label ? false : link.label
                    )
                  }
                  className="w-full text-left font-semibold text-lg"
                >
                  {link.label}
                </button>
                {dropdownOpen === link.label && (
                  <div className="ml-4 mt-1 flex flex-col gap-2">
                    {link.submenu.map((sublink, idx) => (
                      <NavLink
                        key={idx}
                        to={sublink.to}
                        onClick={() => setMenuOpen(false)}
                        className="text-base text-gray-700"
                      >
                        {sublink.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClass : ""}`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-10 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
