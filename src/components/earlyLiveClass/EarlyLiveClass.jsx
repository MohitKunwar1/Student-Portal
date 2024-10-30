import React from "react";

const EarlyLiveClass = ({setModal}) => {
  return (
    <div className=" w-[320px] h-[261px] md:w-[450px] md:h-[261px] ">
      <div className="w-full h-[36px] rounded-full bg-white flex items-center justify-center gap-2">
        <img src="/vector.png" alt="notification" />
        <p className="font-bold text-xs md:text-[17.03px] text-[#E66DFF]">
          Class 7 Math is starting in 1 hour, 34 minutes.
        </p>
      </div>
      <div className="w-[320px] h-[213px] md:w-[392px] md:h-[213px] bg-white rounded-[20px] flex flex-col items-center justify-center text-center gap-5 m-auto mt-3 ">
        <p className="font-bold text-xl md:text-2xl text-[#6669FE] leading-7 text-center px-5 md:px-12">
          You can join the live class 5 minutes before it starts. Please wait.
        </p>
        <button onClick={() => setModal(false)} className="px-5 py-1 bg-[#6669FE] font-bold text-sm rounded-full text-white ">
          Okay.
        </button>
      </div>
    </div>
  );
};

export default EarlyLiveClass;
