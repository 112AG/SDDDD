import React, { useState } from "react";
import TopHeader from "../../components/TopHeader";
import { partners } from "../../data/data";

function Partners() {
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 10; // Number of items to show initially

  const displayedPartners = showAll ? partners : partners.slice(0, VISIBLE_COUNT);

  return (
    <section className="w-full">
      <TopHeader top="Partners" subHead="Trusted by Companies and Partners" />
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10 px-4 xl:px-0">
        {displayedPartners.map((partner, index) => (
          <div
            key={index}
            className="bg-white py-3 px-0 md:p-4 rounded-lg flex justify-center items-center shadow hover:shadow-md transition"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-10 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {partners.length > VISIBLE_COUNT && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
          
                className="
              relative
              bg-[#F4C520]
              text-black
              font-semibold
              px-6
              py-3
              rounded-md
              shadow-[-3px_3px_0_#1AD079]
              hover:shadow-[-2px_2px_0_#1AD079]
              active:shadow-none
              transition-all
              lg:text-sm
              text-[12px]
              whitespace-nowrap
            "
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Partners;
