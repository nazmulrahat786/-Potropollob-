import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";
import { FaHeartbeat } from "react-icons/fa";

const CraftItem = ({ item }) => {
    const { _id, name, description, category, healthStatus, image } = item;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-[242px] object-cover" src={image} alt={name} />
            </figure>
            <div className="card-body">
                <div className="flex gap-8">
                    <h1 className="flex items-center gap-2 text-base font-bold">
                        <span className="text-green-600 text-xl"><BiSolidCategory /></span> {category}
                    </h1>
                    <h1 className="flex items-center gap-2 text-base font-bold">
                        <span className="text-red-500 text-xl"><FaHeartbeat /></span> {healthStatus}
                    </h1>
                </div>

                <h2 className="card-title font-bold mt-2">{name}</h2>

                {description.length > 150 ? (
                    <p>
                        {description.slice(0, 150)}
                        <span className="text-red-500"> ...See more</span>
                    </p>
                ) : (
                    <p>{description}</p>
                )}

                <div className="flex justify-end mt-4">
                    <Link to={`/plantViewDetails/${_id}`}>
                        <div className="card-actions">
                            <button className="btn bg-green-500 text-white">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const NewPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://potropollob-server-side.vercel.app/addplants")
            .then((res) => res.json())
            .then((data) => {
                // Show latest 6 plants
                const latestSix = data.reverse().slice(0, 6);
                setPlants(latestSix);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching plants:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-10">Loading plants...</div>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Newest 6 Plants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plants.map((plant) => (
                    <CraftItem key={plant._id} item={plant} />
                ))}
            </div>
        </div>
    );
};

export default NewPlants;
