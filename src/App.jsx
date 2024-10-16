import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import FetchByIdPage from "./components/fetchByIdPage"; // Import the fetch by ID page
import { motion } from "framer-motion";
import axios from "axios";

const App = () => {
  const [loader, setLoader] = useState(true);
  const [patientDetails, setParentsDetails] = useState();
  const [verificationStatus, setVerificationStatus] = useState("");

  const onSave = (data) => {
    setVerificationStatus(data);
  };

  const fetchParentsDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/patient-details"
      );
      console.log("response2", response);
      setParentsDetails(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchParentsDetails();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Loader animation
  const loaderVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: [1.1, 0.9],
      transition: { duration: 0.8, yoyo: Infinity },
    },
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 overflow-hidden">
        {/* Loader */}
        {loader ? (
          <motion.div
            className="flex justify-center items-center h-screen"
            initial="hidden"
            animate="visible"
            variants={loaderVariant}
          >
            <div
              className="h-20 w-20 border-4 border-t-blue-500 border-solid rounded-full animate-spin"
              role="status"
            />
          </motion.div>
        ) : (
          // App Content with Routes
          <Routes>
            {/* Main Page Route */}
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Header />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  >
                    <MainContent
                      onSave={onSave}
                      fetchParentsDetails={fetchParentsDetails}
                      verificationStatus={verificationStatus}
                      patientDetails={patientDetails}
                    />
                  </motion.div>
                  <Footer />
                </motion.div>
              }
            />
            {/* Fetch by ID Page Route */}
            <Route path="/fetch-by-id" element={<FetchByIdPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
