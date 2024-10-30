import React from 'react'
import { CiViewList } from 'react-icons/ci'

const NoLiveClasses = () => {
  return (
    <div className="w-[346px] h-[170px] bg-[#6F6F6F] border-[1px] border-[#6669FE1A] rounded-[20px] flex items-center justify-center text-white  cursor-pointer">
        <div className="w-[223px] flex flex-col items-center justify-center gap-3 ">
          <CiViewList className="w-[25.79px] h-[25.29px] " />
          <div>
            <h4 className="font-bold text-2xl  text-center">
            No Live Classes
            </h4>
            <p className=" font-normal text-xs text-center">
            You have no live classes scheduled for today.
            </p>
          </div>
        </div>
      </div>
  )
}

export default NoLiveClasses