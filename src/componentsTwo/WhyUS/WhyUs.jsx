import React from 'react'

function WhyUs() {

    const loanFeatures = [
        {
          title: "Easy Process",
          description: "Fast application and approval with minimal paperwork.",
          icon: "",
        },
        {
          title: "Competitive Rates",
          description: "We offer some of the most affordable rates in the market.",
          icon: "",
        },
        {
          title: "Flexible Terms",
          description: "Tailored loan solutions that fit your unique needs.",
          icon: "",
        },
        {
          title: "Expert Guidance",
          description: "We’re with you every step of the way, ensuring you make the best financial decision.",
          icon: "",
        },
        {
          title: "No Hidden Costs Or Fees",
          description: "Clear and transparent loan process with no hidden charges.",
          icon: "",
        },
        {
          title: "Customized Solutions",
          description: "Loan options tailored to your unique financial needs.",
          icon: "",
        },
      ];
      
  return (
    <div className='h-full w-full pt-10'>
        <div className='max-w-6xl rounded-[34px] w-[77.03vw] bg-white mx-auto py-12 sm:py-8 px-4 sm:px-10 lg:py-14 lg:px-12 ' style={{ boxShadow: "0px 4px 65px rgba(0, 0, 0, 0.02)" }}>
        <div className="flex flex-wrap justify-center  gap-12">
  {loanFeatures.map((feature, index) => (
    <div
      key={index}
      className="
        relative
        bg-[#F4C520]
        text-black
        font-semibold
        px-6
        py-2
        rounded-md
        shadow-[4px_4px_0_#1AD079]
        hover:shadow-[2px_2px_0_#1AD079]
        active:shadow-none
        transition-all
        text-sm
        sm:text-base
        w-[256.7px]
        h-[146px]
        flex
        items-center
        justify-start
        pt-10
        flex-col
      "
    >
      <div
        className="h-[48px] w-[48px] rounded-full absolute -top-7 bg-[#003474]"></div>
      <h1 className="font-bold text-[20px] text-center leading-none text-[#003474]">{feature.title}</h1>
      <p className="text-[12px] text-center font-medium py-1 leading-tight">
        {feature.description}
      </p>
    </div>
  ))}
</div>

        </div>
    </div>
  )
}

export default WhyUs