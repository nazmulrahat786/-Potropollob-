
import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ayesha Siddika",
    feedback:
      "Plant Care Tracker has completely changed how I care for my indoor plants. The reminders are super helpful!",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    feedback:
      "I love the plant journal feature. It helps me stay organized and makes tracking plant growth easy.",
    rating: 4,
  },
  {
    name: "Mehedi Hasan",
    feedback:
      "As a beginner, I found this app really intuitive. The plant discovery section is awesome!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="text-base-content py-4 mb-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-green-500 font-bold mb-12">🌟 What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="card bg-base-200 shadow-md p-6 space-y-4">
              <div className="flex justify-center">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
              </div>
              <p className="italic">"{review.feedback}"</p>
              <h4 className="font-semibold text-green-700">– {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
