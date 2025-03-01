import Image from "next/image"

export default function Subscription() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-40 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZtLm8vtifWb4EBoRpHkTSopbmEBz4W.png')] bg-cover bg-center"
        aria-hidden="true"
      />

      {/* Left flowers */}
      <div className="absolute left-0 bottom-0 w-28 h-56 sm:w-36 sm:h-72 md:w-48 md:h-full">
        <Image
          src="/placeholder.svg?height=300&width=150"
          alt=""
          fill
          className="object-contain object-left-bottom"
          aria-hidden="true"
        />
      </div>

      {/* Right flowers */}
      <div className="absolute right-0 bottom-0 w-28 h-56 sm:w-36 sm:h-72 md:w-48 md:h-full">
        <Image
          src="/placeholder.svg?height=300&width=150"
          alt=""
          fill
          className="object-contain object-right-bottom"
          aria-hidden="true"
        />
      </div>

      {/* Content container */}
      <div className="relative py-16 px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">Get The Latest Deals</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Sign up for our newsletter and get 10 Percent off your next order
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-pink-400 hover:bg-pink-500 text-white font-medium rounded transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

