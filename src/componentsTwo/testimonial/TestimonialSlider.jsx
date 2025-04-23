import React, { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "../../data/data"; 

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 3000); // Auto-slide every 3s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 px-4 flex items-center justify-center">
      <button
        onClick={prev}
        className="absolute left-0 z-10 p-2 rounded-full border border-gray-300 hover:bg-green-100"
      >
        <FaChevronLeft />
      </button>

      <div className="flex gap-6 overflow-hidden">
        {testimonials.slice(index, index + 2).map((testimonial, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg w-80 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex text-green-500 mb-4">
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
                <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="absolute right-0 z-10 p-2 rounded-full border border-gray-300 hover:bg-green-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
