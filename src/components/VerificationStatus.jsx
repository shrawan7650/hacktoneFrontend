import React from "react";
import { Link } from "react-router-dom";

const VerificationStatus = ({ verificationStatus }) => {
  console.log("verificationStatus", verificationStatus);

  return (
    <div
      className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 border border-gray-300"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Data Verification
      </h2>

      <div className="flex flex-col items-center">
        {verificationStatus ? (
          verificationStatus ===
          "Data match! The CID-fetched data matches the database hash." ? (
            <p className="text-green-600 font-semibold text-center break-words">
              {verificationStatus}
            </p>
          ) : (
            <p className="text-red-600 font-semibold text-center break-words">
              {verificationStatus}
            </p>
          )
        ) : (
          <div className="flex justify-center items-center">
            <img
              src="https://www.shutterstock.com/image-vector/identification-card-verified-check-mark-600nw-2273995241.jpg"
              alt="Verification Pending"
              className="w-48 h-48 object-contain" // Adjust size of image
            />
          </div>
        )}
      </div>

      {/* Button Section */}
      <div className="border-t border-gray-300 w-full mt-4 pt-4 flex justify-center">
      <Link to="fetch-by-id">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Fetch by ID
        </button></Link>
      </div>
    </div>
  );
};

export default VerificationStatus;
