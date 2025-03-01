"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import ProductCard from "./Home/ProductCard"
import Link from "next/link"

// Sample data
const occasions = [
  "Anniversary",
  "Birthday",
  "Congrats",
  "For Me",
  "Get Well",
  "Just Because",
  "Romance",
  "Seasonal",
  "Sympathy",
  "Thank You",
]

const flowerTypes = ["Tulips", "Classic Mixed Roses", "Fresh Lilies", "Hydrangeas", "Red Lilies", "Sunflowers"]

const products = [
  {
    id: 1,
    title: "Double Dutch: 50 Stems of Tulips",
    price: 100,
    rating: 5,
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XFpOkV37bVtd1RNDluyVPF9rpIydfu.png",
  },
  {
    id: 2,
    title: "A Ton of Ranuncs",
    price: 100,
    rating: 5,
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XFpOkV37bVtd1RNDluyVPF9rpIydfu.png",
  },
  // Add more products as needed
]

export default function Filter() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="text-sm mb-2">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
            <li>
              <a href="/shop" className="text-gray-600 hover:text-gray-900">
                Shop All
              </a>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
            <li>
              <span className="text-gray-900">Seasonal Flowers</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-3xl font-semibold">Seasonal Flowers</h1>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border rounded-lg"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters */}
        <div className={`${showFilters ? "block" : "hidden"} lg:block space-y-6`}>
          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-4">Price</h3>
            <div className="space-y-4">
              <Slider defaultValue={[0, 500]} max={500} step={50} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Occasion */}
          <div>
            <h3 className="font-semibold mb-4">Occasion</h3>
            <div className="space-y-2">
              {occasions.map((occasion) => (
                <div key={occasion} className="flex items-center">
                  <Checkbox
                    id={occasion}
                    checked={selectedOccasions.includes(occasion)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedOccasions([...selectedOccasions, occasion])
                      } else {
                        setSelectedOccasions(selectedOccasions.filter((o) => o !== occasion))
                      }
                    }}
                  />
                  <label htmlFor={occasion} className="ml-2 text-sm">
                    {occasion}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Flower Type */}
          <div>
            <h3 className="font-semibold mb-4">Flower Type</h3>
            <div className="space-y-2">
              {flowerTypes.map((type) => (
                <div key={type} className="flex items-center">
                  <Checkbox
                    id={type}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedTypes([...selectedTypes, type])
                      } else {
                        setSelectedTypes(selectedTypes.filter((t) => t !== type))
                      }
                    }}
                  />
                  <label htmlFor={type} className="ml-2 text-sm">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                imageUrl={product.imageUrl}
                onViewMore={() => console.log("View more:", product.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

