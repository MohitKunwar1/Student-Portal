'use client'
import Annoucements from "@/components/annoucements/Annoucements";
import QuickLinks from "@/components/quickLinks/QuickLinks";
import Recordings from "@/components/recordings/Recordings";
import Navbar from "./Navbar";
import { useState } from "react";

const HeroSection = () => {
  const [liveClasses, setLiveClasses] = useState(false)
  return (
    <div className="min-h-screen bgImage">
      <Navbar />
      <main className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-5 md:space-y-0 md:space-x-5">
        <section className="flex-1 w-full md:w-auto flex  justify-end">
          <Annoucements setLiveClasses={setLiveClasses} liveClasses={liveClasses}/>
        </section>
        <section className="flex-1 w-full md:w-auto md:flex justify-center hidden">
          <QuickLinks setLiveClasses={setLiveClasses} liveClasses={liveClasses}/>
        </section>
        <section className="flex-1 w-full md:w-auto flex justify-center md:justify-start  ">
          <Recordings />
        </section>
        
      </main>
    </div>
  )
  
}

export default HeroSection