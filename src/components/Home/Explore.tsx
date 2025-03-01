// components/Explore.tsx
import React from "react";


import exploreImgOne from "@/assets/exploreImgOne.svg";
import exploreImgTwo from "@/assets/exploreImgTwo.svg";
import exploreImgThree from "@/assets/exploreImgThree.svg";
import exploreImgFour from "@/assets/exploreImgFour.svg";
import Image from "next/image";

export default function Explore() {
  const collections = [
    {
      id: 1,
      title: "Double Dutch: 50 Stems of Tulips",
      image: exploreImgOne,
      price: 100,
      rating: 5,
    },
    {
      id: 2,
      title: "A Ton of Ranunes",
      image: exploreImgTwo,
      price: 100,
      rating: 5,
    },
    {
      id: 3,
      title: "Double Dutch: 50 Stems of Tulips",
      image: exploreImgThree,
      price: 100,
      rating: 5,
    },
    {
      id: 4,
      title: "With Heart: California Wildfire Relief",
      image: exploreImgFour,
      price: 100,
      rating: 5,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex justify-between items-start mb-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-2">
            Explore Our Stunning Collections
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Explore our handpicked floral collections, perfect for every occasion. Fresh, elegant, and beautifully
            arranged.
          </p>
        </div>
        <a href="/sesonalFlower" className="text-sm text-rose-500 font-medium">
          See All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {collections.map((collection) => (
          <div key={collection.id} className="flex flex-col">
            <div className="relative aspect-square mb-3 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400">
                  ★
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium text-gray-900">${collection.price}</h3>
            </div>
            <h4 className="text-sm text-gray-900 mb-3">{collection.title}</h4>
            <button className="mt-auto py-2 px-4 border border-primary text-rose-500 hover:text-white rounded text-sm font-medium hover:bg-primary transition-colors">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
