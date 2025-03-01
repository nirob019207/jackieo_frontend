import subscriptionImg from "@/assets/subscriptionImg.svg";

export default function Subscription() {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${subscriptionImg.src})`,
                }}
            ></div>

            {/* Content container */}
            <div className="relative py-12 sm:py-16 md:py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-2">
                        Get The Latest Deals
                    </h2>
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



