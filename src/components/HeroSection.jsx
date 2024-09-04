import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white">
      <motion.h1 whileHover={{ scale: 1.2}} transition={{duration:.25}} className="text-5xl font-bold mb-4">Adventure awaits, Let's make memories together.</motion.h1>
      <motion.p whileHover={{ scale: 1.2}} transition={{duration:.25}} className="text-xl mb-8">Find our awesome tour packages</motion.p>
      <div className="relative mb-8">
        <input type="text" placeholder="How are you feeling today..." className="px-4 py-2 rounded-full w-80 text-gray-700" />
        <i className="fas fa-search absolute top-3 right-4 text-gray-500"></i>
      </div>
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex space-x-4">
        <div className="destination">
        <h5>Destination</h5>
        <input type="text" placeholder="Destination" className="px-4 py-2 rounded-lg bg-white bg-opacity-50 text-gray-700" />
        </div>
        <div className="mood">
        <h5>Mood</h5>
        <select id="mood"className="px-4 py-2 rounded-lg bg-white bg-opacity-50 text-gray-700">
          <option>Thrill</option>
          <option>Calm</option>
          <option>Spiritual</option>
          <option>Party</option>
          <option>𝓯𝓻𝓮𝓪𝓴𝔂</option>
        </select>
        </div>
        <div className="date">
        <h5>Date</h5>
        <input id='date' type="date" className="px-4 py-2 rounded-lg bg-white bg-opacity-50 text-gray-700" />
        </div>
        <div className="pack">
        <h5>Pack</h5>
        <select id='pack' className="px-4 py-2 rounded-lg bg-white bg-opacity-50 text-gray-700">
          <option>Cooperative</option>
          <option>Solo</option>
          <option>Family</option>
          <option>Friends</option>
        </select>
        </div>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Search</button>
      </div>
    </div>
  );
}

export default HeroSection;
