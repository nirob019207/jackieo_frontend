import Image from "next/image"
import Link from "next/link"

import weddingFlower from "@/assets/weddingFlower.svg";

export default function WeddingFlower() {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
            {/* Background Image */}
            <Image
                src={weddingFlower}
                alt="Pink wedding bouquet"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
                <div className="container mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-3 sm:mb-4">
                        Wedding Flowers
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-xl">
                        From full-scale floral installations to intimate elopement flowers, we're stoked to flower for your special
                        day!
                    </p>
                    <Link
                        href="#shop"
                        className="inline-block bg-primary hover:bg-pink-600 transition-colors text-white text-sm sm:text-base px-6 py-2 sm:py-3 rounded-sm"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

