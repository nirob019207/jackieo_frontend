"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderImgOne from "@/assets/sliderImgOne.svg";
import sliderImgTwo from "@/assets/sliderImgTwo.svg";
import sliderImgThree from "@/assets/sliderImgThree.svg";
import sliderImgFour from "@/assets/sliderImgFour.svg";

const images = [
  sliderImgOne,
  sliderImgTwo,
  sliderImgThree,
  sliderImgFour,
]

export default function FlowerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Thumbnails - Vertical on desktop, hidden on mobile */}
      <div className="hidden md:flex flex-col gap-2 w-20">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative h-20 w-20 border-2 cursor-pointer transition-all duration-200 ${currentIndex === index ? "border-blue-400" : "border-gray-200 hover:border-gray-300"
              }`}
            onClick={() => goToSlide(index)}
          >
            <Image src={src || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Main Slider */}
      <div className="relative w-full flex items-start">
        <div className="relative w-full h-[500px]">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt="Flower bouquet"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-gray-300 rounded-full p-4 text-white transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-gray-300 rounded-full p-4 text-white transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        {/* Mobile Thumbnails - Horizontal on mobile, hidden on desktop */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex md:hidden gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${currentIndex === index ? "bg-blue-500 w-4" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

