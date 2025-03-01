import { FC } from "react";
import { X } from "lucide-react";

interface NextModalProps {
  isNextModalOpen: boolean;
  handleNextModalClose: () => void;
  handleNextModal: () => void;
}

const NextModal: FC<NextModalProps> = ({
  isNextModalOpen,
  handleNextModalClose,
  handleNextModal,
}) => {
  return (
    <>
      {isNextModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[10px] flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
            {/* Close Button */}
            <div
              className="absolute top-3 right-3 text-gray-600 cursor-pointer"
              onClick={handleNextModalClose}
            >
              <X />
            </div>

            {/* Modal Content */}
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
              Add a note
            </h2>

            <textarea
              className="w-full border rounded-lg px-2 py-4 outline-none h-[261px]"
              placeholder="Write your note..."
            ></textarea>

            {/* Buttons */}
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={handleNextModalClose}
                className=" cursor-pointer text-red-400 border font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNextModal}
                className="bg-[#E8636F] hover:bg-pink-600 text-white font-bold py-2 px-6  transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NextModal;
