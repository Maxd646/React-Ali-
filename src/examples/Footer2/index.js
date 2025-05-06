import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaUserPlus, FaFileAlt, FaBell } from "react-icons/fa";

const Section = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Discover Amen Investment Group
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Unlock Your Career Potential With Us
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
          Find Jobs
        </button>
      </div>

      {/* Trusted By Section */}
      <div className="py-12 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Trusted By</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <img src="/images/logo1.png" className="h-12" alt="logo1" />
          <img src="/images/logo2.png" className="h-12" alt="logo2" />
          <img src="/images/logo3.png" className="h-12" alt="logo3" />
          <img src="/images/logo4.png" className="h-12" alt="logo4" />
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Finance",
            "Admin",
            "Construction",
            "Automotive",
            "Business",
            "Agriculture",
            "IT",
            "Customer Service",
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl text-center font-semibold"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Companies Section */}
      <div className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Companies</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div>
            <img src="/images/amen-jobs.jpg" alt="Amen Jobs" />
          </div>
          <div>
            <img src="/images/amen-properties.jpg" alt="Amen Properties" />
          </div>
          <div>
            <img src="/images/amen-finance.jpg" alt="Amen Finance" />
          </div>
          <div>
            <img src="/images/amen-import.jpg" alt="Amen Import Export" />
          </div>
        </Carousel>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Be Discovered in 3 Simple Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Step 1 */}
          <StepCard
            icon={<FaUserPlus size={40} />}
            title="Register & Apply"
            description="Sign up for a free account and apply to jobs from anywhere."
          />

          {/* Step 2 */}
          <StepCard
            icon={<FaFileAlt size={40} />}
            title="Build Your Profile"
            description="Create your profile and let employers discover you easily."
          />

          {/* Step 3 */}
          <StepCard
            icon={<FaBell size={40} />}
            title="Set Job Alerts"
            description="Get instant email alerts when jobs matching your skills are posted."
          />
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center space-y-6">
    <div className="bg-white text-blue-800 p-6 rounded-full shadow-lg transform hover:scale-110 transition duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    <p className="text-lg text-gray-600">{description}</p>
  </div>
);

import PropTypes from "prop-types";

StepCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Section;
