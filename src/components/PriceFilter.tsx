"use client"

import type React from "react"

import { useState } from "react"

export default function PriceFilter() {

    const [priceRange, setPriceRange] = useState<number>(100)
    const [selectedPrice, setSelectedPrice] = useState<string>("Under $100")
    const [selectedOccasion, setSelectedOccasion] = useState<string>("Anniversary")
    const [selectedFlowerType, setSelectedFlowerType] = useState<string>("")

    const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRange(Number.parseInt(e.target.value))
    }

    const handlePriceOptionChange = (option: string) => {
        setSelectedPrice(selectedPrice === option ? "" : option)
    }

    const handleOccasionChange = (option: string) => {
        setSelectedOccasion(selectedOccasion === option ? "" : option)
    }

    const handleFlowerTypeChange = (option: string) => {
        setSelectedFlowerType(selectedFlowerType === option ? "" : option)
    }

    return (
        <div className="max-w-[280px] border-r border-gray-200 p-5 bg-white">
            {/* Price Section */}
            <div className="mb-6">
                <h2 className="text-lg font-medium mb-3">Price</h2>
                <div className="flex gap-2 mb-3">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="100"
                            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm"
                        />
                    </div>
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="500"
                            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        className="w-full h-1 bg-gray-200 rounded-lg appearance-auto cursor-pointer accent-primary"
                    />
                </div>
                <div className="space-y-2">
                    {["Under $100", "Under $200", "Under $300", "Under $400", "Under $500"].map((option) => (
                        <div key={option} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`price-${option}`}
                                checked={selectedPrice === option}
                                onChange={() => handlePriceOptionChange(option)}
                                className="hidden"
                            />
                            <label htmlFor={`price-${option}`} className="flex items-center cursor-pointer">
                                <div
                                    className={`w-4 h-4 border rounded flex items-center justify-center mr-2 ${selectedPrice === option ? "bg-primary border-primary" : "border-gray-400"
                                        }`}
                                >
                                    {selectedPrice === option && (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                                            <path
                                                fillRule="evenodd"
                                                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm">{option}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Occasion Section */}
            <div className="mb-6">
                <h2 className="text-lg font-medium mb-3">Occasion</h2>
                <div className="space-y-2">
                    {[
                        "Anniversary",
                        "Birthday",
                        "Congrats",
                        "For Me",
                        "Get Well",
                        "Gift",
                        "Romance",
                        "Seasonal",
                        "Sympathy",
                        "Thank You",
                    ].map((option) => (
                        <div key={option} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`occasion-${option}`}
                                checked={selectedOccasion === option}
                                onChange={() => handleOccasionChange(option)}
                                className="hidden"
                            />
                            <label htmlFor={`occasion-${option}`} className="flex items-center cursor-pointer">
                                <div
                                    className={`w-4 h-4 border rounded flex items-center justify-center mr-2 ${selectedOccasion === option ? "bg-primary border-primary" : "border-gray-400"
                                        }`}
                                >
                                    {selectedOccasion === option && (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                                            <path
                                                fillRule="evenodd"
                                                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm">{option}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Flower Type Section */}
            <div>
                <h2 className="text-lg font-medium mb-3">Flower Type</h2>
                <div className="space-y-2">
                    {["Daffodils", "David Austin Roses", "Delphinium", "Lilies", "Rose Lilies", "Roses"].map((option) => (
                        <div key={option} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`flower-${option}`}
                                checked={selectedFlowerType === option}
                                onChange={() => handleFlowerTypeChange(option)}
                                className="hidden"
                            />
                            <label htmlFor={`flower-${option}`} className="flex items-center cursor-pointer">
                                <div
                                    className={`w-4 h-4 border rounded flex items-center justify-center mr-2 ${selectedFlowerType === option ? "bg-primary border-primabg-primary" : "border-gray-400"
                                        }`}
                                >
                                    {selectedFlowerType === option && (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
                                            <path
                                                fillRule="evenodd"
                                                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm">{option}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

