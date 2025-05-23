import React, { useState } from "react";
import SalesManager from "../../assets/Teams/SalesManager.png";
import ChairMan from "../../assets/Teams/ChairMan.png";
import BranchManager from "../../assets/Teams/BranchManager.png";
import AreaHead from "../../assets/Teams/AreaHead.png";
import CreativeHead from "../../assets/Teams/CreativeHead.png";
import DigitalMarketingHead from "../../assets/Teams/DigitalMarketingHead.png";

function Teams() {
  const teamData = [
    {
      name: "Dharmendra Shukla",
      position: "Executive Chairman",
      image: ChairMan,
      description:
        "With 15+ years of experience in finance and loan departments, Dharmendra leads SD Finance with expert knowledge and strategic vision. He has been recognized and awarded by reputed institutions such as Kotak Bank, Axis Bank, Aditya Birla, Poonawalla Fincorp, Credit Saison, Tata Capital, and UGrow Capital.",
    },
    {
      name: "Dharmesh Shadwani",
      position: "Branch Manager",
      image: BranchManager,
      description:
        "Bringing 7 years of experience in finance, Dharmesh ensures smooth branch operations and excellent customer service.",
    },
    {
      name: "Shasi Mishra",
      position: "Sales Manager",
      image: SalesManager,
      description:
        "With 8 years of experience, Shasi drives sales growth and builds strong client relationships.",
    },
    {
      name: "Sanjay Yadav",
      position: "Area Head",
      image: AreaHead,
      description:
        "Sanjay has 5 years of experience, overseeing regional operations and business development.",
    },
    {
      name: "Shivakant Chaubey",
      position: "Digital Marketing Head",
      image: DigitalMarketingHead,
      description:
        "With 4 years of experience, Shivakant leads digital marketing initiatives to expand SD Finance’s online presence.",
    },
    {
      name: "Anuj Tiwari",
      position: "Creative Head",
      image: CreativeHead,
      description:
        "With 6 years of experience in the creative industry, Anuj specializes in brand strategies and design. He helps bring consistency and creativity to the brand in both direction and visual identity.",
    },
  ];

  const [expanded, setExpanded] = useState(Array(teamData.length).fill(false));

  const toggleReadMore = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8 px-4 max-w-6xl">
      <div className="inline-block bg-[#d6fbe4] text-[#1AD079] text-sm font-medium px-4 py-1 rounded mb-6">
        About Us
      </div>

      <div className="max-w-6xl pb-18">
        <h1 className="text-[#003274] text-5xl text-left font-bold">
          Our Achievements
        </h1>

        <div className="w-full pt-18 flex flex-wrap gap-[166px] lg:gap-x-[292px] xl:gap-x-[452px] gap-y-[98px] justify-start items-center">
          {teamData.map((data, i) => (
            <div key={i} className="relative">
              <div className="lg:h-[280px] lg:w-[250px] h-[220px] w-[160px] bg-[#109E73] rounded-[9.5px]"></div>

              <div className="lg:h-[280px] lg:w-[250px] h-[220px] w-[160px] bg-gray-200 rounded-[9.5px] absolute bottom-1 left-1 overflow-hidden">
                <img
                  src={data.image}
                  alt="Images"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="lg:h-[220px] lg:w-[300px] h-[full] w-[240px] bg-[#F4C520] rounded-[9.5px] absolute -bottom-18 left-[64%] p-4">
                <h3 className="font-bold text-[#000000] text-lg">{data.name}</h3>
                <p className="md:text-sm text-[8px] font-semibold mb-1">
                  {data.position}
                </p>
                <p className="text-sm text-[#333]">
                  {expanded[i]
                    ? data.description
                    : data.description.slice(0, 60) + "... "}
                  <button
                    onClick={() => toggleReadMore(i)}
                    className="text-blue-600 text-xs underline ml-1"
                  >
                    {expanded[i] ? "Read Less" : "Read More"}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
