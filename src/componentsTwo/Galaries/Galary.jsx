import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Awards from "../../assets/Gallary/Awards.jpg"; 
import Awards2 from "../../assets/Gallary/Awards2.jpg";
import Employees from "../../assets/Gallary/Employees.jpg";
import Event from "../../assets/Gallary/Event.jpg";
import LoanTypes from "../../assets/Gallary/LoanTypes.jpg";
import Office from "../../assets/Gallary/Office.jpg";
import OfficeRoom from "../../assets/Gallary/OfficeRoom.jpg";


const images = [
  Awards,
  Awards2,
  Employees,
  Event,
  LoanTypes,
  Office,
  OfficeRoom,
];

export default function Galary() {
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
      prev + 1 >= images.length - cardsToShow + 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? images.length - cardsToShow : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [cardsToShow]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute z-20 left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-green-100"
      >
        <FaChevronLeft />
      </button>

      {/* Image Slider */}
      <div className="overflow-hidden w-[84%] sm:w-[90%] mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(images.length * 100) / cardsToShow}%`,
            transform: `translateX(-${(index * 100) / images.length}%)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="p-2"
              style={{ width: `${100 / images.length}%` }}
            >
              <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src={img}
                  alt='Gallery'
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute z-20 right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-green-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
