import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import animationData from '../../assets/404.json';
import Lottie from "lottie-react";

const Page404 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md"
      >
       

    <div className="flex justify-center items-center w-64 h-64 mx-auto mb-4">
      <Lottie animationData={animationData} loop={true} style={{ width: '100%', height: '100%' }} />
    </div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Page Not Found
    </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link to="/" className="inline-block">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-200 shadow-md">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Page404;
