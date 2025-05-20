import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2470000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(10);

  const [emi, setEmi] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;
    const emiCalc =
      (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emiCalc * n;
    const interest = total - loanAmount;

    setEmi(Math.round(emiCalc));
    setInterestAmount(Math.round(interest));
    setTotalPayable(Math.round(total));
  }, [loanAmount, interestRate, loanTenure]);

  return (
    <div
      className="flex max-w-6xl mx-auto flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 p-4 sm:p-8 lg:p-16 sm:bg-white rounded-xl sm:rounded-2xl lg:rounded-[34px]"
      style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}
    >
      {/* Left Box */}
      <div className="bg-[#023b75] text-white rounded-2xl lg:rounded-3xl w-full lg:w-auto lg:min-w-[424px] md:max-w-[386px]">
        <div className="p-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
            Calculate Your EMI
          </h2>

          {/* Loan Amount */}
          <div className="mb-4 sm:mb-6">
            <div className="flex justify-between mb-1">
              <span className="text-sm sm:text-base">Loan Amount</span>
              <span className="text-sm sm:text-base">
                ₹ {loanAmount.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={100000}
              max={10000000}
              step={10000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              className="w-full accent-green-500"
            />
            <div className="flex justify-between text-xs mt-1 opacity-80">
              <span>1L</span>
              <span>25L</span>
              <span>50L</span>
              <span>75L</span>
              <span>1CR</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="mb-4 sm:mb-6">
            <div className="flex justify-between mb-1">
              <span className="text-sm sm:text-base">Interest Rate</span>
              <span className="text-sm sm:text-base">{interestRate}%</span>
            </div>
            <input
              type="range"
              min={4}
              max={24}
              step={0.5}
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
              className="w-full accent-green-500"
            />
            <div className="flex justify-between text-xs mt-1 opacity-80">
              <span>4%</span>
              <span>8%</span>
              <span>12%</span>
              <span>16%</span>
              <span>20%</span>
              <span>24%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="">
            <div className="flex justify-between mb-1">
              <span className="text-sm sm:text-base">Loan Tenure</span>
              <span className="text-sm sm:text-base">{loanTenure}Y</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={loanTenure}
              onChange={(e) => setLoanTenure(+e.target.value)}
              className="w-full accent-green-500"
            />
            <div className="flex justify-between text-xs mt-1 opacity-80">
              <span>5Y</span>
              <span>10Y</span>
              <span>15Y</span>
              <span>20Y</span>
              <span>25Y</span>
              <span>30Y</span>
            </div>
          </div>
        </div>

        {/* Results Box */}

        <div
          className="text-center 
        relative
        bg-[#F4C520]
        text-black
        font-semibold
        px-6
        py-4
        rounded-2xl
        shadow-[0px_2px_0_#1AD079]
        active:shadow-none
        transition-all
        text-sm
        sm:text-base
        flex
        items-center
        justify-evenly
      "
        >
          <div>
            <p className="text-sm lg:text-[16px]">₹ {emi.toLocaleString()}</p>
            <p className="text-xs text-gray-700">Loan EMI</p>
          </div>
          <div className="border-x border-gray-300 px-2 sm:px-6">
            <p className="text-sm lg:text-[16px]">
              ₹ {interestAmount.toLocaleString()}
            </p>
            <p className="text-xs text-gray-700">Interest Amount</p>
          </div>
          <div>
            <p className="text-sm lg:text-[16px]">
              ₹ {totalPayable.toLocaleString()}
            </p>
            <p className="text-xs text-gray-700">Total Payable</p>
          </div>
        </div>
      </div>

      {/* Right Info */}
      <div className="w-full lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#032d60] mb-3 sm:mb-4">
          More accurate estimates for your loan
        </h2>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Our EMI calculator gives you a general idea of your loan payments. For
          the most accurate and personalized details, please connect with our
          finance experts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-sm sm:text-base">
              Calculate the interest rate
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Estimate based on average market values.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">
              Calculate your monthly fee
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Know your tentative EMI in seconds.
            </p>
          </div>
        </div>
        <Button btn="Get an Estimate" link="/emi-calculator" />
      </div>
    </div>
  );
};

export default EMICalculator;
