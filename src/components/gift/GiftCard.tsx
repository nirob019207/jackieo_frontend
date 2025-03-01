import { FC } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import gift1 from "@/assets/gift1.png";
import gift2 from "@/assets/giif2.png";

interface GiftCardModalProps {
  isModalOpen: boolean;
  selectedCard: number | null;
  setSelectedCard: (id: number) => void;
  handleModalClose: () => void;
  handleNextModal: () => void;

}
// isModalOpen={isModalOpen}
// selectedCard={selectedCard}
// setSelectedCard={setSelectedCard}
// handleNextModal={handleNextModal}

const GiftCard: FC<GiftCardModalProps> = ({
  isModalOpen,
  selectedCard,
  setSelectedCard,
  handleModalClose,
  handleNextModal,
}) => {
  const cardOptions = [
    { id: 1, title: "Birthday Celebration", image: gift1 },
    { id: 2, title: "Happy Birthday", image: gift2 },
    { id: 3, title: "Birthday Wishes", image: gift1 },
    { id: 4, title: "Birthday Party", image: gift2 },
    { id: 5, title: "Happy Birthday", image: gift1 },
    { id: 6, title: "Birthday Wishes", image: gift1 },
  ];

  return (
    <>
      {isModalOpen && (
        <div className="h-[241px]">
          <div className="fixed inset-0 bg-black backdrop-blur-[10px] bg-opacity-50 flex justify-center items-center z-50">
            <div className="p-6 rounded-lg container w-full">
              <div
                className="flex justify-end cursor-pointer text-white"
                onClick={handleModalClose}
              >
                <X />
              </div>
              <h2 className="text-center text-white text-2xl font-bold text-gray-800 mb-6">
              Add a card toyourgiftforfree
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {cardOptions.map((card) => (
                  <div
                    key={card.id}
                    className={`relative border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedCard === card.id
                        ? "border-pink-500 shadow-md"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedCard(card.id)}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      height={160}
                      width={282}
                      className="w-full h-40 object-cover"
                    />
                    {selectedCard === card.id && (
                      <div className="absolute top-2 right-2 bg-pink-500 text-white rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleNextModal}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-8 rounded-lg transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GiftCard;
