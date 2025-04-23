import React from "react";

function TopHeader({ top, subHead }) {
  return (
    <div className="text-center pt-10">
      <div className="inline-block bg-[#1ad07839] text-[#1AD079] font-medium text-[18px] px-4 py-1 rounded mb-4">
       {top}
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#002c6a]">
       {subHead}
      </h2>
    </div>
  );
}

export default TopHeader;
