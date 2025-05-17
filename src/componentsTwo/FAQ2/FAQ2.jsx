import React, { useState } from "react";
import TopHeader from "../../components/TopHeader";

function FAQ2() {
    const steps = [
        {
          id: 1,
          title: "What is the interest rate?",
          description: "Random Text.........................................................Bla!Bla!Bla!..",
        },
        {
          id: 2,
          title: "How fast can I get the money?",
          description: "Random Text.........................................................Bla!Bla!Bla!..",
        },
        {
          id: 3,
          title: "Can I repay early?",
          description: "Random Text.........................................................Bla!Bla!Bla!..",
        },
        {
          id: 4,
          title: "Is collateral needed?",
          description: "Random Text.........................................................Bla!Bla!Bla!..",
        },
      ];
    
  const [expandedStep, setExpandedStep] = useState(1);

  const toggleStep = (id) => {
    setExpandedStep((prev) => (prev === id ? null : id));
  };

  return (
      <div className="w-full max-w-6xl py-12">
        <TopHeader top="FAQ" subHead="Frequently Asked Questions" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 xl:px-0 mt-10">
 

          {/* Steps */}
<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
  {steps.map((step) => (
    <div
      key={step.id}
      className="bg-white rounded-2xl p-6 cursor-pointer shadow-md transition-all duration-300"
      onClick={() => toggleStep(step.id)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">
          {step.id}. {step.title}
        </h3>
        <div
          className={`flex items-center justify-center h-[20px] w-[20px] border border-[#1AD079] rounded-full transition-all duration-300 ${
            expandedStep === step.id
              ? "bg-[#1AD079] text-white"
              : "text-[#1AD079] bg-white"
          }`}
        >
          <i
            className={`ri-arrow-${
              expandedStep === step.id ? "down" : "left"
            }-s-line text-sm`}
          />
        </div>
      </div>

      <div
        className={`transition-all overflow-hidden duration-300 ${
          expandedStep === step.id ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm">{step.description}</p>
      </div>
    </div>
  ))}
</div>

        </div>
    </div>
  );
}

export default FAQ2;