import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import Decoration from "../../assets/homeAssets/Decoration.png";
import SDMan from "../../assets/homeAssets/SDMan.png";
import clientOne from "../../assets/homeAssets/client1.jpg";
import clientTwo from "../../assets/homeAssets/client2.jpg";
import clientThree from "../../assets/homeAssets/client3.jpg";
import Award from "../../assets/homeAssets/Award.png";
import HowItWorks from "../../assets/homeAssets/HowItWorks.png";

import TopHeader from "../../components/TopHeader";
import LoanTabs from "../../componentsTwo/LoanTabs/LoanTabs";
import WhyUs from "../../componentsTwo/WhyUS/WhyUs";
import EMICalculator from "../../componentsTwo/EMI/EMICalculator";
import TestimonialSlider from "../../componentsTwo/testimonial/TestimonialSlider";
import BlogPosts from "../../componentsTwo/Blog/BlogPosts";
import { awards, steps, partners } from "../../data/data";

// GSAP
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

function Home() {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP);

  const container = useRef();
  const leftSectionRef = useRef();
  const rightSectionRef = useRef();
  const textRef = useRef();
  const avatarsRef = useRef([]);
  const numberRef = useRef(null);

  useGSAP(() => {
    // Hero Section Animation Left and right------------------------
    gsap.fromTo(
      [leftSectionRef.current, rightSectionRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      }
    );

    // Text Animation
    const text = "Welcome to SD Financial Services";
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });
    tl.to(textRef.current, {
      duration: 3,
      delay: 2,
      text: text,
      ease: "power2.inOut",
    });

    // Avatar Animation
    gsap.set(avatarsRef.current, { scale: 0, opacity: 0 }); // initial state
    gsap.to(avatarsRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 2,
      stagger: 0.8,
    });

    // Number Animation
    const obj = { val: 0 };
    gsap.to(obj, {
      val: 50,
      duration: 5,
      delay: 2,
      onUpdate: () => {
        numberRef.current.innerText = `${Math.floor(obj.val)}K+`;
      },
    });

    //
  }, []);

  const [expandedStep, setExpandedStep] = useState(1);

  const toggleStep = (id) => {
    setExpandedStep((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#f6f8fb]">
      {/* Section 1: Hero ✅*/}
      <div className="w-full bg-[#003274] overflow-hidden">
        <div
          ref={container}
          className="pt-24 w-full flex items-center sm:flex-row flex-col-reverse gap-4 mx-auto justify-around max-w-6xl xl:max-w-[84vw] 2xl:max-w-[1460px] px-4 md:px-6"
        >
          {/* left */}
          <div
            ref={leftSectionRef}
            className="relative flex items-center justify-center h-[532px]"
          >
            <img
              src={SDMan}
              alt="EMP"
              className="absolute bottom-0 object-cover h-[522px]"
            />
            <img src={Decoration} alt="BG" className="h-[368px] w-[364px]" />
          </div>
          {/* RIght */}
          <div
            ref={rightSectionRef}
            className="w-[100%] sm:w-[50%] md:w-[40%] sm:h-full flex flex-col items-start justify-center pt-4 sm:pt-0"
          >
            <p
              ref={textRef}
              className="text-[#1AD079] text-sm sm:text-base md:text-lg font-medium  h-[28px]"
            ></p>
            <h1 className="text-white text-[32px] sm:text-[36px]  lg:text-[44px] font-bold leading-tight sm:leading-[42px] md:leading-[52px]">
              Where <span className="text-[#F4C520]">Trust</span> Meets{" "}
              <span className="text-[#1AD079]">Financial</span> Excellence
            </h1>
            <p className="text-white opacity-[60%] text-[11px] sm:text-[13px] md:text-[15px] leading-tight pt-4">
              Simplifying Financial Solutions for Your Business, Home, and
              Health. At SD Financial Services, we provide a range of financial
              products tailored to help you manage and grow your business, buy
              your dream home, and protect your health. With a fast,
              transparent, and customer-centric approach, we’re here to make
              financing easier for you.
            </p>

            {/* Button and "Happy Clients" row */}
            <div className="flex items-center gap-5 pt-4 cursor-pointer">
              <Link
              to='/contact'
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
                Contact Us
              </Link>

              <div className="flex items-center justify-start">
                {[clientOne, clientTwo, clientThree].map((img, i) => (
                  <div
                    key={i}
                    ref={(el) => (avatarsRef.current[i] = el)}
                    className={`w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full border-[2px] border-[#001f3f] overflow-hidden z-[${
                      30 - i * 10
                    }] ${i > 0 ? "-ml-4" : ""}`}
                  >
                    <img
                      src={img}
                      alt={`Client ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col text-white font-bold">
                <span
                  ref={numberRef}
                  className="text-xl sm:text-2xl lg:text-3xl"
                >
                  0
                </span>{" "}
                <span className="md:text-[12px] text-gray-300 sm:text-base lg:text-lg font-normal">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Loan Tabs ✅*/}
      <section className="w-full py-8 md:py-11 ">
        <TopHeader top="Who we are" subHead="Our Main Service" />
        <LoanTabs />
      </section>

      {/* Section 3: Why Us */}
      <section className="w-full">
        <TopHeader top="Why us" subHead="Why SD Financials?" />
        <WhyUs />
      </section>

      {/* Section 4: Achievements */}
      <section className="w-full sm:py-6 py-4 ">
        <TopHeader
          top="Achievements"
          subHead="Our Achievements & Certificates"
        />
        <p className="text-center text-black text-lg mt-4 mb-10 px-4 pt-4 sm:pt-0">
          Recognized for excellence, innovation, and trusted financial
          solutions.
        </p>
        <div className="h-full w-full bg-[#003274] py-12">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center sm:justify-between gap-16 sm:gap-16 xl:px-0 px-4">
            {awards.map((award, index) => (
              <div key={index} className="text-center text-white w-[140px]">
                <img src={Award} alt="Award" className="h-24 mx-auto mb-2" />
                <h4 className="font-semibold leading-tight">
                  {award.title}
                  <br />
                  {award.subtitle}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="w-full py-12">
        <TopHeader top="Process" subHead="How it works" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 xl:px-0 mt-10">
          {/* Image */}
          <div className="md:w-5/12">
            <img
              className="h-full w-full object-cover rounded-3xl"
              src={HowItWorks}
              alt="How It Works"
            />
          </div>
          {/* Steps */}
          <div className="w-full md:w-7/12">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl p-6 mb-4 cursor-pointer shadow-md"
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    {step.id}. {step.title}
                  </h3>
                  <div
                    className={`flex items-center justify-center h-[20px] w-[20px] border border-[#1AD079] rounded-full ${
                      expandedStep === step.id
                        ? "bg-[#1AD079] text-white"
                        : "text-[#1AD079] bg-white"
                    }`}
                  >
                    <i
                      className={`ri-arrow-${
                        expandedStep === step.id ? "down" : "left"
                      }-s-line text-xl`}
                    />
                  </div>
                </div>
                <div
                  className={`transition-all overflow-hidden ${
                    expandedStep === step.id ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: EMI Calculator */}
      <section className="w-full sm:py-12 xl:px-0 px-4">
        <EMICalculator />
      </section>

      {/* Section 7: Partners */}
      <section className="w-full py-12">
        <TopHeader top="Partners" subHead="Trusted by Companies and Partners" />
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10 px-4 xl:px-0">
          {partners.map((partner, index) => (
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
      </section>

      {/* Section 8: Testimonials */}
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

      {/* Section 9: Blog */}
      <section className="w-full md:py-12">
        <BlogPosts />
      </section>

      {/* Section 10: CTA */}
      <section className="py-12 px-4">
        <div className="bg-[#003366] text-white rounded-2xl py-18 text-center relative overflow-hidden max-w-6xl mx-auto px-4">
          {/* <p className="absolute top-4 left-4 text-[#1D4ED8] font-semibold">
            Register
          </p> */}
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Ready to apply or have questions? Our team is here to help. Reach
            out today for personalized financial solutions.
          </p>
          <Link
            to="/contact"
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
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
