import React, { useState } from "react";
import Ornament from "../assets/SDContact/Ornament.png";
import Icon from "../assets/SDContact/Icon.png";
import Icon2 from "../assets/SDContact/Icon2.png";
import OurHelpers from "../assets/SDContact/OurHelpers.png";
import TelephoneOne from '../assets/SDContact/TelephoneOne.png';
import TelephoneTwo from "../assets/SDContact/TelephoneTwo.png";
import ContactUsForm from "../componentsTwo/ContactUsForm";
import TelephoneThree from "../assets/SDContact/TelephoneThree.svg";
import Dailer from "../assets/SDContact/Dailer.svg";
import customerHelper2 from "../assets/SDContact/customerHelper2.png";
import Call from "../assets/SDContact/Call.png";
import Browser from "../assets/SDContact/Browser.png";
import Location from "../assets/SDContact/Location.png";
import Mail from "../assets/SDContact/Mail.png";
import TopHeader from "../components/TopHeader";
import TestimonialSlider from "../componentsTwo/testimonial/TestimonialSlider";

function Contact() {
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
      title: "Adress",
      value: "C-168/169, Emerald One, Jetalpur Road, Vadodara, Gujarat, India",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-17">
      {/* 1-Hero Section */}
      <div className="h-[80vh] w-full sm:h-screen bg-[#023B75] text-white relative">
        <div className="w-full px-4 sm:w-[80%] md:w-[60%] max-w-6xl mx-auto flex flex-col items-center justify-center h-full relative">
          <img src={Ornament} alt="Light" className="absolute" />
          <img
            src={Icon2}
            alt="Icon"
            className="hidden sm:block h-[120px] w-[120px] absolute -left-[16%] top-[42%]"
          />
          <img
            src={Icon}
            alt="Icon"
            className="hidden sm:block h-[120px] w-[120px] absolute left-[92%] top-[82%]"
          />

          <img
            src={OurHelpers}
            alt="OurHelpers"
            className="absolute h-[80%] bottom-0"
          />
        </div>

        <img
          src={TelephoneOne}
          alt="TelePhone"
          className="absolute right right-0 top-[24%] w-[22%]"
        />
        <img
          src={TelephoneTwo}
          alt="TelePhone"
          className="absolute right left-0 bottom-0 w-[26%]"
        />
      </div>

      {/* 2: Getr in Touch */}
      <div className="inline-block bg-[#1ad07839] text-[#1AD079] font-medium text-[18px] px-4 py-1 rounded mb-4">
        Get in Touch
      </div>
      {/* 3: Form */}
      <div className="relative max-w-6xl">
        <div className="bg-[#003A78] rounded-[20px] max-w-6xl xl:w-3xl 2xl:w-6xl mx-auto px-6 py-10 text-white shadow-lg relative z-40">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
          <p className="text-center text-green-400 mt-1 mb-8">
            We're Here to Help You Grow
          </p>

          <ContactUsForm />
        </div>
        <img
          src={TelephoneThree}
          alt=""
          className="absolute -left-30 -top-30 z-9"
        />
        <img src={Dailer} alt="" className="absolute -right-60 bottom-0" />
      </div>

      {/* 4:Help */}
      <div className="max-w-6xl flex flex-col items-center justify-center">
        <div className="inline-block bg-[#1ad07839] text-[#1AD079] font-medium text-[18px] px-4 py-1 rounded mb-4">
          Get Help
        </div>

        <div className="w-full flex pt-22 justify-between">
          <div className="w-[35%]">
          <div className="h-[368px] w-[368px] bg-[#023B75] rounded-[28px] relative flex justify-center">
            <img src={customerHelper2} alt="Image" className="absolute bottom-0 h-[466px]"/>
          </div>
        </div>

          <div className="w-[55%]">
            <h1 className="text-xl sm:text-2xl md:text-[38px] lg:text-[48px] font-bold text-[#002c6a] ">
              Need help preparing your documents?
            </h1>
            <p className="pt-1 sm:pt-2 md:pt-3 max-w-[90%] mx-auto lg:mx-0 lg:max-w-[80%]">
              We understand that paperwork can feel overwhelming especially when
              you're focused on running a business. That’s why our dedicated
              support team is here to guide you every step of the way.
            </p>
            <p className="py-1 md:py-2 lg:py-3 text-[#003774]">
              Talk to Our Experts for free documentation assistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <img src={item.icon} alt="" className="h-[36px]" />
                  <div>
                    <h4 className="font-semibold text-black">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] font-semibold">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5:FAQ */}


      {/* 6:Testimonial */}
      <section className="w-full py-4 md:py-8 lg:py-12 px-4 sm:px-0">
        <TopHeader
          top="Testimonials"
          subHead="Happy Clients with Appropriate Financing"
        />
        <p className="text-center text-[#7F7F8C] text-lg mt-4 mb-4 md:mb-8 pt-4 sm:pt-0 ">
          Hear how we’ve helped clients achieve their dreams with the right
          financial solutions.
        </p>
        <TestimonialSlider />
      </section>

    </div>
  );
}

export default Contact;
