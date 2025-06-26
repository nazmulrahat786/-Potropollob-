import { useEffect, useState } from "react";
import Loading from "../../../public/Loading";
import NewPlantCard from "./NewPlantCard"; // adjust path as needed

const NewPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://potropollob-server-side.vercel.app/addplants")
      .then((res) => res.json())
      .then((data) => {
        const latestSix = data.reverse().slice(0, 8);
        setPlants(latestSix);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Loading />
      </div>
    );
  }

  if (plants.length === 0) {
    return (
      <div className="p-6 text-center text-slate-500">
        No plants found at the moment.
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-24 py-6">
      <h2 className="text-2xl text-green-500 font-bold mb-8 text-center ">
        Newest Plants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plants.map((plant) => (
          <NewPlantCard key={plant._id} item={plant} />
        ))}
      </div>
    </div>
  );
};

export default NewPlants;
