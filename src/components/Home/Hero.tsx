"use client";
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/HeroImg.svg";
import freeShipping from "@/assets/free-delivery.svg";
import { useState } from "react";
import fatima from "@/assets/fatima.svg";

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0)

    const heroSlider = [
        {
            id: 1,
            name: "Fatima",
            avatar: heroImg,
            text: "Handpicked, expertly arranged, and delivered with love. Perfect for every occasion.",
        },
        // Additional testimonials would be added here in a real implementation
        {
            id: 2,
            name: "Sarah",
            avatar: fatima,
            text: "Fresh Blooms, Delivered to Your Doorstep",
        },
        {
            id: 3,
            name: "Michael",
            avatar: heroImg,
            text: "Handpicked, expertly arranged, and delivered with love. Perfect for every occasion.",
        },
    ]
    return (
        <div className="relative mb-16">
            <div className="bg-secondary px-5 py-8 md:pt-12 md:pb-28">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12  container mx-auto">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                            <span className="text-rose-400">Fresh</span> Blooms,
                            <br />
                            Delivered to Your
                            <br />
                            <span className="text-rose-400">Doorstep</span>
                        </h1>
                        <p className="text-gray-700 max-w-md">
                            {heroSlider[activeIndex].text}
                        </p>
                        <button className="bg-primary hover:bg-rose-500 text-white px-6 py-2 rounded transition duration-300">
                            Shop Now
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <Image
                            src={heroImg}
                            alt="Flower arrangement in basket"
                            width={500}
                            height={400}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
            {/* Features Section */}
            <div className="container">
                <div className="lg:aboslute lg:-mt-10 bg-white rounded-lg p-4 shadow-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="p-2 rounded-full">
                                    <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-primary">Free Shipping</h3>
                                <p className="text-sm text-gray-600">On all orders over 5</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="p-2 rounded-full">
                                    <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-primary">Fresh Flowers</h3>
                                <p className="text-sm text-gray-600">We provide 100 fresh flowers</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="p-2 rounded-full">
                                    <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-primary">100 Positive Reviews</h3>
                                <p className="text-sm text-gray-600">We have more than 9.8k happy customers</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="p-2 rounded-full">
                                    <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-primary">Occasions</h3>
                                <p className="text-sm text-gray-600">Perfect for any occasions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            {/* <div className="flex justify-center items-center gap-4 mt-8">
                <button className="text-gray-400 hover:text-rose-400">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                    <span className="w-2 h-2 rounded-full bg-[#D9D9D9]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#D9D9D9]"></span>
                </div>
                <button className="text-gray-400 hover:text-rose-400">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div> */}

            {/* Pagination dots */}
            <div className="flex justify-center items-center space-x-3 mt-24 absolute -bottom-14 md:-bottom-20 left-[35%] md:left-[40%] lg:left-[45%]">
                <button className="text-gray-400 hover:text-rose-400">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                {heroSlider.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-primary" : "bg-[#D9D9D9] hover:bg-pink-300"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        aria-current={index === activeIndex ? "true" : "false"}
                    />
                ))}
                <button className="text-gray-400 hover:text-rose-400">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}

