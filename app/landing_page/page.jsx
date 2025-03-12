"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Page() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardname) => {
    setSelectedCard(cardname);
  };

  const handleButtonClick = () => {
    if (selectedCard) {
      
    } else {
      alert("Please select a card");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h1
        className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 ${poppinsFont.className}`}
      >
        Select Your Role
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 pb-8 md:pb-60 w-full max-w-6xl px-4">
        {/* Student Card */}
        <div
          className={`max-w-sm w-full mx-auto bg-amber-100 border-2 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
            selectedCard === "student" 
            ? "border-green-500 border-4" 
            : "border-gray-500"
          }`}
          onClick={() => handleCardClick("student")}
        >
          <div className="p-4 md:p-6">
            <Image
              src="/student.png"
              width={200}
              height={200}
              alt="Student"
              className="w-32 md:w-44 lg:w-56 h-auto mx-auto"
              priority
            />
            <div className="p-2 md:p-5">
              <h5 className="text-xl md:text-2xl text-center font-bold tracking-tight text-gray-900">
                Student
              </h5>
            </div>
          </div>
        </div>

        {/* Recruiter Card */}
        <div
          className={`max-w-sm w-full mx-auto bg-amber-100 border-2 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
            selectedCard === "recruiter"
              ? "border-green-500 border-4" 
              : "border-gray-500"
          }`}
          onClick={() => handleCardClick("recruiter")}
        >
          <div className="p-4 md:p-6">
            <Image
              src="/recruiter.png"
              width={230}
              height={230}
              alt="Recruiter"
              className="w-full max-w-[180px] md:max-w-[230px] h-auto mx-auto object-contain pt-2 md:pt-5"
              priority
            />
            <div className="p-2 md:p-5">
              <h5 className="text-xl md:text-2xl text-center font-bold tracking-tight text-gray-900">
                Recruiter
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:-mt-35 w-full max-w-xs md:max-w-sm px-4">
        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 px-4 md:px-25 py-3 text-sm md:text-base font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-gradient-to-r from-indigo-600 to-indigo-500 hover:shadow-md hover:scale-105 focus:outline-none"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}