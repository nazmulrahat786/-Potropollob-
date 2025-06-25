import React from "react";
import { FaLeaf, FaGlobe, FaTools } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AboutPage = () => {
  return (
       <div>
        <Navbar></Navbar>
    <section className="bg-cream min-h-screen py-20  text-gray-800">
   
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl py-3 font-extrabold mb-2 text-green-700">About Potropollob</h1>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg max-w-xl mx-auto text-gray-700">
            Bridging technology and nature to make plant care easier, smarter, and more joyful.
          </p>
        </header>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-green-200 text-green-700 p-3 rounded-full">
                <FaLeaf size={28} />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At Potropollob, our mission is to make plant care simple, rewarding, and personalized.
              We empower beginners and enthusiasts to nurture their green spaces with confidence and joy.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-green-200 text-green-700 p-3 rounded-full">
                <FaGlobe size={28} />
              </div>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where homes flourish with greenery, people live closer to nature,
              and plant care becomes second nature. With smart tools and a supportive community, anyone can be a plant parent.
            </p>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-green-200 text-green-700 p-3 rounded-full mx-auto">
              <FaTools size={28} />
            </div>
            <h2 className="text-2xl font-semibold">Built With</h2>
          </div>
          <p className="mb-6 text-gray-700 max-w-xl mx-auto">
            Potropollob is built using modern, scalable technologies to deliver a smooth and beautiful user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Tailwind CSS", "DaisyUI", "Responsive Design"].map((tech) => (
              <span
                key={tech}
                className="bg-green-100 text-green-800 font-semibold rounded-full px-4 py-2 text-sm cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
       </div>
  );
};

export default AboutPage;
