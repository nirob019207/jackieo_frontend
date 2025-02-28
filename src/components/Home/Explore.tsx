// components/Explore.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { explore } from "@/constant/explore"; // Import the explore data

export default function Explore() {
  return (
    <div className="container py-44 min-h-screen">
      <div className="">
        <div className="flex justify-between items-start">
          <div>
            <h1>Explore Our Stunning Collections</h1>
            <p>
              Explore our handpicked floral collections, perfect for every
              occasion. Fresh, elegant, and beautifully arranged.
            </p>
          </div>
          <div>
            <span>See All</span>
          </div>
        </div>
      </div>

      {/* Dynamically render ProductCard using explore data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
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
  );
}
