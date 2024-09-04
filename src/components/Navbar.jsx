import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const linkHoverEffect = {
    scale: 1.1,
    color: '#FFD700', // Example hover color change
  };

  return (
    <nav className="flex justify-between items-center p-6">
      <motion.div
        className="text-white text-2xl font-bold"
        whileHover={{ scale: 1.1, color: '#FFD700' }}
      >
        V.I.B.E.
      </motion.div>
      <div className="space-x-6 text-white">
        {['Home', 'About Us', 'Destinations', 'Packages', 'Blog', 'Contact'].map((item) => (
          <motion.a
            href="#"
            key={item}
            whileHover={linkHoverEffect} // Applying hover effect directly
            style={{ display: 'inline-block' }} // Ensures the effect applies to the whole link
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.button
        className="bg-gray-700 text-white px-4 py-2 rounded-full"
        whileHover={{ scale: 1.1, backgroundColor: '#556B2F' }}
      >
        Book Now
      </motion.button>
    </nav>
  );
}

export default Navbar;
