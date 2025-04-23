import React from "react";
import { Link } from "react-router-dom";

function Working() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="animate-pulse bg-white rounded-lg shadow p-6">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
      <div className="bg-blue-600 text-white text-center p-4">
        <Link to="/">
          Content will be updated soon. Please check back later.
        </Link>
      </div>
    </div>
  );
}

export default Working;
