"use client";
import { useState } from "react";
import { CiViewList } from "react-icons/ci";
import { PiBookOpenTextLight, PiWhatsappLogoLight } from "react-icons/pi";
import Modal from "../modal/Modal";
import EarlyLiveClass from "../earlyLiveClass/EarlyLiveClass";

const QuickLinks = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-[320px] h-[238px] md:w-[400px] md:h-[700px] justify-center flex flex-col gap-2">
      <h3 className="font-bold text-xl md:text-3xl text-[#3A3A3A]">
        Quick Links
      </h3>
      {/* Hidden for smaller screen */}
      <div className="hidden w-full h-[64px] md:h-[170px] bg-[#4749B3] rounded-lg md:rounded-3xl md:flex md:items-center md:justify-center text-white hover:bg-white hover:text-[#4749B3] transition-all duration-500 cursor-pointer">
        <div className="w-full md:w-[223px] flex md:flex-col items-center gap-6 md:justify-center md:gap-3">
        <PiBookOpenTextLight className="hidden md:block md:w-[25.79px] md:h-[25.29px]" />
          <div className="w-[68px] h-[64px] bg-[#5F61C0] rounded-lg flex items-center justify-center md:hidden">
            <PiBookOpenTextLight className="w-[36px] h-[36px] md:w-[25.79px] md:h-[25.29px]" />
          </div>
          <div>
            <h4 className="font-bold text-xl md:text-2xl text-center">
              Canvas LMS
            </h4>
            <p className="hidden md:block font-normal text-xs text-center ">
              Click here to access your LMS portal for assignments, class
              recordings and notes.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[64px] md:h-[170px] bg-[#E66DFF] rounded-lg md:rounded-3xl md:flex md:items-center md:justify-center  text-white hover:bg-white hover:text-[#E66DFF] transition-all duration-500 cursor-pointer"
        onClick={() => setModal(true)}
      >
        <div className="w-full md:w-[223px] flex md:flex-col items-center gap-6 md:justify-center md:gap-3">
        <CiViewList className="hidden md:block md:w-[25.79px] md:h-[25.29px]" />
          <div className="w-[68px] h-[64px] bg-[#EB87FF] rounded-lg flex items-center justify-center md:hidden">
            <CiViewList className="w-[36px] h-[36px] md:w-[25.79px] md:h-[25.29px]" />
          </div>
          <div>
            <h4 className="font-bold text-xl md:text-2xl text-center">
              Join Live Class
            </h4>
            <p className="hidden md:block font-normal text-xs text-center">
              Click here to join your live class session. Please do not share
              this link.
            </p>
          </div>
        </div>
      </div>
      {/* Hidden for above medium screen */}
      <div className="md:hidden w-full h-[64px] md:h-[170px] bg-[#4749B3] rounded-lg md:rounded-3xl  md:items-center md:justify-center text-white hover:bg-white hover:text-[#4749B3] transition-all duration-500 cursor-pointer">
        <div className="w-full md:w-[223px] flex md:flex-col items-center gap-6 md:justify-center md:gap-3">
        <PiBookOpenTextLight className="hidden md:block md:w-[25.79px] md:h-[25.29px]" />
          <div className="w-[68px] h-[64px] bg-[#5F61C0] rounded-lg flex items-center justify-center md:hidden">
            <PiBookOpenTextLight className="w-[36px] h-[36px] md:w-[25.79px] md:h-[25.29px]" />
          </div>
          <div>
            <h4 className="font-bold text-xl md:text-2xl text-center">
              Canvas LMS
            </h4>
            <p className="hidden md:block font-normal text-xs text-center ">
              Click here to access your LMS portal for assignments, class
              recordings and notes.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[64px] md:h-[170px] bg-[#6669FE] rounded-lg md:rounded-3xl md:flex md:items-center md:justify-center text-white hover:bg-white hover:text-[#6669FE] transition-all duration-500 cursor-pointer">
        <div className="md:w-[223px] w-full flex md:flex-col items-center gap-6 md:justify-center md:gap-3">
        <PiWhatsappLogoLight className="hidden md:block md:w-[25.79px] md:h-[25.29px]" />
          <div className="w-[68px] h-[64px] bg-[#7E81FF] rounded-lg flex items-center justify-center md:hidden">
            <PiWhatsappLogoLight className="w-[36px] h-[36px] md:w-[25.79px] md:h-[25.29px]" />
          </div>
          <div>
            <h4 className="font-bold text-xl md:text-2xl text-center">
            Contact Teacher
            </h4>
            <p className="hidden md:block font-normal text-xs text-center ">
            Click here to contact your teacher for any doubts or concerns.
            </p>
          </div>
        </div>
      </div>
      <Modal setModal={setModal} modal={modal}>
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            modal ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <EarlyLiveClass setModal={setModal} />
        </div>
      </Modal>
    </div>
  );
};

export default QuickLinks;
