import React from 'react';
import {blogs} from '../../data/data.js';
import { Link } from 'react-router-dom';


export default function BlogPosts() {
  return (
    <section className="py-12 px-4 sm:px-0 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Blog</h2>
        <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition">
          View More
        </button>
      </div>

      <div className="flex flex-wrap md:gap-6 gap-4 gap-y-3.5 justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="max-w-[190px] md:max-w-[318px] rounded-lg overflow-hidden shadow-md sm:shadow-none">
            <img src={blog.image} alt={blog.title} className="w-full h-[202px] md:h-[292px] object-cover" />
            <div className="md:p-4 p-2">
              <p className="text-[12px] md:text-sm text-gray-500 mb-1">{blog.date}</p>
              <h3 className="text-[16px] md:text-lg font-semibold mb-1 md:mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 md:mb-4">{blog.description}</p>
              <Link to="#" className="text-green-500 text-sm flex items-center">
                <p>Read More</p><i className="ri-arrow-right-s-line text-[28px] "></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
