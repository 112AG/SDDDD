import React, { useState } from "react";
import TopHeader from "../../components/TopHeader";
import FAQImage from "../../assets/images/FAQ.png"

function FAQ() {
    const steps = [
        {
          id: 1,
          title: "How does SD Finance make getting a loan easier for me?",
          description: "We simplify the entire loan process with minimal paperwork, fast approvals, and expert support—so you can focus on your goals, not the red tape.",
        },
        {
          id: 2,
          title: "What makes SD Finance different from banks and other lenders?",
          description: "Unlike traditional lenders, we focus on flexibility, transparency, and speed. Our customer-first approach means tailored solutions, not one-size-fits-all products.",
        },
        {
          id: 3,
          title: "Who can apply for a loan with SD Finance?",
          description: "Anyone with a valid income source—whether salaried, self-employed, or running a business—can apply. We serve a wide range of customers with personalized options.",
        },
        {
          id: 4,
          title: "What support will I get after taking the loan?",
          description: "We offer ongoing customer service, repayment support, and financial advice throughout your loan journey. You're never alone after disbursal.",
        },
      ];
    
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (id) => {
    setExpandedStep((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <section className="w-full">
        <TopHeader top="FAQ" subHead="Frequently Asked Questions" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 xl:px-0 mt-10">
          {/* Image */}
          <div className="w-[244px] md:w-5/12">
            <img
              className="h-full w-full object-cover rounded-3xl"
              src={FAQImage}
              alt="Frequently Asked Questions"
            />
          </div>
          {/* Steps */}
          <div className="w-[264px] md:w-7/12">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl p-6 mb-4 cursor-pointer shadow-md"
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[14px] sm:text-lg">
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
    </div>
  );
}

export default FAQ;
