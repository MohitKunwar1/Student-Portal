"use client";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import Schedules from "../schedules/Schedules";
import QuickLinks from "../quickLinks/QuickLinks";

const Annoucements = () => {
  return (
    <div className=" min-h-full flex flex-col gap-3 md:items-start items-center justify-center mx-auto md:mx-0">
      <h3 className="text-[#3A3A3A] font-bold text-xl md:text-3xl mr-36 ">
        Announcements
      </h3>
      <div className="relative bg-white w-[320px] h-[74px] md:w-[395px] md:h-[144px] flex flex-col items-center justify-center gap-2 rounded-xl md:rounded-3xl border-[1px] border-[#6669FE1A]">
        <div className="absolute md:static  w-[296px] h-[42px] md:w-[355px] md:h-[42px] px-[40px] bg-[#F8F8F8] flex  items-center gap-3 rounded md:rounded-sm">
          <MdOutlineWbSunny className="w-[24px] h-[24px] text-[#4749B3]" />
          <p className=" font-light md:font-normal text-[10px] md:text-xs text-[#4749B3]">
            On account of Independence Day, August 15th will be a holiday.
          </p>
        </div>
        <div className="w-[296px] h-[42px] md:w-[355px] md:h-[42px] px-[40px] bg-[#F8F8F8] flex items-center gap-3 rounded md:rounded-sm">
          <LuClipboardList className="w-[24px] h-[24px] text-[#4749B3]" />
          <p className="font-light md:font-normal text-[10px] md:text-xs text-[#4749B3]">
            Reminder to finish your assignments and submit them by Monday.
          </p>
        </div>
        <div className="absolute w-[20px] h-[4px] flex justify-between bottom-1 md:hidden">
          <div className="w-[4px] h-[4px] rounded-full bg-[#4749B3]"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#D9D9D9]"></div>
          <div className="w-[4px] h-[4px] rounded-full bg-[#D9D9D9]"></div>
        </div>
      </div>
      <div className=" md:hidden mt-2">
      <QuickLinks /> 
      </div>
      <div className="mt-5 md:mt-0">
      <Schedules />
      </div>
    </div>
  );
};

export default Annoucements;
