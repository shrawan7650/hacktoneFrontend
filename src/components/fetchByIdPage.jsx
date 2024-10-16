import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FetchByIdPage = () => {
  const [id, setId] = useState("");
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();

  const fetchPatientById = async () => {
    setLoading(true);
    setError(null); // Reset error before new request
    setPatient(null); // Reset patient details before new request

    try {
      const response = await axios.get(`http://localhost:5000/api/patient-details/${id}`);
      console.log("response",response)
      if (response.data) {
        setPatient(response.data); // Set patient data
        setId("")
      } else {
        setError("No patient found with the provided ID.");
      }
    } catch (error) {
      setError("Error fetching patient data. Please try again.");
      console.error("Error fetching patient data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
<Link to="/">      <h2 className="flex justify-start text-6xl">&larr;</h2></Link>
      <h2 className="text-2xl font-bold mb-4 text-center">Fetch Patient by ID</h2>

      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Patient ID"
        className="border border-gray-300 p-2 rounded mb-4 w-full"
      />

      <button
        onClick={fetchPatientById}
        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-200"
      >
        {loading ? "Fetching..." : "Fetch"}
      </button>

      {loading && (
        <div className="mt-4 flex justify-center">
          <div className="h-8 w-8 border-4 border-t-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600 font-semibold text-center">
          {error}
        </div>
      )}

      {patient && !loading && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-center">Patient Details</h3>
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Field</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">ID</td>
                <td className="py-2 px-4 border-b border-gray-300">{patient._id}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Name</td>
                <td className="py-2 px-4 border-b border-gray-300">{patient.name}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Age</td>
                <td className="py-2 px-4 border-b border-gray-300">{patient.age}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Contact</td>
                <td className="py-2 px-4 border-b border-gray-300">{patient.contact}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FetchByIdPage;
