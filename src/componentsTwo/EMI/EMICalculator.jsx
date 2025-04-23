import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';

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
    const emiCalc = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = emiCalc * n;
    const interest = total - loanAmount;

    setEmi(Math.round(emiCalc));
    setInterestAmount(Math.round(interest));
    setTotalPayable(Math.round(total));
  }, [loanAmount, interestRate, loanTenure]);

  return (
    <div className="flex max-w-5xl mx-auto flex-col lg:flex-row justify-center items-center sm:gap-16 gap-8 p-12 bg-white rounded-[34px] " style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}>
      {/* Left Box */}
      <div className="bg-[#023b75] text-white  rounded-3xl w-[734px] ">
        <div className='p-6'>
        <h2 className="text-xl font-bold mb-6">Calculate Your EMI</h2>

{/* Loan Amount */}
<div className="mb-6 ">
  <div className="flex justify-between mb-1">
    <span>Loan Amount</span>
    <span>₹ {loanAmount.toLocaleString()}</span>
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
    <span>1L</span><span>25L</span><span>50L</span><span>75L</span><span>1CR</span>
  </div>
</div>

{/* Interest Rate */}
<div className="mb-6">
  <div className="flex justify-between mb-1">
    <span>Interest Rate</span>
    <span>{interestRate}%</span>
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
    <span>4%</span><span>8%</span><span>12%</span><span>16%</span><span>20%</span><span>24%</span>
  </div>
</div>

{/* Loan Tenure */}
<div className="mb-6">
  <div className="flex justify-between mb-1">
    <span>Loan Tenure</span>
    <span>{loanTenure}Y</span>
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
    <span>5Y</span><span>10Y</span><span>15Y</span><span>20Y</span><span>25Y</span><span>30Y</span>
  </div>
</div>
        </div>

        {/* Results Box */}
        <div className="bg-yellow-400 text-black p-4 rounded-b-3xl grid grid-cols-3 text-center font-semibold">
          <div>
            <p className="text-lg">₹ {emi.toLocaleString()}</p>
            <p className="text-xs text-gray-700">Loan EMI</p>
          </div>
          <div className="border-x border-gray-300 px-2">
            <p className="text-lg">₹ {interestAmount.toLocaleString()}</p>
            <p className="text-xs text-gray-700">Interest Amount</p>
          </div>
          <div>
            <p className="text-lg">₹ {totalPayable.toLocaleString()}</p>
            <p className="text-xs text-gray-700">Total Payable</p>
          </div>
        </div>
      </div>

      {/* Right Info */}
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold text-[#032d60] mb-4">More accurate estimates for your loan</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam.
        </p>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold">Calculate the interest rate</h4>
            <p className="text-sm text-gray-500">We always think of even the smallest</p>
          </div>
          <div>
            <h4 className="font-semibold">Calculate your monthly fee</h4>
            <p className="text-sm text-gray-500">We always think of even the smallest</p>
          </div>
        </div>
        <Button btn="Calculate Now" link="#" />

      </div>
    </div>
  );
};

export default EMICalculator;
