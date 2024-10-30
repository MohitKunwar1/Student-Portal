import React from 'react'
import { CiViewList } from 'react-icons/ci'

const NoLiveClasses = () => {
  return (
    <div className=" w-full h-[64px] md:h-[170px] bg-[#6F6F6F] rounded-lg md:rounded-3xl md:flex md:items-center md:justify-center  text-white hover:bg-white hover:text-[#6F6F6F] transition-all duration-500 cursor-pointer">
      <div className="w-full md:w-[223px] flex md:flex-col items-center gap-6 md:justify-center md:gap-3">
        <CiViewList className="hidden md:block md:w-[25.79px] md:h-[25.29px]" />
        <div className="w-[68px] h-[64px] bg-[#7b7b7b] rounded-lg flex items-center justify-center md:hidden">
          <CiViewList className="w-[36px] h-[36px] md:w-[25.79px] md:h-[25.29px]" />
        </div>
        <div>
          <h4 className="font-bold text-xl md:text-2xl text-center">
            No Live Classes
          </h4>
          <p className="hidden md:block font-normal text-xs text-center">
            You have no live classes scheduled for today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoLiveClasses