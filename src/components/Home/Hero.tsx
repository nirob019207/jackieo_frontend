"use client";
import Image from "next/image"
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
            <div className="bg-secondary py-8 md:pt-12 md:pb-28">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center justify-between container mx-auto">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-textPrimary">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E8636F] via-[#F48B7F] to-[#F48B7F] leading-[150%]">Fresh</span> Blooms,
                            <br />
                            <span className="leading-[150%]">Delivered to Your</span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E8636F] via-[#F48B7F] to-[#F48B7F] leading-[150%]">Doorstep</span>
                        </h1>
                        <p className="text-textSecondary font-light leading-[160%]">
                            {heroSlider[activeIndex].text}
                        </p>
                        <button className="bg-primary text-white px-4 py-2 text-lg leading-[150%] font-medium hover:bg-rose-600 transition-colors">
                            Shop Now
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
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

            {/* Pagination dots */}
            <div className="flex justify-center items-center space-x-2 absolute bottom-[43%] md:bottom-[36%] lg:bottom-[26%] xl:bottom-[18%] left-[45%] md:left-[50%]">
                {heroSlider.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-primary" : "bg-[#D9D9D9] hover:bg-pink-300"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                        aria-current={index === activeIndex ? "true" : "false"}
                    />
                ))}
            </div>

            {/* Features Section */}
            <div className="container">
                <div className="md:absolute top-[85%] container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-4 bg-white shadow-xl p-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-3">
                            <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                            <div className="">
                                <h3 className="font-medium text-primary text-lg xl:text-xl leading-[160%]">Free Shipping</h3>
                                <p className="text-textSecondary font-light leading-[160%]">On all orders over 5</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-3">
                            <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                            <div>
                                <h3 className="font-medium text-primary text-lg xl:text-xl leading-[160%]">Fresh Flowers</h3>
                                <p className="text-textSecondary font-light leading-[160%]">We provide 100 fresh flowers</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-3">
                            <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                            <div>
                                <h3 className="font-medium text-primary text-lg xl:text-xl leading-[160%]">100 Positive Reviews</h3>
                                <p className="text-textSecondary font-light leading-[160%]">We have more than 9.8k happy customers</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-3">
                            <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                            <div>
                                <h3 className="font-medium text-primary text-lg xl:text-xl leading-[160%]">Occasions</h3>
                                <p className="text-textSecondary font-light leading-[160%]">Perfect for any occasions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

