import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PatientList = ({ title, patientDetilas, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);
 console.log("patientDetilas",patientDetilas)
  // Filter patients by search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = patientDetilas.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPatients(filtered||[]);
    } else {
      setFilteredPatients(patientDetilas||[]);
    }
  }, [searchTerm, patientDetilas]);

  return (
    <div className="p-4 bg-white rounded-md overflow-y-scroll overflow-x-auto no-scrollbar shadow-md w-full h-full">
      <h2 className="text-center text-lg font-bold text-green-600">{title}</h2>

      {/* Search Input */}
      <div className="mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search by name"
        />
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center md:mt-44 mt-10">
          <div className="h-10 w-10 border-4 border-t-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-x-auto mt-4">
          {/* Table */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">ID</th>
                <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">Name</th>
                <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">Age</th>
                <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">Contact</th>
                <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-600">Gender</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b text-sm text-gray-800">{patient._id}</td>
                    <td className="py-2 px-4 border-b text-sm text-gray-800">{patient.name}</td>
                    <td className="py-2 px-4 border-b text-sm text-gray-800">{patient.age}</td>
                    <td className="py-2 px-4 border-b text-sm text-gray-800">{patient.contact}</td>
                    <td className="py-2 px-4 border-b text-sm text-gray-800">{patient.gender}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 px-4 text-center text-sm text-red-600"
                  >
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PatientList;
