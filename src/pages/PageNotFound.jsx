import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-[86vh] w-full relative">
      <div className="flex h-full justify-around items-center">
        <div className="h-full w-[1.2px] bg-gray-300 relative">
          <div className="h-[54px] absolute w-[1.2px] bg-blue-400 top-[60%]"></div>
        </div>
        <div className="h-full w-[1.2px] bg-gray-300 relative">
          <div className="h-[34px] absolute w-[1.2px] bg-blue-600 top-[20%]"></div>
        </div>
        <div className="h-full w-[1.2px] bg-gray-300 relative">
          <div className="h-[24px] absolute w-[1.2px] bg-blue-400 top-[90%]"></div>
        </div>
        <div className="h-full w-[1.2px] bg-gray-300 relative">
          <div className="h-[74px] absolute w-[1.2px] bg-blue-500 top-[12%]"></div>
        </div>
      </div>
      <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 text-center space-y-4">
  <h1 className="text-7xl font-extrabold text-blue-600 animate-bounce">404</h1>
  <p className="text-5xl font-bold text-gray-600 tracking-wide">Page Not Found</p>
  <Link
    to="/"
    className="inline-block to-blue-900 text-blue px-6 py-2 rounded shadow-xl hover:shadow-md transition duration-300"
  >
    Go to Home
  </Link>
</div>

    </div>
  );
}

export default PageNotFound;
