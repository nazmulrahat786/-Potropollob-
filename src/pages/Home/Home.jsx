import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";

import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Services from "../Services/Services";
import PromoSection from "../PromoSection/PromoSection";
import Reviews from "../Reviews/Reviews";
import NewPlants from "../../components/NewPlants/NewPlants";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://potropollob-server-side.vercel.app/addplants`)
        .then((res) => res.json())
        .then((data) => {
          setMyItems(data);
      
        });
    }
  }, [user]);

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
