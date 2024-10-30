"use client";

const VideoPlayer = ({ setModal }) => {
  return (
    <section className="relative h-screen w-full flex flex-col  items-center justify-center">
      <div className="absolute top-20  w-[1119px] h-[126px] bg-[#4749B3]  rounded-[28px] flex justify-center  cursor-pointer">
        <div className=" text-center py-3 ">
          <p className="font-light text-base text-white ">Class 7 Science</p>
          <p className="text-white font-bold text-xl leading-4">
            Fundamentals of Organic Chemistry
          </p>
        </div>
        <div className="absolute mb-24 w-[46px] h-[46px] top-[13%] right-5 cursor-pointer">
          <img src="/close-circle.png" alt="closecircle" onClick={() => setModal(false)}/>
        </div>
      </div>
      <div className="absolute z-10 mt-12  w-[1120px] h-[630px] rounded-[28px] border-[0.5px] border-[#E66DFF] overflow-hidden cursor-pointer">
        <div className="relative w-full h-full bg-bgImage bg-center bg-cover top-0 right-0 ">
          <div className="absolute w-full h-[115.5px] bottom-0 bgGred">
            <div className="h-1/2 w-full flex items-center justify-end ">
              <img src="/time.png" alt="time" className="mr-7" />
            </div>
            <div className="h-1/2 w-full ">
              <img src="Group 2.png" alt="timeline" className="mx-7" />
              <div className="h-full flex items-center justify-between mx-10">
                <div className="w-[91px] h-[25px] flex items-center justify-between ">
                  <img src="/play.png" alt="play" />
                  <img src="/backward-15-seconds.png" alt="play" />
                  <img src="/forward-15-seconds.png" alt="play" />
                </div>
                <div className="h-[25px] w-[55px] flex items-center justify-between ">
                  <img src="volume-cross.png" alt="volume" />
                  <img src="frame.png" alt="frame" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
