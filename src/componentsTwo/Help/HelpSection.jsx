import React from "react";
import customerHelper2 from "../../assets/SDContact/customerHelper2.png";
import Call from "../../assets/SDContact/Call.png";
import Mail from "../../assets/SDContact/Mail.png";
import Browser from "../../assets/SDContact/Browser.png";
import Location from "../../assets/SDContact/Location.png";

const contactItems = [
  {
    icon: Call,
    title: "Call Us",
    value: "+91 0987654321",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sdfinancialofficial@gmail.com",
  },
  {
    icon: Browser,
    title: "Website",
    value: "sdfinance.in",
  },
  {
    icon: Location,
    title: "Address",
    value:
      "C-168/169, Emerald One, Jetalpur Road, Vadodara, Gujarat, India",
  },
];

const HelpSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Tag */}
        <div className="bg-[#1ad07839] text-[#1AD079] font-medium text-[16px] sm:text-[18px] px-4 py-1 rounded mb-26">
          Get Help
        </div>

        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row justify-between w-full items-center lg:items-start gap-10">
            {/* Right: Image Section */}
          <div className="w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[368px]">
          <div className="relative flex justify-center rounded-[20px] bg-[#023B75] h-[300px] w-[300px] sm:h-[368px] sm:w-[368px] sm:rounded-[28px]">
  <img
    src={customerHelper2}
    alt="Image"
    className="absolute bottom-0 h-[380px] sm:h-[466px] object-contain"
  />
</div>

          </div>

          {/* Left: Text Section */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <h1 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold text-[#002C6A] leading-tight">
              Need Help Preparing Your Documents?
            </h1>

            <p className="text-gray-700 text-sm sm:text-base mt-4 lg:mt-6 max-w-xl mx-auto lg:mx-0">
              We understand that paperwork can feel overwhelming especially when
              you're focused on running a business. That’s why our dedicated
              support team is here to guide you every step of the way.
            </p>

            <p className="text-[#003774] font-medium text-sm sm:text-base mt-3">
              Talk to Our Experts for{" "}
              <span className="text-blue-600">free documentation assistance.</span>
            </p>

            {/* Contact Info - Flex Layout (no grid) */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mt-6 gap-y-5">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 w-full sm:w-[48%]">
                  <img src={item.icon} alt={item.title} className="h-[36px] sm:h-[40px]" />
                  <div className="flex flex-col items-start">
                    <h4 className="font-semibold text-sm sm:text-base text-black">{item.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium text-left">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HelpSection;
