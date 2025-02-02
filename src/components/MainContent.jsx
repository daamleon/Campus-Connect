import React from "react";

function MainContent({ handleShowEmbed }) {
  return (
    <div className="w-full bg-gray-200 py-10 text-center px-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Why Join Campus Connect?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800">Networking</h3>
          <p className="text-gray-600 mt-2">Meet students, lecturers, and professionals from various universities.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800">Workshops</h3>
          <p className="text-gray-600 mt-2">Enhance your skills with interactive and insightful workshops.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800">Career Opportunities</h3>
          <p className="text-gray-600 mt-2">Discover internship and job opportunities from top companies.</p>
        </div>
      </div>
      <button
        onClick={handleShowEmbed}
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Register Now
      </button>
    </div>
  );
}

export default MainContent;