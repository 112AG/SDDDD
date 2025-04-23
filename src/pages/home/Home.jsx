import React, { useState } from "react";
import "./home.css";
import Decoration from "../../assets/homeAssets/Decoration.png";
import SDMan from "../../assets/homeAssets/SDMan.png";
import clientOne from "../../assets/homeAssets/client1.jpg";
import clientTwo from "../../assets/homeAssets/client2.jpg";
import clientThree from "../../assets/homeAssets/client3.jpg";
import TopHeader from "../../components/TopHeader";
import LoanTabs from "../../componentsTwo/LoanTabs/LoanTabs";
import Button from "../../components/Button";
import WhyUs from "../../componentsTwo/WhyUS/WhyUs";
import Award from "../../assets/homeAssets/Award.png";
import HowItWorks from "../../assets/homeAssets/HowItWorks.png";
import { awards } from "../../data/data";
import { steps } from "../../data/data";
import EMICalculator from "../../componentsTwo/EMI/EMICalculator";
import { partners } from "../../data/data";
import TestimonialSlider from "../../componentsTwo/testimonial/TestimonialSlider";
import { Link } from "react-router-dom";
import BlogPosts from "../../componentsTwo/Blog/BlogPosts";

function Home() {
  const [expandedStep, setExpandedStep] = useState(1);
  const toggleStep = (id) => {
    setExpandedStep((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#f6f8fb]">
      {/* Section One - Hero */}
      <div className="bg-[#013775] py-12">
        <div className="h-screen w-full max-w-6xl mx-auto  px-4 flex sm:flex-row flex-col-reverse justify-around">
          {/* Left block: Overlapping images */}
          <div className="w-[100%] h-full sm:w-[40%] relative flex items-center justify-center">
            {/* Decorative shape/rectangle */}
            <img
              src={Decoration}
              alt="linearRectangle"
              className="absolute bottom-0 h-[304px] sm:h-[300px] md:h-[350px] lg:h-[434px] 2xl:h-[589px]"
            />
            {/* SDMan image */}
            <img
              src={SDMan}
              alt="Our Employee"
              className="absolute bottom-0 h-[342px] sm:h-[340px] md:h-[394px] lg:h-[494px] 2xl:h-[669px]"
            />
          </div>

          {/* Right block: Text + button + clients label */}
          <div className="w-[100%] sm:w-[50%] md:w-[40%] sm:h-full flex flex-col items-start justify-center pt-4 sm:pt-0">
            <p className="text-[#1AD079] text-sm sm:text-base md:text-lg font-medium sm:pb-0 pb-1.5">
              Welcome to SD Financial Services
            </p>
            <h1 className="text-white text-[32px]  sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-none">
              Where <span className="text-[#F4C520]">Trust</span> Meets{" "}
              <span className="text-[#1AD079]">Financial</span> Excellence
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed py-1.5 sm:py-0">
              Simplifying Financial Solutions for Your Business, Home, and
              Health. At SD Financial Services, we provide a range of financial
              products tailored to help you manage and grow your business, buy
              your dream home, and protect your health. With a fast,
              transparent, and customer-centric approach, we’re here to make
              financing easier for you.
            </p>

            {/* Button and "Happy Clients" row */}
            <div className="flex items-center gap-5 pt-4">
              <Button btn="Contact Us" link="#" />

              <div className="flex items-center justify-start gap-[-20px]">
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full border-[2px] border-[#001f3f] overflow-hidden z-10">
                  <img
                    src={clientOne}
                    alt="Client 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full border-[2px] border-[#001f3f] overflow-hidden z-20 -ml-4">
                  <img
                    src={clientTwo}
                    alt="Client 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full border-[2px] border-[#001f3f] overflow-hidden z-30 -ml-4">
                  <img
                    src={clientThree}
                    alt="Client 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col text-white font-bold">
                <span className="text-xl sm:text-2xl lg:text-3xl">50K+</span>
                <span className="text-[12px] text-gray-300 sm:text-base lg:text-lg font-normal">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Two - Services */}
      <div className="w-full py-8 md:py-12">
        <TopHeader top={"Who we are"} subHead="Our Main Service" />
        <LoanTabs />
      </div>

      {/* Section Three - Why Us */}
      <div className="py-8 md:py-12">
        <TopHeader top={"Why us"} subHead="Why SD Financs?" />
        <WhyUs />
      </div>

      {/* Section Four - Achievements */}
      <div className="py-8 md:py-12">
        <TopHeader
          top={"Achievements"}
          subHead="Our Achievements & Certificates"
        />
        <p className="text-center px-4 py-4 text-base md:text-lg pb-8 md:pb-10">
          Recognized for excellence, innovation, and trusted financial
          solutions.
        </p>

        <section className="bg-[#003c71] py-8 md:py-10 px-4 flex flex-wrap justify-center gap-6 md:gap-10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="text-center w-[130px] sm:w-[148px] text-white flex flex-col items-center"
            >
              <img 
                src={Award} 
                alt="Awards" 
                className="h-[90px] sm:h-[112px] mb-2" 
              />
              <div className="font-semibold text-base sm:text-lg leading-tight">
                {award.title}
                <br />
                {award.subtitle}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Section Five - How it works */}
      <div className="py-8 md:py-12">
        <div className="pb-6 md:pb-10">
          <TopHeader top={"Process"} subHead="How it works" />
        </div>

        <div className="flex flex-col md:flex-row max-w-5xl mx-auto items-center md:items-start justify-between p-4 w-full gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-5/12 mb-8 md:mb-0">
            <div className="rounded-[34px] overflow-hidden">
              <img
                src={HowItWorks}
                alt="How It Works"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="w-full md:w-7/12 lg:w-6/12 pt-0 md:pt-2">
            {steps.map((step) => (
              <div
                className="mb-4 md:mb-6 p-4 md:p-6 bg-white rounded-[24px] md:rounded-[34px]"
                style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
                key={step.id}
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex items-center justify-between mb-1 cursor-pointer">
                  <h3 className="font-semibold text-sm md:text-base">
                    {step.id}. {step.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <i
                      className={`ri-arrow-${
                        expandedStep === step.id ? "down" : "left"
                      }-s-line ${
                        expandedStep === step.id
                          ? "text-white bg-[#1AD079]"
                          : "bg-white text-[#1AD079]"
                      } border border-[#1AD079] h-[24px] w-[24px] flex items-center justify-center text-xl rounded-full transition-all duration-300`}
                    />
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedStep === step.id
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-xs md:text-sm p-2 md:p-3 rounded">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Six - EMI Calculator */}
      <div className="py-8 md:py-12">
        <EMICalculator />
      </div>

      {/* Section Seven - Partners */}
      <div className="py-8 md:py-12">
        <TopHeader
          top={"Partners"}
          subHead="Trusted by Companies and Partners"
        />
        <div className="py-6 md:py-10 px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {partners.map((bank, index) => (
              <div
                key={index}
                className="bg-white flex items-center justify-center p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="max-h-6 sm:max-h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Eight - Testimonials */}
      <div className="py-8 md:py-12">
        <TopHeader
          top={"Testimonials"}
          subHead={`Happy Clients with Appropriate Financing`}
        />
        <p className="text-center px-4 py-3 md:py-4 text-base md:text-lg pb-6 md:pb-10 text-[#7F7F8C]">
          Experience and quality guaranteed modern production <br className="hidden sm:block" />
          plant and state-of-the-art.
        </p>

        <TestimonialSlider />
      </div>

      {/* Section Nine - Blog Posts */}
      <div className="py-8 md:py-12">
        <BlogPosts />
      </div>

      {/* Section Ten - CTA */}
      <div className="py-8 md:py-12 px-4">
        <div className="bg-[#003366] text-white rounded-xl md:rounded-2xl px-4 sm:px-6 py-8 md:py-12 max-w-4xl mx-auto text-center relative overflow-hidden">
          <p className="absolute top-3 left-4 md:left-6 font-semibold text-[#1D4ED8] text-sm md:text-base">Register</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-xl mx-auto mb-5 md:mb-6 px-2">
            Ready to apply or have questions? Our team of experts is here to
            help. Reach out to us today to get personalized financial solutions.
          </p>
          <Link
            to="/contact"
            className="
              relative
              inline-block
              bg-[#F4C520]
              text-black
              font-semibold
              px-4
              sm:px-5
              py-2
              rounded-md
              shadow-[-2px_2px_0_#1AD079]
              hover:shadow-[-1px_1px_0_#1AD079]
              active:shadow-none
              transition-all
              text-sm
              sm:text-base
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;