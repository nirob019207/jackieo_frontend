"use client"

import { useState } from "react"

export default function GiftCard() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      title: "Birthday",
      image: "/placeholder.svg?height=150&width=250",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      id: 2,
      title: "HAPPY BIRTHDAY",
      image: "/placeholder.svg?height=150&width=250",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      id: 3,
      title: "Birthday",
      image: "/placeholder.svg?height=150&width=250",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      id: 4,
      title: "BIRTHDAY PARTY",
      image: "/placeholder.svg?height=150&width=250",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      id: 5,
      title: "HAPPY BIRTHDAY",
      image: "/placeholder.svg?height=150&width=250",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      id: 6,
      title: "Birthday",
      image: "/placeholder.svg?height=150&width=250",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ]

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 relative">
        <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <h2 className="text-center text-xl font-medium text-gray-800 mb-6">Add a card toyourgiftforfree</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} ${card.borderColor} border-2 rounded-md p-2 cursor-pointer transition-all duration-200 ${selectedCard === card.id ? "ring-2 ring-pink-500" : "hover:shadow-md"}`}
              onClick={() => setSelectedCard(card.id)}
            >
              <div className="bg-white rounded overflow-hidden">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={`${card.title} card template`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-12 rounded-full transition-colors duration-200">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

