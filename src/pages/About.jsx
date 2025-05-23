import React from "react";
import Icon from "../assets/SDFinanceServices/Icon.png";
import Icon2 from "../assets/SDFinanceServices/Icon2.png";
import Ornament from "../assets/SDFinanceServices/Ornament.png";
import SDFinanceBanner from "../assets/AboutUs/SDFinanceBanner.svg";
import SDFinanceLogo from "../assets/AboutUs/SDFinanceLogo.png";
import SDFinanceOffice from "../assets/AboutUs/SDFInance-Office.png";
import CrossArrow from "../assets/AboutUs/CrossArrow.png";
import SDAchivements from "../assets/AboutUs/SDAchivements.png";
import Location from "../assets/AboutUs/Location.svg";
import Partners from "../componentsTwo/Partners/Partners";
import Galary from "../componentsTwo/Galaries/Galary";
import TopHeader from "../components/TopHeader";
import Teams from "../componentsTwo/Teams/Teams";

function About() {
  const timelineData = [
    {
      year: "2020",
      title: "2020",
      description:
        "Company started and served 300 customers with financial solutions.",
      date: "07 June 2020",
      icon: "CrossArrow",
    },
    {
      year: "2021",
      title: "2021",
      description:
        "Growth continued with 900 customers availing various loans.",
      date: "07 June 2021",
      icon: "CrossArrow",
    },
    {
      year: "2023",
      title: "2023",
      description:
        "Expanded reach with 1,500 customers benefiting from our flexible loan options.",
      date: "07 June 2023",
      icon: "CrossArrow",
    },
    {
      year: "2024",
      title: "2024",
      description:
        "Served over 2,000 customers, strengthening partnerships and services.",
      date: "07 June 2024",
      icon: "CrossArrow",
    },
    {
      year: "2025",
      title: "2025 - Now",
      description:
        "Continuing to grow rapidly, with 2,500+ satisfied customers relying on SD Finance for their financial needs.",
      date: "07 June 2024",
      icon: "CrossArrow",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experiences" },
    { value: "3450", label: "Loans Approved" },
    { value: "52", label: "Business Partners" },
    { value: "1754", label: "Happy Customers" },
  ];



  const OurLocations = [
    {
      branch: "Vadodara Branch",
      address:
        "C-168/169, Emerald One, B/s. Gujarat Kidney Hospital, Jetalpur Road, Vadodara, Gujarat, India",
    },
    {
      branch: "Mumbai Branch",
      address:
        "C-168/169, Emerald One, B/s. Gujarat Kidney Hospital, Jetalpur Road, Vadodara, Gujarat, India",
    },
    {
      branch: "Ahmedabad Branch",
      address: "Coming Soon",
    },
  ];

  return (
    <div className="w-full bg-[#f6f8fb] flex flex-col items-center justify-center gap-16 sm:gap-32 pb-12">
      {/* Top Hero Section */}
      <div className="h-[80vh] w-full sm:h-screen relative overflow-hidden">
        <img
          src={SDFinanceLogo}
          alt="About Us Banner"
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        <div className="w-full px-4 sm:w-[80%] md:w-[70%]  max-w-6xl mx-auto flex flex-col items-center justify-center h-full relative">
          <img src={Ornament} alt="Light" className="absolute top-[14%]" />

          <img
            src={Icon2}
            alt="Icon"
            className="hidden sm:block h-[100px] w-[100px] absolute right-0 top-[22%]"
          />

          <img
            src={Icon}
            alt="Icon"
            className="hidden sm:block h-[100px] w-[100px] absolute -left-[14%] top-[62%]"
          />
        </div>
      </div>

      {/* About Company Section */}
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8 px-4 max-w-6xl">
        <div className="inline-block bg-[#d6fbe4] text-[#1AD079] text-sm font-medium px-4 py-1 rounded mb-6">
          About Us
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row items-start gap-12 w-full">
          <div className="w-full lg:w-1/2 h-[550px] rounded-[28px] overflow-hidden">
            <img
              src={SDFinanceOffice}
              alt="SDFinance Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-6">
            <div>
              <h1 className="text-[#003274] text-5xl font-bold text-center">
                About Us
              </h1>
              <p className="py-4 text-[#5F5F5F] leading-6 text-[18px]">
                SD Finance is dedicated to providing fast, transparent, and
                customer-centric financial products designed to help you grow
                your business, buy your dream home, and protect your health. We
                offer flexible loan options with minimal documentation and
                competitive interest rates to suit your needs.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl">Vision</h2>
              <p className="py-4 text-[#5F5F5F] leading-6 text-[18px]">
                To be the most trusted and customer-focused financial partner,
                enabling individuals and businesses to achieve their dreams with
                ease and confidence.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-xl">Mission</h2>
              <p className="py-4 text-[#5F5F5F] leading-6 text-[18px]">
                To deliver innovative, accessible, and affordable financial
                solutions backed by expert advice, helping our clients unlock
                their potential and secure a better future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8 px-4 max-w-6xl w-full">
        <div className="inline-block bg-[#d6fbe4] text-[#1AD079] text-sm font-medium px-4 py-1 rounded mb-6">
          About Us
        </div>

        <div className="w-full">
          <h1 className="text-[#003274] text-5xl text-center md:text-left font-bold mb-12">
            About Company
          </h1>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="py-6 rounded-lg w-full max-w-[100%] sm:max-w-md flex flex-col  justify-between"
              >
                {/* Icon Circle */}
                <div className="h-12 w-12 rounded-full bg-[#003274] flex items-center justify-center mb-4">
                  <img
                    src={CrossArrow}
                    alt="Icon"
                    className="h-6 w-6 object-contain"
                  />
                </div>

                {/* Year */}
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-[#5f5f5f] text-base mb-4">
                  {item.description}
                </p>

                {/* Date and progress */}
                <div className="text-[#5f5f5f] text-sm mb-2">{item.date}</div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#FFD500]"></div>
                  <div className="h-[1px] w-full bg-[#d9d9d9]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achivements Section */}
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8 px-4 max-w-6xl">
        <div className="inline-block bg-[#d6fbe4] text-[#1AD079] text-sm font-medium px-4 py-1 rounded mb-6">
          About Us
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row items-start gap-12 w-full">
          <div className="w-full lg:w-1/2 h-[550px] rounded-[28px] overflow-hidden">
            <img
              src={SDAchivements}
              alt="SDFinance Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-3 md:gap-6">
            <div>
              <h1 className="text-[#003274] text-4xl sm:text-5xl font-bold text-center">
                Our Achivements
              </h1>
              <p className="py-4 text-[#5F5F5F] leading-6 text-[18px]">
                At SD Finance, every achievement is a testament to our
                commitment to empowering individuals and businesses through
                accessible and innovative financial solutions. Here's a look at
                the key milestones that reflect our growth, values, and
                customer-centric mission.
              </p>
              <p className="pb-4 text-[#5F5F5F] leading-6 text-[18px]">
                Since our inception in 2020, SD Finance has steadily grown to
                become a trusted financial partner for thousands of clients
                across the region.
              </p>
            </div>

            <div className="w-full bg-[#f6f8fb] py-6 px-4">
              <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-start gap-1">
                    <h2 className="text-5xl font-bold text-[#1a1a1a]">
                      {stat.value}
                    </h2>
                    <p className="text-[#5f5f5f] font-semibold mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Management Section */}
      <Teams/>

      {/* Our Branches  */}
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="inline-block bg-[#d6fbe4] text-[#1AD079] text-sm font-medium px-4 py-1 rounded mb-6">
          Branches
        </div>
        <h1 className="text-[#003274] text-4xl sm:text-5xl text-left font-bold">
          Our Branches
        </h1>
        <p className="py-4 text-[#5F5F5F] leading-6 text-center text-[18px]">
          At SD Finance, we are committed to making financial solutions easily
          accessible to individuals and businesses across India. To serve our
          growing customer base better, we have established branches in key
          cities, ensuring that we are always close to you, providing quick
          approvals, competitive rates, and expert guidance.
        </p>
        <div className="flex justify-center gap-4 sm:justify-between flex-wrap px-4 w-full pt-12">
          {OurLocations.map((location, index) => (
            <div
              key={index}
              className="
          w-[300px]
          relative
          bg-[#F4C520]
          text-black
          font-semibold
          px-6
          py-3
          hover:scale-105
          rounded-md
          shadow-[3px_3px_0_#119D73]
          hover:shadow-[4px_4px_0_#119D73]
          active:shadow-none
          transition-all
          lg:text-sm
          text-[12px]
          whitespace-break-spaces
        "
            >
              <div className="flex justify-center mb-4">
                <img
                  src={Location}
                  alt="Location Icon"
                  className="w-22 h-22 object-contain"
                />
              </div>
              <h2 className="text-center font-bold text-lg text-black mb-2">
                {location.branch}
              </h2>
              <p className="text-center text-sm text-[#867E2D] leading-relaxed">
                {location.address}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Companies */}
      <Partners />

      {/* Gallaries */}
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-12 px-4">
              <TopHeader top="Gallary" subHead="Our Gallaries" />
              <Galary/>
      </div>
    </div>
  );
}

export default About;
