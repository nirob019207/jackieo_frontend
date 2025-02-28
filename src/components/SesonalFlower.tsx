import React from 'react'
import BreadCrumb from './breadcrumb/BreadCrumb'
import { explore } from "@/constant/explore"; // Import the explore data
import ProductCard from './Home/ProductCard';


export default function SesonalFlower() {
  return (
    <div className='container'>
        <div>
            <BreadCrumb/>

            <div>
                <h1>Sesonal Flower</h1>
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
  )
}
