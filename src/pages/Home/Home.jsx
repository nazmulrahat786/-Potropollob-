import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Slider";
import CraftItems from "../CraftItems/CraftItems";
import ArtAndCraft from "../ArtAndCraft/ArtAndCraft";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Traditional from "../Traditional/Traditional";
import ShowCase from "../ShowCase/ShowCase";
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
            <ArtAndCraft></ArtAndCraft>
            <ShowCase></ShowCase>
            <Traditional></Traditional>
            <Footer></Footer>
        </div>
    );
};

export default Home;