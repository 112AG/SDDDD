import React, { useState, useEffect, useRef } from "react";
import { data } from "../../data/data";
import Button from "../../components/Button";
import "./loanTabs.css";

function LoanTabs() {
  const [getOption, setGetOption] = useState({ data: "", idx: "" });
  const [loanProducts, setLoanProducts] = useState(data);

  const intervalRef = useRef(null);

  const selected = loanProducts.find((item) => item.title === getOption.data);

  function handleOption(data, idx) {
    setGetOption({ data: data.title, idx: idx });
    resetAutoSlide();
  }

  function startAutoSlide() {
    intervalRef.current = setInterval(() => {
      setGetOption((prev) => {
        let nextIdx;
        if (prev.idx === "") {
          nextIdx = 1;
        } else {
          nextIdx = (prev.idx + 1) % loanProducts.length;
        }
        return {
          data: loanProducts[nextIdx].title,
          idx: nextIdx,
        };
      });
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(intervalRef.current);
    // startAutoSlide(); 
  }

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full h-full pt-4 sm:pt-6 lg:pt-8">
      <div className="animate-fade  mx-auto max-w-6xl">
        {/* Tabs */}
        <div className="flex items-center pb-12 justify-center md:justify-between flex-wrap gap-4 max-w-6xl px-4 xl:px-0">
          {loanProducts.map((data, idx) => (
            <div
              key={idx}
              onClick={() => handleOption(data, idx)}
              className={`cursor-pointer font-semibold ${
                getOption.idx === ""
                  ? idx === 0
                    ? "tab-active"
                    : "tab-default"
                  : getOption.idx === idx
                  ? "tab-active"
                  : "tab-default"
              }`}
            >
              {data.title}
            </div>
          ))}
        </div>

        {/* Content */}
        {selected ? (
          <div
            key={selected.title}
            className="max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between px-4 xl:px-0 gap-6 animate-fade"
          >
            {/* Left Content */}
            <div
              className="sm:h-[454px] sm:w-[573px] h-[468px] w-full rounded-[34px] bg-white flex items-start justify-center flex-col py-4 gap-3 px-4 md:px-6"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold">{selected.tagline}</h1>
              <p className="text-sm text-[#102b3e99] py-2">{selected.description}</p>
              <ul className="pb-6">
                {selected.whyChoose.map((data, index) => (
                  <li key={index} className="py-1 flex items-center gap-2">
                    <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                    <span className="text-[#102b3ea1] text-sm">{data}</span>
                  </li>
                ))}
              </ul>
              <Button btn={selected.buttonLabel} link={selected.buttonLink} />
            </div>

            {/* Right Content (Image) */}
            <div
              className="sm:h-[454px] sm:w-[573px] h-[408px] w-full bg-white rounded-[34px] overflow-hidden"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div
            key={loanProducts[0].title}
            className="max-w-6xl flex flex-col-reverse md:flex-row items-center justify-around px-4 sm:px-6 py-14 gap-6 animate-fade"
          >
            {/* Left Default */}
            <div
              className="sm:h-[454px] sm:w-[573px] h-[438px] w-[346px] rounded-[34px] bg-white flex items-start justify-center flex-col gap-3 px-4 sm:px-6"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold">{loanProducts[0].tagline}</h1>
              <p className="text-sm text-[#102b3e99] py-2">{loanProducts[0].description}</p>
              <ul className="pb-6">
                {loanProducts[0].whyChoose.map((data, index) => (
                  <li key={index} className="py-1 flex items-center gap-2">
                    <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                    <span className="text-[#102b3ea1] text-sm">{data}</span>
                  </li>
                ))}
              </ul>
              <Button btn={loanProducts[0].buttonLabel} link="/services/business-loan" />
            </div>

            {/* Right Default (Image) */}
            <div
              className="sm:h-[454px] sm:w-[573px] h-[408px] w-[346px] bg-white rounded-[34px] overflow-hidden"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <img
                src={loanProducts[0].image}
                alt={loanProducts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoanTabs;
