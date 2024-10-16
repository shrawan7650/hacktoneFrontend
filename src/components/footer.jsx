import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6  mt-10">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        {/* Team Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-indigo-400 mb-3">Team Horizon</h3>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <li className="hover:text-indigo-300">Shrawan</li>
            <li className="hover:text-indigo-300">Ayush</li>
            <li className="hover:text-indigo-300">Neha</li>
            <li className="hover:text-indigo-300">Digant</li>
            <li className="hover:text-indigo-300">Arin</li>
          </ul>
        </div>

        {/* Center Text for Desktop */}
        <div className="hidden md:block text-center text-gray-400">
          Created and Managed by <span className="text-indigo-400">Team Horizon</span>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 md:mt-0 text-center md:text-right text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Team Horizon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
