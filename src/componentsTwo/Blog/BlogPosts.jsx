import React from 'react';
import {blogs} from '../../data/data.js';
import { Link } from 'react-router-dom';


export default function BlogPosts() {
  return (
    <section className="py-12 px-4 md:px-16 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Blog</h2>
        <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition">
          View More
        </button>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {blogs.map((blog) => (
          <div key={blog.id} className="max-w-[318px] rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-[292px] object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
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
