import React, { useState } from "react";
import { motion } from "framer-motion";

const PatientDetailsForm = ({ formData, onDataChange, onNext }) => {
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onDataChange({ [name]: value });
  };


  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
     
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Patient Details</h2>
      <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter age"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter contact"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300">
            Next
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default PatientDetailsForm;
