import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import vite from "../assets/vite.svg";
import logo from "../assets/images/Layer1.svg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const activeLinkClass = "text-[#F4C520] after:w-full";

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/category", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },

  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl xl:max-w-[84vw] 2xl:max-w-[1460px] mx-auto flex justify-between items-center py-4 ">
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
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${isActive ? activeLinkClass : ""} text-xl`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-[32px] transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
{/* Mobile Navigation Menu */}
<div
  className={`fixed top-0 right-0 w-[54%] h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Close Button */}
  <div className="flex justify-end p-6">
    <button
      onClick={() => setMenuOpen(false)}
      className="text-[32px] text-black"
      aria-label="Close menu"
    >
      <HiOutlineX />
    </button>
  </div>

  {/* Menu Links */}
  <div className="flex flex-col gap-6 px-12 py-4 text-black font-medium text-[18px]">
    {links.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `${isActive ? activeLinkClass : ""}`
        }
      >
        {label}
      </NavLink>
    ))}
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
