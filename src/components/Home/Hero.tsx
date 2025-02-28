import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/HeroImg.svg";
import freeShipping from "@/assets/free-delivery.svg";

export default function Hero() {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 py-8 md:py-12">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                            <span className="text-rose-400">Fresh</span> Blooms,
                            <br />
                            Delivered to Your
                            <br />
                            <span className="text-rose-400">Doorstep</span>
                        </h1>
                        <p className="text-gray-700 max-w-md">
                            Handpicked, expertly arranged, and delivered with love. Perfect for every occasion.
                        </p>
                        <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded transition duration-300">
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

                {/* Features Section */}
                <div className="mt-12 md:mt-16 bg-white rounded-lg shadow-sm p-4 md:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="p-2 rounded-full">
                                    <Image src={freeShipping} width={100} height={100} alt="Free Shipping" className="w-16 h-16" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium text-rose-400">Free Shipping</h3>
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
                                <h3 className="font-medium text-rose-400">Fresh Flowers</h3>
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
                                <h3 className="font-medium text-rose-400">100 Positive Reviews</h3>
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
                                <h3 className="font-medium text-rose-400">Occasions</h3>
                                <p className="text-sm text-gray-600">Perfect for any occasions</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button className="text-gray-400 hover:text-rose-400">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    </div>
                    <button className="text-gray-400 hover:text-rose-400">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}

