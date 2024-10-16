import React from "react";
import PatientList from "./PatientList";
import InputForm from "./InputForm";
import VerificationStatus from "./VerificationStatus";
import PatientDetailsForm from "./PatientDetailsForm";
import MainForm from "./MainForm";
import { motion } from "framer-motion"; // Import Framer Motion

const MainContent = ({patientDetails,verificationStatus,onSave,fetchParentsDetials}) => {
  console.log("patientDetilas",patientDetails)
  return (
    <>
      {/* Animated Heading */}
      <motion.h1
  className="text-3xl text-red-800 border-1 w-full border-black font-bold text-center"
  initial={{ x: "-100vw" }} // Start completely off the left side of the screen
  animate={{ x: "100vw" }} // Move completely off the right side of the screen
  transition={{
    duration: 2000,// Adjust duration for a slower or faster movement
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Restart the animation from the left side after it ends
    ease: "linear", // Linear easing to maintain a constant speed
  }}
>
  Health Monitoring System Horzion
</motion.h1>

      <div className="container mx-auto p-4 grid mt-16 grid-cols-1 lg:grid-cols-3 gap-4">
        {" "}
        {/* Responsive Grid */}
        {/* Patient List (Left Column) */}
        <div className=" rounded-lg">
          <PatientList title="Patient List" patientDetilas={patientDetails}  />
        </div>
        {/* Main Form (Center Column) */}
        <div className=" rounded-lg">
          <MainForm onSave={onSave} fetchParentsDetials={fetchParentsDetials} />
        </div>
        {/* Verification Status (Right Column) */}
        <div className=" rounded-lg">
          <VerificationStatus verificationStatus={verificationStatus} />
        </div>
      </div>
    </>
  );
};

export default MainContent;
