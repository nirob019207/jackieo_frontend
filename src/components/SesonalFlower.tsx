"use client"
import React, { useState } from "react";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import { explore } from "@/constant/explore"; // Import the explore data
import ProductCard from "./Home/ProductCard";
import FilterIcon from "./icon/FilterIcon";

export default function SesonalFlower() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div>
        <BreadCrumb />

        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold ">Seasonal Flower</h1>

            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1 border rounded-md shadow-sm bg-secondary "
              >
                <FilterIcon/>
                Filter
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-secondary border rounded-md shadow-lg z-40">
                  <ul className="py-2 text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Price: Low to High
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Price: High to Low
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Best Selling
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Dynamically render ProductCard using explore data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {explore.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                rating={product.rating}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
