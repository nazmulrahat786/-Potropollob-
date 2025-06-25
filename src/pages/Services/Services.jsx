import React from "react";
import { FaLeaf, FaClock, FaBook, FaChartBar, FaThumbtack } from "react-icons/fa";

const services = [
  {
    icon: <FaLeaf className="text-green-600 text-2xl" />,
    title: "Plant Discovery",
    description: "Explore a wide variety of plants with detailed care tips, ideal for beginners and experts alike.",
  },
  {
    icon: <FaClock className="text-yellow-500 text-2xl" />,
    title: "Care Reminders",
    description: "Get personalized reminders for watering, sunlight, and fertilizing, so your plants always stay healthy.",
  },
  {
    icon: <FaBook className="text-blue-500 text-2xl" />,
    title: "Plant Journal",
    description: "Record plant growth, add notes, and track changes over time to keep your gardening organized.",
  },
  {
    icon: <FaChartBar className="text-purple-500 text-2xl" />,
    title: "Health Monitoring",
    description: "Track key health indicators and get insights to prevent issues before they arise.",
  },
  {
    icon: <FaThumbtack className="text-pink-500 text-2xl" />,
    title: "Favorites & Tracking",
    description: "Save your favorite plants and monitor their care easily from a personalized dashboard.",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">🌿 Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-200 shadow-md p-6 space-y-4 hover:shadow-xl transition-all">
              <div>{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
