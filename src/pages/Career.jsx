import React from "react";
import Icon from "../assets/SDFinanceServices/Icon.png";
import Icon2 from "../assets/SDFinanceServices/Icon2.png";
import Ornament from "../assets/SDFinanceServices/Ornament.png";
import { Link } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import CTA from "../componentsTwo/CTA/CTA";

function Career() {
  const whyUs = [
    {
      head: "Supportive team culture",
      title:
        "Experience a workplace where collaboration and respect are the foundation. We support each other, celebrate wins together, and grow as one team.",
    },
    {
      head: "Learning & Career Growth",
      title:
        "We invest in your growth with access to training, mentorship, and real-world challenges that help you advance your skills and career path.",
    },
    {
      head: "Competitive Pay & Benefits",
      title:
        "We offer fair, industry-competitive compensation along with benefits that prioritize your well-being, including insurance, paid leave, and performance bonuses.",
    },
    {
      head: "Impactful, Meaningful Work",
      title:
        "Your work creates real change—helping people achieve financial freedom, secure their future, and grow their businesses with confidence.",
    },
  ];
  return (
    <div className="w-full bg-[#f6f8fb] flex flex-col items-center justify-center gap-16 sm:gap-32 pb-12">
      {/* Top Hero Section */}
      <div className="h-[80vh] w-full sm:h-screen bg-[#001E5A] text-white relative">
        <div className="w-full px-4 sm:w-[80%] md:w-[60%] max-w-6xl mx-auto flex flex-col items-center justify-center h-full relative">
          <img src={Ornament} alt="Light" className="absolute" />
          <img
            src={Icon2}
            alt="Icon"
            className="hidden sm:block h-[100px] w-[100px] absolute left-[98%] top-[22%]"
          />
          <img
            src={Icon}
            alt="Icon"
            className="hidden sm:block h-[100px] w-[100px] absolute -left-[14%] top-[62%]"
          />
          <h1 className="text-8xl font-bold leading-[140%]">Career</h1>
          <p className="text-4xl font-medium">
            Join Our Team and Shape the Future of Finance
          </p>
        </div>
      </div>

      {/* Why Work with us */}
      <div className="max-w-6xl mx-auto px-2">
        <TopHeader subHead="Why work with us?" top="Why Us" />
       <div className='flex gap-4 justify-around lg:justify-between flex-wrap'>
       {whyUs.map((data) => (
          <div className=" w-[272px]  my-8 bg-[#F4C520] text-black p-6 rounded-md shadow-[-3px_3px_0_#1AD079] hover:shadow-[-2px_2px_0_#1AD079] transition-all text-sm whitespace-break-spaces">
          <h1 className='text-2xl leading-tight pb-2 font-bold'>{data.head}</h1>
          <p className='text-[12px] leading-tight text-left text-[#505050] '>{data.title}</p>
          </div>
        ))}
       </div>
      </div>

      {/* Job Opening */}
      <div className='max-w-6xl w-full  sm:bg-white rounded-2xl shadow-md flex flex-col items-center justify-center py-12 px-2'>
        <TopHeader subHead="Job Openings" top="Openings" />
        <h1 className='text-4xl py-4 font-bold text-[#222222]'>We’re not hiring at the moment</h1>
        <p className='text-[18px] font-semibold leading-tight text-[#5F5F5F] text-center'>
          But we’re always looking for passionate, talented individuals who believe in making a difference <br />through financial innovation.
        </p>
      </div>

      {/* CTA */}
      <CTA/>
    </div>
  );
}

export default Career;