import { useState } from "react";
import Rating from "../icon/Rating";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="p-6 bg-gray-100">
      <div className=" mx-auto bg-white p-6 rounded-lg ">
      <div className="flex  items-center justify-between gap-2">
      <h2 className="text-[33px]  font-semibold text-gray-800">
          Fun Size Burlap Wrapped Bouquet
        </h2>
        <p className="text-2xl font-bold text-red-500 mt-2">$120</p>
      </div>
        <p className="text-gray-600 text-sm mt-2">
          Team Farmgifts just right for every occasion, best-selling burlap wrapped bouquet but make it Spring!
        </p>
        <hr className="my-4" />

        {/* Rating */}
        <div className="flex items-center space-x-2 ">
          <div className="flex gap-4">
           <Rating/>
           <Rating/>
           <Rating/>
           <Rating/>

          </div>
          <p className="text-gray-600 text-sm">(75 Reviews)</p>
        </div>

        {/* Product Details */}
        <div className="mt-4">
          <p className="text-gray-700"><strong>Color:</strong> <span className="text-gray-500">Red</span></p>
          <p className="text-gray-700 mt-1"><strong>Size:</strong> <span className="text-gray-500">Regular</span></p>
        </div>

        {/* Quantity Selector */}
        <div className="mt-4">
          <label className="text-gray-700 font-semibold">Quantity</label>
          <div className="flex items-center border border-gray-300 rounded-lg w-24 mt-1">
            <button
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-lg"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="px-4 py-1 text-gray-700">{quantity}</span>
            <button
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-lg"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-primary  text-white font-bold py-2 px-4 rounded-lg mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
