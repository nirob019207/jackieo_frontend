import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const path=usePathname();
  console.log(path)

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#00000033] backdrop-blur-[4px] py-6 z-50 font-roboto">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <p className="text-[#F2F4F7] text-3xl font-semibold">
  
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link
            href="/"
            className={`text-lg font-medium ${path === "/" ? "text-primary" : "text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-lg font-medium ${path === "/about" ? "text-primary" : "text-white"}`}
          >
            About Us
          </Link>
          <Link
            href="/faculties"
            className={`text-lg font-medium ${path === "/faculties" ? "text-primary" : "text-white"}`}
          >
            Faculties
          </Link>
          <Link
            href="/contact"
            className={`text-lg font-medium ${path === "/contact" ? "text-primary" : "text-white"}`}
          >
            Contact
          </Link>
        </div>
        <div className="lg:block hidden">
          <button className="bg-primary text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-secondary transition">
         Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-[#00008B] p-6 transition-all duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 text-white"
        >
          <X size={28} />
        </button>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center gap-6 mt-16">
          <li><Link href="/" className="text-white text-lg font-medium">Home</Link></li>
          <li><Link href="/about" className="text-white text-lg font-medium">About Us</Link></li>
          <li><Link href="/service" className="text-white text-lg font-medium">Faculties</Link></li>
          <li><Link href="/contact" className="text-white text-lg font-medium">Contact</Link></li>
          <li>
            <button className="bg-primary text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-secondary transition">
    Loign
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
