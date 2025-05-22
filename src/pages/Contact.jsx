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
import FAQ2 from "../componentsTwo/FAQ2/FAQ2";
import HelpSection from "../componentsTwo/Help/HelpSection";
import HelpSection2 from "../componentsTwo/Help/HelpSection"

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

  const faqs = [
    { id: 1, question: 'What is the interest rate?', answer: 'Random text random text random text random text text random text.' },
    { id: 2, question: 'How fast can I get the money?', answer: 'You can receive your money within 24 hours after approval.' },
    { id: 3, question: 'Can I repay early?', answer: 'Yes, early repayment is allowed without any penalties.' },
    { id: 4, question: 'Is collateral needed?', answer: 'No collateral is required for most loan products.' },
  ];

  const [openId, setOpenId] = useState(1); // First item expanded by default

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-16 sm:gap-32 pb-12">
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
            className="absolute h-[80%] bottom-0 object-cover z-20"
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
      

      {/* 2: Get in Touch */}
      <div className="inline-block bg-[#1ad07839] text-[#1AD079] font-medium text-[18px] px-4 rounded">
        Get in Touch
      </div>

      {/* 3: Form */}
      <div className="relative max-w-6xl px-4 ">
        <div className="bg-[#003A78] rounded-[20px] max-w-6xl w-[100vw] sm:w-full xl:w-3xl 2xl:w-6xl mx-auto px-6 py-10 text-white shadow-lg relative z-40">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
          <p className="text-center text-green-400 mt-1 mb-8">
            We're Here to Help You Grow
          </p>

          <ContactUsForm />
        </div>
        <img
          src={TelephoneThree}
          alt=""
          className="absolute -left-30 -top-30 z-9 hidden lg:inline"
        />
        <img src={Dailer} alt="" className="absolute -right-60 bottom-0 hidden lg:inline" />
      </div>

      {/* 4:Help */}
<HelpSection/>
      {/* 5:FAQ */}
      <FAQ2/>



      {/* 6:Testimonial */}
      <section className="w-full md:py-8 px-4">
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
