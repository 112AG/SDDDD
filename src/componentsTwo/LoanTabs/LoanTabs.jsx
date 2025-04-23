import React, { useState } from "react";
import { data } from "../../data/data";
import Button from "../../components/Button";
import "./loanTabs.css";
// import ActiveSVG from "../../../public/ActiveButtonBg.svg";

function LoanTabs() {
  const [getOption, setGetOption] = useState({ data: "", idx: "" });

  const [loanProducts, setLoanProducts] = useState(data);

  const selected = loanProducts.find((item) => item.title === getOption.data);

  function handleOption(data, idx) {
    setGetOption(() => ({
      data: data.title,
      idx: idx,
    }));
  }

  return (
    <div className="w-full h-full pt-4 sm:pt-8 lg:pt-10">
      <div className="animate-fade mx-auto max-w-6xl">
        <div className="flex items-center justify-center flex-wrap gap-3 ">
          {loanProducts.map((data, idx) => (
            <div
              onClick={() => handleOption(data, idx)}
              className={`py-2 sm:py-[12px] px-4 sm:px-6 text-xs sm:text-xl border-2 ${
                getOption.idx === ""
                  ? idx === 0
                    ? "border-[#1bd07a] "
                    : "border-white"
                  : getOption.idx === idx
                  ? "border-[#1bd07a] "
                  : "border-white"
              } bg-[#f6f8fb] rounded-xl font-semibold`}
              key={idx}
            >
              {data.title}
            </div>
          ))}
        </div>

        {selected ? (
          <div
            key={selected.title}
            className="flex justify-around px-4 sm:px-6 py-14 animate-fade flex-col sm:flex-row items-center gap-4 sm:gap-0"
          >
            <div
              className="max-w-[539px] bg-white rounded-[34px] py-6 px-[4vw] pb-11 min-h-[354px]"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <h1 className="text-3xl font-bold">{selected.tagline}</h1>
              <p className="text-[12px] text-[#102b3e99] py-2">
                {selected.description}
              </p>
              <ul className="pb-6">
                {selected.whyChoose.map((data) => (
                  <li className="py-1 flex items-center justify-start gap-2">
                    <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-[24px] w-[24px] rounded-full p-0.5 flex items-center justify-center"></i>{" "}
                    <span className="text-[#102b3ea1] text-[12px]">{data}</span>
                  </li>
                ))}
              </ul>
              <Button btn="Start your Business" link="#" />
            </div>

            <div
  className=" max-w-[339px] w-full bg-white rounded-[34px] overflow-hidden min-h-[354px]"
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
            key={loanProducts.title}
            className="flex justify-around px-4 sm:px-6 py-14 animate-fade"
          >
            <div
              className="max-w-[539px] bg-white rounded-[34px] py-6 px-[4vw] pb-11 min-h-[354px]"
              style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
            >
              <h1 className="text-3xl font-bold">{loanProducts[0].tagline}</h1>
              <p className="text-[12px] text-[#102b3e99] py-2">
                {loanProducts[0].description}
              </p>
              <ul className="pb-6">
                {loanProducts[0].whyChoose.map((data) => (
                  <li className="py-1 flex items-center justify-start gap-2">
                    <i className="ri-check-line text-[#1bd07a] bg-[#1bd0791d] h-[24px] w-[24px] rounded-full p-0.5 flex items-center justify-center"></i>{" "}
                    <span className="text-[#102b3ea1] text-[12px]">{data}</span>
                  </li>
                ))}
              </ul>
              <Button btn="Start your Business" link="#" />
            </div>
            <div
              className="max-w-[339px] bg-white rounded-[34px] min-h-[354px] overflow-hidden"
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
