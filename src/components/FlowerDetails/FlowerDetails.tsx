"use client";

import DesReview from "./DesReview";
import ProductDetails from "./ProductDetails";

import RelatedProducts from "../RelatedProducts/RelatedProducts";
import FlowerSlider from "./FlowerSlider";
export default function FlowerDetails() {

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex justify-between">
        <div className="w-1/2">
          <FlowerSlider />
        </div>
        <div className="w-1/2">
          <div>
            <ProductDetails />
          </div>
        </div>
      </div>

      <DesReview />

      <RelatedProducts />
    </div>
  );
}
