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
import FAQ from "../../componentsTwo/FAQ/FAQ";

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
    <div>
      {/* Top Hero Section */}
      <div className="w-full h-screen bg-[#001E5A] text-white">
        <div className="w-[60%] max-w-6xl mx-auto flex flex-col item-center justify-center h-full relative">
          <img src={Ornament} alt="Light" className="absolute" />
          <img
            src={Icon2}
            alt="Icon"
            className="h-[100px] w-[100px] absolute left-[98%] top-[22%]"
          />
          <img
            src={Icon}
            alt="Icon"
            className="h-[100px] w-[100px] absolute -left-[14%] top-[62%]"
          />

          <h1 className="text-5xl text-center font-bold mb-4 leading-[62px] relative z-10">
            {service.subtitle}
          </h1>
          <h2 className="text-[20px] text-center mb-4">
            {service.description}
          </h2>
          <div className="w-full text-center">
            <Link
              className="inline-block bg-[#F4C520] text-black font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] active:shadow-none transition-all text-sm sm:text-base whitespace-nowrap"
              to="/contact"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className="px-4 py-12 md:py-16 max-w-6xl mx-auto flex flex-col items-center justify-between">
        <div className="inline-block bg-[#d6fbe4] text-[#1AD079] text-sm font-medium px-4 py-1 rounded mb-6">
          {service.sectionTag}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-[44%] h-[240px] sm:h-[300px] overflow-hidden md:h-[350px] lg:h-[400px] bg-gray-200 rounded-[24px] sm:rounded-[34px]">
            <img
              src={service.image}
              alt="Service Visual"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2
              ref={sectionTitleRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002c6a] h-[44px]"
            ></h2>
            <p className="text-[#333] text-sm sm:text-base leading-relaxed">
              {service.sectionDescription}
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex justify-center sm:justify-between w-full item-center flex-wrap pt-8">
          {/* Key Features */}
          <div className="relative min-w-[312px] w-[30%] bg-[#F4C520] text-black font-semibold p-6 my-4 sm:my-0 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] active:shadow-none transition-all lg:text-sm text-[12px] whitespace-nowrap">
            <h3 className="font-bold text-lg mb-4">Key Features Section</h3>
            {service.features.keyFeatures.map((data, index) => (
              <ul key={index} className="space-y-2 text-sm">
                <li className="flex items-center gap-2 py-1">
                  <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                  {data}
                </li>
              </ul>
            ))}
          </div>

          {/* Eligibility */}
          <div className="relative w-[30%] min-w-[312px] bg-[#F4C520] text-black font-semibold p-6 my-4 sm:my-0 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] active:shadow-none transition-all lg:text-sm text-[12px] whitespace-nowrap">
            <h3 className="font-bold text-lg mb-4">Eligibility Criteria</h3>
            {service.features.eligibilityCriteria.map((data, index) => (
              <ul key={index} className="space-y-2 text-sm">
                <li className="flex items-center gap-2 py-1">
                  <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                  {data}
                </li>
              </ul>
            ))}
          </div>

          {/* How it works */}
          <div className="relative w-[30%] min-w-[312px] bg-[#F4C520] text-black font-semibold p-6 my-4 md:my-0 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] active:shadow-none transition-all lg:text-sm text-[12px] whitespace-nowrap">
            <h3 className="font-bold text-lg mb-4">How It Works</h3>
            {service.features.howItWorks.map((data, index) => (
              <ul key={index} className="space-y-2 text-sm">
                <li className="flex items-start gap-2 py-1">
                  <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                  <p className="whitespace-break-spaces">{data}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Get Help Section */}
      <div className="flex max-w-6xl mx-auto items-center justify-center flex-col pt-10 px-4 sm:px-6 lg:px-8">
        <div className="inline-block bg-[#1ad07839] text-[#1AD079] font-medium text-[16px] sm:text-[18px] px-4 py-1 rounded mb-4">
          Get Help
        </div>

        <div className="w-full flex flex-col-reverse lg:flex-row gap-6 items-center lg:items-start justify-between">
          <div className="w-full lg:w-[56%] text-center lg:text-left">
            <h2 ref={helpTitleRef} className="text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] font-extrabold text-[#002c6a] h-[116px]">
              
            </h2>
            <p className="pt-4 sm:pt-5 md:pt-6 max-w-[90%] mx-auto lg:mx-0 lg:max-w-[80%]">
              We understand that paperwork can feel overwhelming especially when
              you're focused on running a business. That’s why our dedicated
              support team is here to guide you every step of the way.
            </p>
            <p className="py-4 md:py-6 lg:py-8">
              Talk to Our Experts for free documentation assistance.
            </p>
            <Link
              className="inline-block bg-[#F4C520] text-black font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] active:shadow-none transition-all text-sm sm:text-base whitespace-nowrap"
              to="/contact"
            >
              Contact us
            </Link>
          </div>

          <div className="w-full lg:w-[44%] h-[240px] sm:h-[300px] overflow-hidden md:h-[350px] lg:h-[400px] bg-gray-200 rounded-[24px] sm:rounded-[34px]">
            <img
              src={SDHelpLine}
              className="h-full w-full object-cover"
              alt="Help Line"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="w-full py-4 md:py-8 lg:py-12 px-4 sm:px-0">
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
      <section className="py-12 px-4">
        <div className="bg-[#003366] text-white rounded-2xl py-18 text-center relative overflow-hidden max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Ready to apply or have questions? Our team is here to help. Reach
            out today for personalized financial solutions.
          </p>
          <Link
            to="/contact"
            className="relative bg-[#F4C520] text-black font-semibold px-6 py-3 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] active:shadow-none transition-all lg:text-sm text-[12px] whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
