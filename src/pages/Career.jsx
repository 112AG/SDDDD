import React from "react";

const Career = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Careers</h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Join our dynamic team and be part of a fast-growing company that values innovation, collaboration, and excellence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Open Positions Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Open Positions</h2>
          <div className="space-y-6">
            {/* Job Listing 1: Software Engineer */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
              <p className="mt-2 text-gray-600">
                We are seeking a talented Software Engineer to design, develop, and implement innovative software solutions.
              </p>
              <button className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
                View Details
              </button>
            </div>
            {/* Job Listing 2: Product Manager */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800">Product Manager</h3>
              <p className="mt-2 text-gray-600">
                Looking for an experienced Product Manager to lead product strategy and oversee project execution.
              </p>
              <button className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
                View Details
              </button>
            </div>
            {/* Job Listing 3: UX/UI Designer */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800">UX/UI Designer</h3>
              <p className="mt-2 text-gray-600">
                We need a creative UX/UI Designer to help design engaging and intuitive user experiences.
              </p>
              <button className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Job Application Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Apply Now</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below to apply for one of our open positions.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your Full Name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-gray-700 mb-1">
                Position
              </label>
              <select
                id="position"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
                <option>Software Engineer</option>
                <option>Product Manager</option>
                <option>UX/UI Designer</option>
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block text-gray-700 mb-1">
                Upload Resume
              </label>
              <input
                id="resume"
                type="file"
                className="w-full text-gray-700"
              />
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-gray-700 mb-1">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                rows="5"
                placeholder="Write your cover letter..."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Career;
