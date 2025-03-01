"use client"

import { useState } from "react"
import { Star } from 'lucide-react'

export default function DesReview() {
  const [activeTab, setActiveTab] = useState("description")

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      date: "2 days ago",
      content: "When I place an order with Farmgirl Flowers, I know the flowers I'm sending will arrive fresh, on a timely basis and brighten the day of the recipient. Every order is professionally packaged and arrives on the promised date."
    },
    {
      id: 2,
      name: "John Doe",
      rating: 5,
      date: "2 days ago",
      content: "I bought these for my girlfriend as a surprise and she loved them. All week her friends at work were admiring her flowers and wishing they had received them."
    },
    {
      id: 3,
      name: "John Doe",
      rating: 5,
      date: "2 days ago",
      content: "This is the first time we ordered from Farmgirl. We chose to after we received an arrangement as a gift. The flowers were amazing. They were FRESH, they were beautiful and on time."
    }
  ]

  return (
    <div className="mx-auto p-6">
      <div className="border-b border-gray-200">
        <div className="flex -mb-px">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "description"
                ? "border-b-2 border-rose-400 text-rose-500"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "review"
                ? "border-b-2 border-rose-400 text-rose-500"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Review
          </button>
        </div>
      </div>

      <div className="py-4">
        {activeTab === "description" && (
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              Style your space with the prettiest flowers around! Our classic flower wrap makes a sweet gift for whatever occasion... or a treat yourself kinda day. We source the coolest seasonal blooms, wrap &apos;em up in pretty paper, and deliver them anywhere in San Diego. Or you can opt to pick up your flowers at one of our stores — drop by and experience the most magical flower shops in town.
            </p>
            <p>
              Flowers are a great way to show your gratitude and share your love. Wanna keep the blooms coming? Our flower subscriptions lets you enjoy beautiful blooms on the reg and at a discount!
            </p>
            <p>
              Flowers vary based on seasonal availability — our florists always select the freshest blooms for your wrap.
            </p>
            <p>
              Have a special request for your flowers? Share your request with our florists in the special instructions section during checkout.
            </p>
          </div>
        )}
        {activeTab === "review" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">All Reviews</h2>
              <button className="text-rose-500 text-sm hover:text-rose-600">
                Load more
              </button>
            </div>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
