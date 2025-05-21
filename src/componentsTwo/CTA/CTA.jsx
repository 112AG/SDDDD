import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="w-full px-4">
    <div className="bg-[#003366] text-white rounded-2xl py-18 text-center relative overflow-hidden max-w-6xl mx-auto px-4">
      {/* <p className="absolute top-4 left-4 text-[#1D4ED8] font-semibold">
        Register
      </p> */}
      <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
      <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
        Ready to apply or have questions? Our team is here to help. Reach
        out today for personalized financial solutions.
      </p>
      <Link
        to="/contact"
        className="
          relative
          bg-[#F4C520]
          text-black
          font-semibold
          px-6
          py-3
          rounded-md
          shadow-[-3px_3px_0_#1AD079]
          hover:shadow-[-2px_2px_0_#1AD079]
          active:shadow-none
          transition-all
          lg:text-sm
          text-[12px]
          whitespace-nowrap
        "
      >
        Contact Us
      </Link>
    </div>
  </section>
  )
}

export default CTA