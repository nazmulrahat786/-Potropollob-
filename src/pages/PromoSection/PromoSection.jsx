import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PromoSection = () => {
  return (
    <section className="bg-green-50 text-green-900 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Make Plant Care Easy & Enjoyable 🌿
          </h2>
          <p className="text-lg mb-6">
            Track your plants, set reminders, and grow a lush indoor garden —
            all in one platform. Whether you're a beginner or a plant expert,
            Plant Care Tracker helps your greenery thrive.
          </p>
          <a
            href="/signup"
            className="btn btn-success text-white px-6 text-lg gap-2"
          >
            Get Started <FaArrowRight />
          </a>
        </div>

        {/* Image/Illustration */}
        <div className="flex-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2900/2900320.png"
            alt="Plant Care Illustration"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
