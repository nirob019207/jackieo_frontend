"use client";

// import { useState } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import logo from "@/assets/logo.svg";
import Image from "next/image";
// import cart from "@/assets/Cart.svg";

export default function Navbar() {
  // const [isOccasionsOpen, setIsOccasionsOpen] = useState(false)
  // const [isFlowersOpen, setIsFlowersOpen] = useState(false)

  return (
    <header className="border-b border-[#E8636F]">
      <div className="container mx-auto flex justify-between items-center my-5">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex justify-center items-center">
            <Image src={logo} width={40} height={40} alt="Logo Ipsum" className="w-8 md:w-10 h-8 md:h-10"/>
          </div>
          <span className="text-lg md:text-[32px] font-medium text-textPrimary">Logo Ipsum</span>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-lg text-textSecondary">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/flowers" className="hover:text-primary">
            Flowers
          </Link>
          {/* <div className="relative group">
            <button
              className="flex items-center text-textSecondary hover:text-rose-500"
              onClick={() => setIsOccasionsOpen(!isOccasionsOpen)}
            >
              Occasions
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 rounded-md w-48 z-10">
              <Link href="#" className="block px-4 py-2 text-textSecondary hover:bg-rose-50">
                Birthdays
              </Link>
              <Link href="#" className="block px-4 py-2 text-textSecondary hover:bg-rose-50">
                Anniversaries
              </Link>
              <Link href="#" className="block px-4 py-2 text-textSecondary hover:bg-rose-50">
                Weddings
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button
              className="flex items-center text-textSecondary hover:text-rose-500"
              onClick={() => setIsFlowersOpen(!isFlowersOpen)}
            >
              Flowers
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 rounded-md w-48 z-10">
              <Link href="#" className="block px-4 py-2 text-textSecondary hover:bg-rose-50">
                Roses
              </Link>
              <Link href="#" className="block px-4 py-2 text-textSecondary hover:bg-rose-50">
                Lilies
              </Link>
              <Link href="#" className="block px-4 py-2 text-textSecondary hover:bg-rose-50">
                Tulips
              </Link>
            </div>
          </div> */}
          <Link href="/contact-us" className="hover:text-primary">
            Contact Us
          </Link>
        </nav>

        {/* Right Side - Cart and Sign In */}
        <div className="flex items-center space-x-4">
          <button className="text-primary hover:text-textPrimary">
            <ShoppingCart className="h-8 w-8" />
            {/* <span className="sr-only">Shopping Cart</span> */}
          </button>
          <button className="bg-primary text-white px-2 md:px-4 py-2 text-xs md:text-lg leading-[150%] font-medium hover:bg-rose-600 transition-colors">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-textSecondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation - Only visible on mobile */}
      <div className="md:hidden">{/* Mobile menu would go here - hidden by default */}</div>
    </header>
  )
}

