import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function TopHeader({ top, subHead }) {
  const textRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { text: "" },
      {
        text: subHead,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 100%", 
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  return (
    <div className="text-center ">
      <div className="inline-block bg-[#1ad07839] text-[#1AD079] font-medium text-[18px] px-4 py-1 rounded mb-4">
        {top}
      </div>
      <h2
        ref={textRef}
        className="text-3xl md:text-4xl font-extrabold text-[#002c6a] px-2"
      ></h2>
    </div>
  );
}

export default TopHeader;
