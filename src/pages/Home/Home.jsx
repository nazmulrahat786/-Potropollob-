import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";
import CraftItems from "../CraftItems/CraftItems";

import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Services from "../Services/Services";
import PromoSection from "../PromoSection/PromoSection";
import Reviews from "../Reviews/Reviews";

// import { useLoaderData } from "react-router-dom";

const Home = () => {
    const { user } = useContext(AuthContext);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://potropollob-server-side.vercel.app/addplants`)
                .then(res => res.json())
                .then(data => {
                    setMyItems(data);
                    console.log(data);
                })
        }
    }, [user]);

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <CraftItems
                myItems={myItems}
            ></CraftItems>
           <Services></Services>
           <PromoSection></PromoSection>
           <Reviews></Reviews>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;