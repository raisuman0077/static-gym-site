"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Set playback speed to 0.5x
    }
  }, []);

  return (
    <div className="grid-cols-2 flex flex-col">
      <div className="h-[92dvh] w-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="relative h-full w-full object-cover -mb-25"
        >
          <source src="video/gym-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <p className="sm:text-6xl  font-bold uppercase mix-blend-luminosity">
            Rogue Iron Gym
          </p>
          <div className="font-serif font-large">
            &quot;Break Chains. Lift Heavy. Stay Rogue&quot;
          </div>
        </div>
      </div>
      {/* <div className="relative flex-1 w-full grid grid-cols-3 gap-6  justify-center">
        <div className="text-white ">
          <div>Facilities</div>
        </div>
        <div className="text-white ">
          <div>Facilities</div>
        </div>
        <div className="text-white ">
          <div>Facilities</div>
        </div>
      </div> */}
    </div>
  );
}
