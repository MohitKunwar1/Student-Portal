"use client";
const Navbar = () => {
  return (
    <div className=" min-h-[98px] flex items-center justify-between bg-[#6669fe] text-white px-[20px] md:px-[50px]">
      <div className="logo h-full flex items-center flex-1">
        <img src="logo.png" alt="logo" className="w-[96.67px] h-[49.03px]" />
      </div>
      <div className="title h-full flex justify-center items-center flex-grow-0 md:flex-grow">
        <h1 className="text-center font-bold text-2xl md:text-4xl">Student Portal</h1>
      </div>
      <div className="student h-full flex-1  flex-col justify-center text-end hidden sm:flex">
        <div>
          <h2 className="font-semibold text-lg md:text-2xl">Hello, Gabrisa</h2>
          <span className="font-normal text-xs">Class 7, Math+Science</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
