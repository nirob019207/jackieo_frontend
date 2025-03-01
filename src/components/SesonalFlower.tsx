"use client"
import React, { useState } from "react";
import BreadCrumb from "./breadcrumb/BreadCrumb";
import exploreImgOne from "@/assets/exploreImgOne.svg";
import exploreImgTwo from "@/assets/exploreImgTwo.svg";
import exploreImgThree from "@/assets/exploreImgThree.svg";
import exploreImgFour from "@/assets/exploreImgFour.svg";
import FilterIcon from "./icon/FilterIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function SesonalFlower() {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
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
    {
      id: 6,
      title: "A Ton of Ranunes",
      image: exploreImgTwo,
      price: 100,
      rating: 5,
    },
    {
      id: 7,
      title: "Double Dutch: 50 Stems of Tulips",
      image: exploreImgThree,
      price: 100,
      rating: 8,
    },
    {
      id: 4,
      title: "With Heart: California Wildfire Relief",
      image: exploreImgFour,
      price: 100,
      rating: 9,
    },
  ];

  return (
    <div className="container mb-32">
      <div>
        <BreadCrumb />

        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] font-bold ">Seasonal Flower</h1>

            <div className={`${pathName === '/filterFlower' ? "hidden" : "relative"}`}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1 border rounded-md shadow-sm bg-secondary "
              >
                <FilterIcon />
                Filter
              </button>

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


          <div className={`${pathName === '/filterFlower' ? 'grid grid-cols-1 md:grid-cols-4 relative' : ''}`}>
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
                              <Link
              href="/flowerDetails"
              className="mt-auto py-2 px-4 border text-center border-primary text-rose-500 hover:text-white rounded text-sm font-medium hover:bg-primary transition-colors"
            >
              View More
            </Link>
                            </div>
                          ))}
                 </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
