import React from "react";
import { motion } from "framer-motion";

const HealthDetailsForm = ({
  formData,
  onDataChange,
  onPrevious,
  onSubmit,
  loading,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onDataChange({ [name]: value });
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Health Details</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Heart Rate
          </label>
          <input
            type="number"
            name="heartbeatRate"
            value={formData.heartbeatRate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Heart Rate"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Blood Pressure
          </label>
          <input
            type="number"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Blood Pressure"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Oxygen Saturation
          </label>
          <input
            type="number"
            name="oxygenRate"
            value={formData.oxygenRate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Oxygen Saturation"
            required
          />
        </div>
        <motion.div className="flex justify-between">
          <motion.button
            type="button"
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrevious}
          >
            Previous
          </motion.button>

          {loading ? (
            <div className="flex justify-center items-center w-full">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-500 border-t-transparent"></div>
            </div>
          ) : (
            <motion.button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          )}
        </motion.div>
      </form>
    </motion.div>
  );
};

export default HealthDetailsForm;
