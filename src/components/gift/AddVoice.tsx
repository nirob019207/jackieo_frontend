import { FC } from "react";
import { Mic, X } from "lucide-react";
import Link from "next/link";
import voice from'@/assets/voice.png'
import Image from "next/image";

interface AddVoiceProps {
  isNextModalOpen: boolean;
  handleNextModalClose: () => void;
  handleNextModal: () => void;
}

const AddVoice: FC<AddVoiceProps> = ({ isNextModalOpen, handleNextModalClose, handleNextModal }) => {
  return (
    <>
      {isNextModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md flex flex-col">
            {/* Header Section */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Add a video or voice message</h2>
              <button onClick={handleNextModalClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-4">
              <div className="border-2 border-blue-200 rounded-lg overflow-hidden">
                <div className="relative bg-pink-100 aspect-video">
                  <Image
                    src={voice}
                   height={269}
                   width={269}
                    alt="Person recording a message"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 text-sm text-gray-600">
                  <p>
                    Connect fast and intuitively! Create engaging e-mails, personalized video or voice messages to
                    express your gifted message delivered via a QR code printed on your card.
                  </p>
                </div>

                <div className="flex justify-end p-4 pt-0">
                  <button className="flex items-center gap-2 text-pink-500 font-medium hover:text-pink-600">
                    <Mic />
                    <span>Record Now</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="p-4 border-t flex justify-between gap-4">
              <button
                onClick={handleNextModal}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
              >
                Back
              </button>
              <Link
                href="/checkout"
                className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition text-center"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddVoice;
