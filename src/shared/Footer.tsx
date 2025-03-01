
"use client"

import { Facebook, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import weddingFlower from "@/assets/weddingFlower.svg";
import Image from "next/image";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)
  console.log(isMobile)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <footer className="relative text-white overflow-hidden font-fontspring">
      {/* Background Image */}
      <Image
        src={weddingFlower}
        alt="Pink wedding bouquet"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Content Container */}
      <div className="relative z-10 bg-black bg-opacity-75">
        <div className="container mx-auto py-12">
          {/* Navigation */}
          <div className="flex justify-center mb-12 text-lg font-light">
            <nav className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
              <Link href="#" className="hover:text-rose-300 transition-colors">
                Shop All
              </Link>
              <span className="text-rose-400 text-lg">•</span>
              <Link href="#" className="hover:text-rose-300 transition-colors">
                Occasions
              </Link>
              <span className="text-rose-400 text-lg">•</span>
              <Link href="#" className="hover:text-rose-300 transition-colors">
                Flowers
              </Link>
              <span className="text-rose-400 text-lg">•</span>
              <Link href="#" className="hover:text-rose-300 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Phone className="text-rose-400 h-5 w-5" />
                <span>+00 123456789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-rose-400 h-5 w-5" />
                <span>username@email.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-rose-400 h-5 w-5 mt-1 flex-shrink-0" />
                <span>
                  House numer, Street number,
                  <br />
                  Road numer, City name, Country
                </span>
              </div>
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center mb-6">
                <div className="bg-rose-400 rounded-full h-12 w-12 flex items-center justify-center mr-3">
                  <div className="bg-black h-6 w-6 rounded-full"></div>
                </div>
                <span className="text-rose-400 text-2xl font-medium">Logo Ipsum</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="border border-rose-400 rounded-full h-10 w-10 flex items-center justify-center hover:bg-rose-400 hover:text-black transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="border border-rose-400 rounded-full h-10 w-10 flex items-center justify-center hover:bg-rose-400 hover:text-black transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="border border-rose-400 rounded-full h-10 w-10 flex items-center justify-center hover:bg-rose-400 hover:text-black transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Copyright Text */}
            <div className="text-right text-sm">
              <p className="leading-relaxed">
                A third party person or company should never use the Philips logo without the written permission of the
                copyright. written permission of the copyright.
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 sm:mb-0">Flower2023.all right reserved.</div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

