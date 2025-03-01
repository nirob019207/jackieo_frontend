"use client"
import React, { useState } from "react";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import { explore } from "@/constant/explore"; // Import the explore data
import ProductCard from "./Home/ProductCard";
import FilterIcon from "./icon/FilterIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PriceFilter from "./PriceFilter";

export default function SesonalFlower() {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="container mb-32">
      <div>
        <BreadCrumb />

        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold ">Seasonal Flower</h1>

            {/* Filter Dropdown */}
            <div className={`${pathName === '/filterFlower' ? "hidden" : "relative"}`}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1 border rounded-md shadow-sm bg-secondary "
              >
                <FilterIcon />
                Filter
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className={`absolute right-0 mt-2 w-40 bg-secondary border rounded-md shadow-lg z-40 ${pathName === '/filterFlower' ? 'hidden' : ''}`}>
                  <ul className="py-2 text-sm text-gray-700">
                    <Link href="/filterFlower">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Price: Low to High
                      </li>
                    </Link>
                    <Link href="/filterFlower">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Price: High to Low
                      </li>
                    </Link>
                    <Link href="/filterFlower">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Best Selling
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Filter Dropdown for filter page  */}

          {
            pathName === '/filterFlower' &&
            <div className="flex justify-end my-4 lg:hidden">
              <button
                onClick={() => setIsActive(!isActive)}
                className="flex items-center gap-2 px-3 py-1 border rounded-md shadow-sm bg-secondary "
              >
                <FilterIcon />
              </button>
            </div>
          }


          {/* Dynamically render ProductCard using explore data */}
          <div className={`${pathName === '/filterFlower' ? 'grid grid-cols-1 md:grid-cols-4 relative' : ''}`}>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ${pathName === '/filterFlower' ? 'lg:grid-cols-3 col-span-1 md:col-span-3' : 'col-span-4'}`}>
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
            <div className={`${pathName === '/filterFlower' ? ' col-span-1 absolute right-0' : ''}`}>
              {
                isActive ? <PriceFilter /> : <></>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
