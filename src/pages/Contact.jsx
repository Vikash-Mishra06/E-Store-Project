import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center p-6 md:p-10">
      <div className="w-full md:w-3/4 lg:w-1/2 shadow-lg rounded-lg p-8 border border-gray-300 bg-white">
        <h2 className="text-2xl text-red-500 font-bold mb-6 text-center">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
