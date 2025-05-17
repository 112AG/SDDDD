import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import vite from "../assets/vite.svg";
import logo from "../assets/images/Layer1.svg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { services } from "../pages/services/servicesData";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const desktopSubmenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopSubmenuRef.current &&
        !desktopSubmenuRef.current.contains(event.target)
      ) {
        setDesktopSubmenuOpen(false);
      }
    };
    if (desktopSubmenuOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [desktopSubmenuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDesktopSubmenu = () => {
    setDesktopSubmenuOpen((prev) => !prev);
  };

  const toggleMobileSubmenu = () => {
    setMobileSubmenuOpen((prev) => !prev);
  };

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
                className="relative"
                key={i}
                ref={desktopSubmenuRef}
                onMouseEnter={() => setDesktopSubmenuOpen(true)}
                onMouseLeave={() => setDesktopSubmenuOpen(false)}
              >
                {/* Clickable label toggles submenu */}
                <span
                  onClick={toggleDesktopSubmenu}
                  className={`cursor-pointer text-xl select-none ${
                    desktopSubmenuOpen ? "text-[#F4C520]" : ""
                  }`}
                >
                  {link.label}
                </span>

                {/* Submenu */}
                <div
                  className={`absolute left-0 top-full mt-2 bg-white overflow-hidden shadow-lg rounded-md transition-all duration-300 z-50 w-52 ${
                    desktopSubmenuOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {link.submenu.map((sublink, idx) => (
                    <NavLink
                      key={idx}
                      to={sublink.to}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setDesktopSubmenuOpen(false)}
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

        {/* Mobile Menu Links */}
        <div className="flex flex-col gap-6 px-12 py-4 text-black font-medium text-[18px]">
          {links.map((link, i) =>
            link.submenu ? (
              <div key={i}>
                <span
                  onClick={toggleMobileSubmenu}
                  className="block font-semibold text-lg cursor-pointer select-none"
                >
                  {link.label}
                </span>
                {mobileSubmenuOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-2">
                    {link.submenu.map((sublink, idx) => (
                      <NavLink
                        key={idx}
                        to={sublink.to}
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileSubmenuOpen(false);
                        }}
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
