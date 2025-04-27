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
    }, 7000);
  }

  function resetAutoSlide() {
    clearInterval(intervalRef.current);
    startAutoSlide();
  }

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="w-full h-full pt-4 sm:pt-6 lg:pt-8">
      <div className="animate-fade mx-auto max-w-6xl">
        {/* Tabs */}

        <div className="flex items-center justify-center flex-wrap gap-4 max-w-6xl">
          {loanProducts.map((data, idx) => (
            <div
              onClick={() => handleOption(data, idx)}
              key={idx}
              className={`
        ${
          getOption.idx === ""
            ? idx === 0
              ? "tab-active"
              : "tab-default"
            : getOption.idx === idx
            ? "tab-active"
            : "tab-default"
        } cursor-pointer font-semibold
      `}
            >
              {data.title}
            </div>
          ))}
        </div>

        {/* Content */}
        {selected ? (
          <div
            key={selected.title}
            className="max-w-6xl flex flex-col-reverse md:flex-row items-center justify-around px-4 sm:px-6 py-14 gap-6 animate-fade"
          >
            {/* Left Content */}
            <div
              className="h-[454px] w-[573px] rounded-[34px] bg-white flex items-start justify-center flex-col gap-3 px-4 sm:px-6"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold">
                {selected.tagline}
              </h1>
              <p className="text-sm text-[#102b3e99] py-2">
                {selected.description}
              </p>
              <ul className="pb-6">
                {selected.whyChoose.map((data, index) => (
                  <li key={index} className="py-1 flex items-center gap-2">
                    <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                    <span className="text-[#102b3ea1] text-sm">{data}</span>
                  </li>
                ))}
              </ul>
              <Button btn="Start your Business" link="#" />
            </div>

            {/* Image */}
            <div
              className=" h-[454px] w-[573px] bg-white rounded-[34px] overflow-hidden"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <img
                src={selected.image}
                className="w-full h-full object-cover"
                alt={selected.title}
              />
            </div>
          </div>
        ) : (
          <div
            key={loanProducts[0].title}
            className="flex flex-col-reverse sm:flex-row justify-around items-center gap-6 px-4 sm:px-6 py-14 animate-fade"
          >
            {/* Left Default */}
            <div
              className="w-full sm:max-w-[539px] bg-white rounded-[34px] py-6 px-[6vw] pb-11 min-h-[354px]"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <h1 className="text-2xl sm:text-3xl font-bold">
                {loanProducts[0].tagline}
              </h1>
              <p className="text-sm text-[#102b3e99] py-2">
                {loanProducts[0].description}
              </p>
              <ul className="pb-6">
                {loanProducts[0].whyChoose.map((data, index) => (
                  <li key={index} className="py-1 flex items-center gap-2">
                    <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-6 w-6 rounded-full flex items-center justify-center text-sm"></i>
                    <span className="text-[#102b3ea1] text-sm">{data}</span>
                  </li>
                ))}
              </ul>
              <Button btn="Start your Business" link="#" />
            </div>

            {/* Right Default */}
            <div
              className="w-full sm:max-w-[339px] bg-white rounded-[34px] min-h-[354px] overflow-hidden"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <img
                src={loanProducts[0].image}
                className="w-full h-full object-cover"
                alt={loanProducts[0].title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoanTabs;
