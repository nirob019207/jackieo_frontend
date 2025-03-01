"use client"

import { useState } from "react"
import Image from "next/image"

import reviewImg from "@/assets/reviewImg.svg";
import comma from "@/assets/comma.svg";
import fatima from "@/assets/fatima.svg";

export default function CustomersReview() {
    const [activeIndex, setActiveIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: "Fatima",
            avatar: fatima,
            date: "2022/2/8",
            text: "I'm buying flower from them every week, always fresh flowers and beautiful, love it so much, keep going. All the flowers are best for your lovely home, just get the one you love the most.",
        },
        // Additional testimonials would be added here in a real implementation
        {
            id: 2,
            name: "Sarah",
            avatar: fatima,
            date: "2022/1/15",
            text: "The bouquets are always stunning and last so long. Their attention to detail and customer service is exceptional. Highly recommend!",
        },
        {
            id: 3,
            name: "Michael",
            avatar: fatima,
            date: "2022/3/4",
            text: "Ordered flowers for my wife's birthday and they exceeded my expectations. The arrangement was beautiful and delivered right on time.",
        },
    ]

    return (
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24 bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16 xl:gap-24">
                {/* Left column with heading and flower illustration */}
                <div className="md:w-5/12 mb-12 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-relaxed tracking-tight">
                        What Our Customers Say
                    </h2>
                    <div className="relative w-48 sm:w-56 lg:w-72 mt-4">
                        <Image
                            src={reviewImg}
                            alt="Decorative floral illustration"
                            width={300}
                            height={200}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right column with testimonial */}
                <div className="md:w-7/12">
                    <div className="relative">
                        {/* Quote mark */}
                        <div className="absolute -left-4 -top-10 text-pink-400 text-7xl md:text-8xl opacity-80 font-serif leading-none">
                            <Image src={comma} width={62} height={62} alt="Comma" />
                        </div>

                        <div className="pl-12 pr-4 relative">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                                {testimonials[activeIndex].text}
                            </p>

                            <div className="flex justify-end items-center mt-10">
                                <div className="text-right mr-4">
                                    <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                                    <p className="text-sm text-gray-500">{testimonials[activeIndex].date}</p>
                                </div>
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-200 shadow-sm">
                                    <Image
                                        src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                                        alt={`${testimonials[activeIndex].name}'s avatar`}
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex justify-center space-x-3 mt-16">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex ? "w-10 bg-pink-500" : "w-8 bg-pink-200 hover:bg-pink-300"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                                aria-current={index === activeIndex ? "true" : "false"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

