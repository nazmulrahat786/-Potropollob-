import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";
import CraftItems from "../CraftItems/CraftItems";

import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Services from "../Services/Services";
import PromoSection from "../PromoSection/PromoSection";
import Reviews from "../Reviews/Reviews";
import NewPlants from "../../components/NewPlants/NewPlants";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://potropollob-server-side.vercel.app/addplants`)
        .then((res) => res.json())
        .then((data) => {
          setMyItems(data);
          console.log(data);
        });
    }
  }, [user]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <Banner />
      <CraftItems myItems={myItems} />
      <NewPlants></NewPlants>
      <Services />
      <PromoSection />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
