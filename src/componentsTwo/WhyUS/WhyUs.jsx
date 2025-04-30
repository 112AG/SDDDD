import React from "react";
import Clipboard from "../../assets/svg/Clipboard.svg";
import Employee from "../../assets/svg/Employee.svg";
import Eye from "../../assets/svg/Eye.svg";
import Hand from "../../assets/svg/Hand.svg";
import Menu from "../../assets/svg/Menu.svg";
import Star from "../../assets/svg/Star.svg";

function WhyUs() {
  const loanFeatures = [
    {
      title: "Easy Process",
      description: "Fast application and approval with minimal paperwork.",
      icon: Hand,
    },
    {
      title: "Competitive Rates",
      description: "We offer some of the most affordable rates in the market.",
      icon: Star,
    },
    {
      title: "Flexible Terms",
      description: "Tailored loan solutions that fit your unique needs.",
      icon: Menu,
    },
    {
      title: "Expert Guidance",
      description:
        "We’re with you every step of the way, ensuring you make the best financial decision.",
      icon: Employee,
    },
    {
      title: "No Hidden Costs Or Fees",
      description: "Clear and transparent loan process with no hidden charges.",
      icon: Eye,
    },
    {
      title: "Customized Solutions",
      description: "Loan options tailored to your unique financial needs.",
      icon: Clipboard,
    },
  ];

  return (
    <div className="h-full w-full pt-10 pl-4 pr-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div
          className=" rounded-[34px] md:w-[77.03vw] w-full bg-white py-12 px-4 xl:px-0 sm:py-10 lg:py-14 "
          style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
        >
          <div className="flex flex-wrap justify-center xl:gap-16 gap-y-10 gap-4">
            {loanFeatures.map((feature, index) => (
              <div
                key={index}
                className="

                hover:scale-105
                transition-all
                duration-300
        relative
        bg-[#F4C520]
        text-black
        font-semibold
        px-6
        py-2
        rounded-md
        
        shadow-[2px_2px_0_#1AD079]
        active:shadow-none
        text-sm
        sm:text-base
        w-[256.7px]
        h-[146px]
        flex
        items-center
        justify-start
        pt-10
        flex-col
      "
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-[48px] w-[48px] absolute -top-6"
                />
                <h1 className="font-bold text-[20px] text-center leading-none text-[#003474]">
                  {feature.title}
                </h1>
                <p className="text-[12px] text-center font-medium py-1 leading-tight">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
