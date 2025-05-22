import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../services/servicesData";
import TopHeader from "../../components/TopHeader";
import TestimonialSlider from "../../componentsTwo/testimonial/TestimonialSlider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import Ornament from "../../assets/SDFinanceServices/Ornament.png";
import Icon from "../../assets/SDFinanceServices/Icon.png";
import Icon2 from "../../assets/SDFinanceServices/Icon2.png";
import SDHelpLine from "../../assets/images/SDHelpLine.png";
import FAQ2 from '../../componentsTwo/FAQ2/FAQ2'
import FAQ from "../../componentsTwo/FAQ/FAQ";
import HelpSection from "../../componentsTwo/Help/HelpSection";
import CTA from "../../componentsTwo/CTA/CTA";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Services = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  const sectionTitleRef = useRef();
  const helpTitleRef = useRef();

  useGSAP(() => {
    if (service && sectionTitleRef.current) {
      gsap.fromTo(
        sectionTitleRef.current,
        { text: "" },
        {
          text: service.sectionTitle,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionTitleRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (service && helpTitleRef.current) {
      gsap.fromTo(
        helpTitleRef.current,
        { text: "" },
        {
          text: "Need help preparing your documents?",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: helpTitleRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [service]);

  if (!service) {
    return (
      <div className="p-8 text-center text-red-500">
        Oops! Service not found.
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f6f8fb] flex flex-col items-center justify-center gap-22 sm:gap-32 pb-12">
      {/* Top Hero Section */}
      <div className="h-[80vh] w-full sm:h-screen bg-[#001E5A] text-white relative overflow-hidden">
  <div className="w-full px-4 sm:w-[80%] md:w-[60%] max-w-6xl mx-auto flex flex-col items-center justify-center h-full relative">
    {/* Background Ornament */}
    <img src={Ornament} alt="Light" className="absolute" />

    {/* Top Right Icon */}
    <img
      src={Icon2}
      alt="Icon"
      className="hidden sm:block h-[100px] w-[100px] absolute right-0 top-[22%]"
    />

    {/* Bottom Left Icon */}
    <img
      src={Icon}
      alt="Icon"
      className="hidden sm:block h-[100px] w-[100px] absolute -left-[14%] top-[62%]"
    />

    {/* Main Title */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold leading-snug relative lg:mt-12">
      {service.title}
    </h1>

    {/* Subtitle */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-4 leading-snug relative">
      {service.subtitle}
    </h2>

    {/* Description */}
    <h2 className="text-base sm:text-lg md:text-xl text-center mb-4">
      {service.description}
    </h2>

    {/* Contact Button */}
    <div className="w-full text-center">
      <Link
        to="/contact"
        className="inline-block cursor-pointer relative z-20 bg-[#F4C520] text-black font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] active:shadow-none transition-all text-sm sm:text-base whitespace-nowrap"
      >
        Contact us
      </Link>
    </div>
  </div>
</div>

      {/* Section Content */}
      <div className="px-4  max-w-6xl mx-auto flex flex-col items-center justify-between">
        <div className="inline-block bg-[#d6fbe4] text-[#1AD079] text-sm font-medium px-4 py-1 rounded mb-6">
          {service.sectionTag}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-[44%] h-[400px] bg-gray-200 overflow-hidden rounded-[24px] sm:rounded-[34px]">
            <img
              src={service.image}
              alt="Service Visual"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2
              ref={sectionTitleRef}
              className="text-2xl sm:text-4xl md:text-[44px] lg:text-[52px] font-bold text-[#002c6a]"
            ></h2>
            <p className="text-[#333] text-sm sm:text-base leading-relaxed pt-6">
              {service.sectionDescription}
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between w-full items-center flex-wrap gap-6 pt-8">
          {/* Key Features */}
          <div className="w-full h-[278px] md:w-[30%] bg-[#F4C520] text-black font-semibold p-6 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] transition-all text-sm whitespace-nowrap">
            <h3 className="font-bold text-lg mb-4">Key Features Section</h3>
            <ul className="space-y-2 text-sm">
              {service.features.keyFeatures.map((data, index) => (
                <li key={index} className="flex items-center gap-2 py-1">
                  <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                  {data}
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="w-full h-[278px] md:w-[30%] bg-[#F4C520] text-black font-semibold p-6 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] transition-all text-sm whitespace-nowrap">
            <h3 className="font-bold text-lg mb-4">Eligibility Criteria</h3>
            <ul className="space-y-2 text-sm">
              {service.features.eligibilityCriteria.map((data, index) => (
                <li key={index} className="flex items-center gap-2 py-1">
                  <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                  {data}
                </li>
              ))}
            </ul>
          </div>

          {/* How it works */}
          <div className="w-full h-[278px] md:w-[30%] bg-[#F4C520] text-black font-semibold p-5 lg:p-6 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] transition-all text-sm whitespace-nowrap">
            <h3 className="font-bold text-lg mb-4">How It Works</h3>
            <ul className="space-y-2 text-sm">
              {service.features.howItWorks.map((data, index) => (
                <li key={index} className="flex items-start gap-2 py-1">
                  <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                  <p className="whitespace-break-spaces">{data}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Get Help Section */}
      <HelpSection/>

      {/* Testimonials */}
      <section className="w-full px-4 sm:px-6">
        <TopHeader
          top="Testimonials"
          subHead="Happy Clients with Appropriate Financing"
        />
        <p className="text-center text-[#7F7F8C] text-lg mt-4 mb-4 md:mb-8 pt-4 sm:pt-0">
          Hear how we’ve helped clients achieve their dreams with the right
          financial solutions.
        </p>
        <TestimonialSlider />
      </section>

      {/* FAQ */}
      <FAQ />


      {/* CTA */}
      <CTA/>


    </div>
  );
};

export default Services;
