import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";
import { Toaster } from 'react-hot-toast';

import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Services from "../Services/Services";
import PromoSection from "../PromoSection/PromoSection";
import Reviews from "../Reviews/Reviews";
import NewPlants from "../../components/NewPlants/NewPlants";

import { ToastContainer } from "react-toastify";

const Home = () => {


  return (
    <div className=" text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <Banner />
     
      <NewPlants></NewPlants>
      <Services />
      <PromoSection />
      <Reviews />
      <Footer />
     <Toaster position="top-center" />
   <ToastContainer position="top-center" autoClose={3000} />

    </div>
  );
};

export default Home;
