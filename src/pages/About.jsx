import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center p-6 md:p-10">
      <div className="w-full md:w-3/4 lg:w-2/3 shadow-lg rounded-lg p-8 border border-gray-300 bg-white">
        <h2 className="text-2xl text-red-500 font-bold mb-6 text-center">
          About Us
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold">e-Store</span>, your
          trusted online shop for the latest fashion, electronics, and more.
          We are committed to delivering high-quality products with fast
          delivery and excellent customer service.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to make online shopping simple, affordable, and
          enjoyable for everyone. Whether you’re looking for trendy clothes,
          must-have gadgets, or everyday essentials, we’ve got you covered.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Thank you for choosing us. We look forward to serving you and making
          your shopping experience delightful!
        </p>
      </div>
    </div>
  );
};

export default About;
