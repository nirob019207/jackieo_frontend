import Image from "next/image"
import subscriptionImg from "@/assets/subscriptionImg.svg";

export default function Subscription() {
    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50">
            {/* Background soft pink watercolor effect */}
            <div className="absolute inset-0 bg-pink-50 opacity-75" aria-hidden="true" />
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-200/30 via-pink-100/20 to-transparent"
                aria-hidden="true"
            />

            {/* Left flowers */}
            <div className="absolute left-0 bottom-0 w-24 sm:w-32 md:w-40 lg:w-48">
                <Image
                    src={subscriptionImg}
                    alt=""
                    width={150}
                    height={300}
                    className="object-contain object-left-bottom opacity-80"
                    aria-hidden="true"
                    style={{
                        clipPath: "polygon(0 0, 30% 0, 30% 100%, 0 100%)",
                    }}
                />
            </div>

            {/* Right flowers */}
            <div className="absolute right-0 bottom-0 w-24 sm:w-32 md:w-40 lg:w-48">
                <Image
                    src={subscriptionImg}
                    alt=""
                    width={150}
                    height={300}
                    className="object-contain object-right-bottom opacity-80"
                    aria-hidden="true"
                    style={{
                        clipPath: "polygon(70% 0, 100% 0, 100% 100%, 70% 100%)",
                    }}
                />
            </div>

            {/* Content container */}
            <div className="relative py-12 sm:py-16 md:py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-2">Get The Latest Deals</h2>
                    <p className="text-gray-700 mb-6 max-w-xl mx-auto text-sm sm:text-base">
                        Sign up for our newsletter and get 10 Percent off your next order
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email here..."
                            className="flex-1 px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-sm sm:text-base"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#f27a88] hover:bg-[#e66a78] text-white font-medium rounded transition-colors duration-200 text-sm sm:text-base"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



