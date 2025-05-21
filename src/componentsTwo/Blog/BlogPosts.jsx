import React from 'react';
import { blogs } from '../../data/data.js';
import { Link } from 'react-router-dom';

export default function BlogPosts() {
  return (
    <section className="px-4 xl:px-0 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Blog</h2>
        <Link
          to="/blog"
          className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition"
        >
          View More
        </Link>
      </div>

      {/* Blog Cards Container */}
      <div className="flex flex-wrap justify-start lg:justify-between gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-md overflow-hidden w-full sm:w-[48%] lg:w-[26%] flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-xs text-gray-500 mb-1">{blog.date}</p>
              <h3 className="text-base font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {blog.description}
              </p>
              <Link
                to="#"
                className="text-green-500 text-sm flex items-center mt-auto"
              >
                <p>Read More</p>
                <i className="ri-arrow-right-s-line text-[20px] ml-1"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}