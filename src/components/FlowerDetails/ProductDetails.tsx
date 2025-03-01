import { useState } from "react";
import Rating from "../icon/Rating";
import GiftCard from "../gift/GiftCard";
import NextModal from "../gift/NextModal";
import AddVoice from "../gift/AddVoice";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isNextModalOpen, setIsNextModalOpen] = useState(false);
  const [isAddVoiceOpen, setIsAddVoiceOpen] = useState(false);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleNextModal = () => {
    setIsModalOpen(false);
    setIsNextModalOpen(true);
    console.log("kamran");
  };
  const handleModalClose = () => setIsModalOpen(false);

  const handleNextModalClose = () => setIsNextModalOpen(false);

  const handleOpenAddVoice = () => {
    setIsNextModalOpen(false);
    setIsAddVoiceOpen(true);
    console.log("kamran");
  };

  const handleCloseAddVoice = () => {
    setIsAddVoiceOpen(false);
    setIsNextModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="mx-auto bg-white p-6 rounded-lg">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-[33px] font-semibold text-gray-800">
            Fun Size Burlap Wrapped Bouquet
          </h2>
          <p className="text-2xl font-bold text-red-500 mt-2">$120</p>
        </div>
        <p className="text-gray-600 text-sm mt-2">
          Team Farmgifts just right for every occasion, best-selling burlap
          wrapped bouquet but make it Spring!
        </p>
        <hr className="my-4" />

        <div className="flex items-center space-x-2">
          <div className="flex gap-4">
            <Rating />
            <Rating />
            <Rating />
            <Rating />
          </div>
          <p className="text-gray-600 text-sm">(75 Reviews)</p>
        </div>

        <div className="mt-4">
          <p className="text-gray-700">
            <strong>Color:</strong> <span className="text-gray-500">Red</span>
          </p>
          <p className="text-gray-700 mt-1">
            <strong>Size:</strong>{" "}
            <span className="text-gray-500">Regular</span>
          </p>
        </div>

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

        <div className="mt-6">
          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <GiftCard
        isModalOpen={isModalOpen}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        handleNextModal={handleNextModal}
        handleModalClose={handleModalClose}
      />

      <NextModal
        isNextModalOpen={isNextModalOpen}
        handleNextModalClose={handleNextModalClose}
        handleNextModal={handleOpenAddVoice}
      />

      <AddVoice
        isNextModalOpen={isAddVoiceOpen}
        handleNextModalClose={handleCloseAddVoice}
        handleNextModal={handleNextModal}
      />
    </div>
  );
};

export default ProductDetails;
