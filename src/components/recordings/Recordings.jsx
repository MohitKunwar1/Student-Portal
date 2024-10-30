"use client";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { useState } from "react";
import Modal from "../modal/Modal";
import VideoPlayer from "../videoPlayer/VideoPlayer";

const Recordings = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className=" w-[320px] h-[492px] md:w-[400px] md:h-[700px] flex flex-col items-center md:items-start justify-center gap-2 mb-10 md:mb-0">
        <h3 className=" text-xl md:text-3xl font-bold text-[#3A3A3A] mr-20 md:mr-0 ">
          Access Class Recordings
        </h3>
        <div className=" w-[320px] h-[462px] md:w-full md:h-[530px] flex flex-col items-center justify-center   bg-white border-[1px] border-[#6669FE1A] rounded-3xl ">
          <div className="search w-[296px] h-[42px] md:w-[323px] md:h-[32px] my-2 md:my-0  md:mb-5 md:mt-2 bg-[#4749B30D] flex items-center justify-center rounded-md overflow-hidden">
            <div className="w-10 h-full flex items-center justify-center bg-transparent">
              <RiSearch2Line className="w-[20px] h-[20px] m-auto text-[#00000033]" />
            </div>
            <input
              type="text"
              placeholder="Search for class recordings"
              className="bg-transparent w-full h-full placeholder:text-[#0000004D]"
            />
          </div>
          <div className="filter md:w-[323px] md:h-[24px] mb-5 md:mb-8 flex gap-10 md:gap-0 items-center justify-between">
            <span className="text-[#000] text-xs font-normal">Filter By: </span>
            <div className="h-full flex items-center gap-4">
              <select
                name="this week"
                className="h-full px-2 font-normal text-xs text-[#979797] bg-[#F6F6FB] rounded"
              >
                <option>This week</option>
              </select>
              <select className=" h-full px-2 font-normal text-xs text-[#979797] bg-[#F6F6FB] rounded">
                <option>All subjects</option>
              </select>
            </div>
          </div>
          <AccessRecordings
            detail="Class 7 Math"
            topic="Algebraic Equations"
            days="24th October, 2024"
            setModal={setModal}
          />
          <AccessRecordings
            detail="Class 7 Math"
            topic="Differential Maths"
            days="24th October, 2024"
            setModal={setModal}
          />
          <AccessRecordings
            detail="Class 7 Math"
            topic="Fundamentals of Organic Chemistry"
            days="24th October, 2024"
            style="bg-[#E66DFF]"
            textStyle="text-[#E66DFF]"
            setModal={setModal}
            specialClass="special"
          />
          <AccessRecordings
            detail="Class 7 Math"
            topic="Trignometry 101"
            days="24th October, 2024"
            setModal={setModal}
          />
        </div>
      </div>
      <Modal setModal={setModal} modal={modal}>
        <div
          className={`fixed inset-0 z-30  cursor-pointer ${
            modal ? "visible opacity-100" : "invisible opacity-0"
          } `}
        >
          <VideoPlayer setModal={setModal} />
        </div>
      </Modal>
    </>
  );
};

export default Recordings;

const AccessRecordings = ({
  detail,
  topic,
  days,
  style,
  textStyle,
  setModal,
  specialClass,
}) => {
  return (
    <div
      className={`recordings group border-b-[0.5px] border-[#0000001A] pb-2 mb-5 cursor-pointer hover:border-b-black ${specialClass}`}
      onClick={() => setModal(true)}
    >
      <div className="video w-[322px] h-[64px] flex p-3 md:p-0">
        <div className="w-[222px] flex flex-col justify-center gap-7 h-full">
          <div className="w-full h-1/2 flex flex-col items-start">
            <span
              className={`font-medium text-xs group-hover:text-[#979797] ${
                textStyle ? textStyle : "text-[#4749B3]"
              }`}
            >
              {detail}
            </span>
            <p
              className={`font-bold text-base leading-[15.84px] text-[#000000] group-hover:text-[#4749B3] `}
            >
              {topic}
            </p>
          </div>
          <span className="font-normal text-xs text-[#727272]">{days}</span>
        </div>
        <div
          className={`relative w-[100px] h-full flex items-center justify-center rounded-md overflow-hidden ${
            style ? style : "bg-[#474996]"
          }`}
        >
          <div className="absolute w-full h-full bg-bgImage bg-center bg-cover top-0 right-0 mix-blend-multiply"></div>
          <HiOutlinePlayCircle className="center absolute  w-[24px] h-[24px] text-white group-hover:hidden" />
          <span className="absolute  text-white text-xs hidden group-hover:inline">
            play now
          </span>
        </div>
      </div>
    </div>
  );
};
