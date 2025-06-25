import { useEffect, useState } from "react";
import Subcategories from "../Subcategories/Subcategories";

const ArtAndCraft = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [loading3, setLoading3] = useState(true);

    useEffect(() => {
        fetch('https://ceramics-and-pottery-server.vercel.app/subcategory')
            .then(res => res.json())
            .then(data => {
                setSubcategories(data);
                setLoading3(false);
                console.log(data);
            })
    }, [])

    if (loading3) {
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    return (
        <div className="w-[90%] lg:max-w-6xl mx-auto my-24">
            <h2 className="text-4xl font-bold text-center my-8">Art & Craft Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    subcategories.map(subcategory => <Subcategories
                        key={subcategory._id}
                        subcategory={subcategory}
                    ></Subcategories>)
                }
            </div>
        </div>
    );
};

export default ArtAndCraft;