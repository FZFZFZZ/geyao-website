"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import JoinUsModalContent from "@/data/joinUsModalContent";

interface JoinUsButtonProps {
  modalTitle?: string;
  customContent?: React.ReactNode;
  showGeneralNeeds?: boolean;
  showDirectChannelTip?: boolean;
  positionClassName?: string;
  buttonClassName?: string;
}

const JoinUsButton = ({
  modalTitle = "Join Us",
  customContent,
  showGeneralNeeds = true,
  showDirectChannelTip = true,
  positionClassName = "fixed bottom-4 right-2 sm:bottom-6 sm:right-3.5 md:bottom-8 md:right-5 lg:bottom-10 lg:right-7 z-60",
  buttonClassName = "animate-ping-custom transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-red-500/50 rounded-lg p-2 md:p-3 transform rotate-12"
}: JoinUsButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={positionClassName}>
        <button onClick={() => setOpen(true)} className={buttonClassName}>
          <Image
            src="/JOIN US(Quagmire).svg"
            alt="Join Us"
            width={120}
            height={60}
            className="w-28 h-14 sm:w-30 sm:h-15 md:w-36 md:h-18 lg:w-50 lg:h-25"
          />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full mx-4 relative border border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4 font-postmodern-display">
                {modalTitle}
              </h2>
              <p className="text-white font-postmodern-body text-lg">
                欢迎加入我们的音乐社团！
              </p>
            </div>
            <JoinUsModalContent
              customContent={customContent}
              showGeneralNeeds={showGeneralNeeds}
              showDirectChannelTip={showDirectChannelTip}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default JoinUsButton; 