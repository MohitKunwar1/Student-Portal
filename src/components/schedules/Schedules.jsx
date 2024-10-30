"use client";
import { CiVideoOn } from "react-icons/ci";

const Schedules = ({setLiveClasses}) => {

  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-[#3A3A3A] font-bold text-xl md:text-3xl ">
        Your Class Schedule
      </h3>

      {/* HIDDEN FOR SMALLER SCREEN */}
      <div className="w-[394px] h-[328px] md:flex flex-col items-center justify-center gap-2 border-[1px] border-[#6669FE1A] bg-white rounded-3xl hidden">
        <ClassSchedule
          detail="Class 7, Science | Live Class"
          timing="Tuesday, 5:00 - 5:50 PM"
          days="Yesterday"
          click={() => setLiveClasses(true)}
        />
        <ClassSchedule
          detail="Class 7, Science | Live Class"
          timing="Tuesday, 6:30 - 7:15 PM"
          days="Today"
          style="bg-[#E66DFF] "
          textStyle="text-white"
          click={() => setLiveClasses(false)}
        />
        <ClassSchedule
          detail="Class 7, Science | Live Class"
          timing="Tuesday, 5 - 5:50 PM"
          days="Tomorrow"
          click={() => setLiveClasses(false)}
        />
        <ClassSchedule
          detail="Class 7, Science | Live Class"
          timing="Tuesday, 5 - 5:50 PM"
          days="23rd Sept.  2024"
          style="bg-[#FDF5FF]"
          textStyle="text-[#E66DFF]"
          click={() => setLiveClasses(false)}
        />
      </div>

      {/* HIDDEN FOR MEDIUM AND LARGE SCREEN */}
      <div className="md:hidden w-[320px] h-[166px] border-[1px] items-center justify-center gap-2 flex flex-col  border-[#6669FE1A] bg-[#FFFFFF] rounded-xl">
        <ClassSchedule
          detail="Class 7, Science | Live Class"
          timing="Tuesday, 5:00 - 5:50 PM"
          days="Yesterday"
          click={() => setLiveClasses(false)}

        />
        <ClassSchedule
          detail="Class 7, Science | Live Class"
          timing="Tuesday, 5:00 - 5:50 PM"
          days="Today"
          style="bg-[#FDF5FF]"
          textStyle="text-[#E66DFF]"
          click={() => setLiveClasses(true)}
        />
      </div>
    </section>
  );
};

export default Schedules;

const ClassSchedule = ({ detail, timing, days, style, textStyle, click }) => {
  return (
    <div
      onClick={click}
      className={`w-[296px] h-[57px] md:w-[354px] md:h-[60px]  rounded-md flex justify-center items-center md:gap-16 cursor-pointer ${
        style ? style : "bg-[#F2F2FF]"
      }`}
    >
      <div className="flex items-center justify-center gap-4">
        <div className="w-[28px] h-[25px] flex items-center justify-end ">
          <CiVideoOn
            className={`w-[20px] h-[20px] ${
              textStyle ? textStyle : "text-[#4749B3]"
            }`}
          />
        </div>
        <div className="w-[150px] h-[22px] md:w-[174px] md:h-[28px]  flex flex-col items-start justify-center">
          <p
            className={`text-[10px] md:text-xs font-light text-[#9899DF] ${
              textStyle ? textStyle : "text-[#9899DF]"
            }`}
          >
            {detail}
          </p>
          <span
            className={`font-semibold text-xs md:font-normal md:text-base text-[#4749B3] ${
              textStyle ? textStyle : "text-[#4749B3]"
            } `}
          >
            {timing}
          </span>
        </div>
      </div>
      <div className="w-[75px] flex items-center justify-center h-full">
        <p
          className={` font-normal text-[8px] md:text-[10px]  ${
            textStyle ? textStyle : "text-[#4749B3]"
          }`}
        >
          {days}
        </p>
      </div>
    </div>
  );
};
