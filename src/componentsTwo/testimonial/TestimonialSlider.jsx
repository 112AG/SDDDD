import React, { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "../../data/data"; // Make sure this file exists

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const updateCardsToShow = () => {
    if (window.innerWidth < 768) {
      setCardsToShow(1);
    } else if (window.innerWidth < 1224) {
      setCardsToShow(2);
    } else {
      setCardsToShow(3);
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const next = () => {
    setIndex((prev) =>
      prev + 1 >= testimonials.length - cardsToShow + 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - cardsToShow : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [cardsToShow]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Navigation Buttons on Top of Cards */}
      <button
        onClick={prev}
        className="absolute z-20 left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-green-100"
      >
        <FaChevronLeft />
      </button>


      {/* Slider */}
      <div className="overflow-hidden w-[80%] md:w-[90%] mx-auto ">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(testimonials.length * 100) / cardsToShow}%`,
            transform: `translateX(-${(index * 100) / testimonials.length}%)`,
          }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="p-4"
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg h-full transform transition-transform duration-300 hover:scale-105">
                <div className="flex text-green-500 pb-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <button
        onClick={next}
        className="absolute z-20 right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-green-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
