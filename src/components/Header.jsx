import React from "react";
import { motion } from "framer-motion";
import image from "../assets/hac.jpg";

const Header = () => {
  return (
    <header className="flex justify-center items-center rounded-md p-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="flex items-center w-full justify-center  space-x-4">
        {/* Left Navigation Button */}
        {/* <motion.button
          className="text-lg transition-transform duration-300 hover:scale-110"
          whileHover={{ scale: 1.15 }}
        >
          <img src={image} className="w-12 h-12 rounded-full object-cover shadow-lg" alt="Logo" />
        </motion.button> */}

        {/* Title with Animation */}
        <motion.h2
          className="text-3xl font-bold text-center hidden md:block text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          HORIZON
        </motion.h2>

        {/* Right Navigation Button */}
        {/* <motion.button
          className="text-lg transition-transform duration-300 hover:scale-110"
          whileHover={{ scale: 1.15 }}
        >
          <img src={image} className="w-12 h-12 rounded-full object-cover shadow-lg" alt="Logo" />
        </motion.button> */}
      </div>

      {/* Footer Text for small screens */}
      <motion.span
        className="md:hidden text-sm text-white mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Team Horizon
      </motion.span>
    </header>
  );
};

export default Header;
