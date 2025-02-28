import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"
import imgOne from "@/assets/imgOne.svg";
import imgTwo from "@/assets/imgTwo.svg";

export default function OurFlowers() {
    return (

        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Why Our Flowers Stand Out Section */}
            <div className="mt-16 md:mt-24 bg-white rounded-lg p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">Why Our Flowers Stand Out</h2>
                        <p className="text-gray-700">
                            We bring you the freshest, most vibrant flowers, handpicked with love and care. Our commitment to
                            quality, fast delivery, and exceptional customer service makes every purchase special.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </span>
                                <span>Freshness Guaranteed</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </span>
                                <span>Elegant Gift Packaging Available</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </span>
                                <span>100 Percent Satisfaction Guarantee</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </span>
                                <span>Secure and hassle free online ordering</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </span>
                                <span>Excellent customer support, ready to assist you</span>
                            </li>
                        </ul>

                        <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded transition duration-300">
                            Shop Now
                        </button>
                    </div>

                    {/* Right Images */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                                <Image
                                    src={imgOne}
                                    alt="Florist arranging flowers"
                                    width={400}
                                    height={300}
                                    className="rounded-lg object-cover h-full"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1 md:mt-12">
                                <Image
                                    src={imgTwo}
                                    alt="Wrapped flower bouquet"
                                    width={400}
                                    height={300}
                                    className="rounded-lg object-cover h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

