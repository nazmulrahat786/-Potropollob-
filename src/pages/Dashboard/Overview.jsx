import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaLeaf, FaListAlt, FaUser, FaPlus, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router-dom";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const total = useLoaderData();

  const [myItems, setMyItems] = useState([]);
  const [totalUser, setTotalUser] = useState([]);
  
 useEffect(() => {
    fetch("https://potropollob-server-side.vercel.app/email-count")
      .then((res) => res.json())
      .then((data) => setTotalUser(data.totalEmails))
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    let intervalId;

    const fetchMyPlants = () => {
      if (user) {
        fetch(`https://potropollob-server-side.vercel.app/myplants/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setMyItems(data);
          })
          .catch((err) => console.error("Error fetching my plants:", err));
      }
    };

    fetchMyPlants(); // initial fetch

    // Poll every 20 seconds to update without refresh
    intervalId = setInterval(fetchMyPlants, 20000);

    return () => clearInterval(intervalId);
  }, [user]);

  // Similarly, you can make total plants auto-update by polling the API
  // But you are getting total from useLoaderData which won't auto-update,
  // So let's create a state and poll total plants endpoint too

  const [totalPlantsCount, setTotalPlantsCount] = useState(total.length);

  useEffect(() => {
    let intervalId;


    const fetchTotalPlants = () => {
      fetch("https://potropollob-server-side.vercel.app/plants")
        .then((res) => res.json())
        .then((data) => {
          setTotalPlantsCount(data.length);
        })
        .catch((err) => console.error("Error fetching total plants:", err));
    };

    fetchTotalPlants(); // initial fetch

    // Poll every 20 seconds
    intervalId = setInterval(fetchTotalPlants, 20000);

    return () => clearInterval(intervalId);
  }, []);

  const totalPlants = totalPlantsCount;
  const myPlants = myItems.length;
  const today = new Date().toLocaleDateString();

  return (
    <div className="space-y-10">
      {/* Header Section */}
<div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between bg-green-100 p-6 rounded-xl shadow space-y-4 md:space-y-0 md:space-x-6">
  <div className="text-center md:text-left">
    <h1 className="text-3xl font-bold text-green-700">
      Hello, {user?.displayName || "User"} 👋
    </h1>
    <p className="text-gray-600">Logged in as: {user?.email}</p>
    <p className="text-sm text-gray-500 mt-1">Today is: {today}</p>
  </div>
  <img
    src={user?.photoURL || "https://i.ibb.co/TmsrwQs/user.png"}
    alt="User Avatar"
    className="w-16 h-16 rounded-full border-4 border-green-400 shadow-md object-cover"
  />
</div>



      {/* Stats Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Total Plants */}
  <motion.div
    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex flex-col items-center">
      {/* icon + label aligned horizontally */}
      <div className="flex items-center gap-3">
        <FaListAlt className="text-4xl text-green-600" />
        <h2 className="text-lg font-semibold">Total Plants</h2>
      </div>
      {/* count centered below */}
      <p className="text-2xl font-bold text-green-700 mt-4 text-center">{totalPlants}</p>
    </div>
  </motion.div>

  {/* My Plants */}
  <motion.div
    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3">
        <FaLeaf className="text-4xl text-green-600" />
        <h2 className="text-lg font-semibold">My Plants</h2>
      </div>
      <p className="text-2xl font-bold text-green-700 mt-4 text-center">{myPlants}</p>
    </div>
  </motion.div>

  {/* Registered Users */}
  <motion.div
    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3">
        <FaUser className="text-4xl text-green-600" />
        <h2 className="text-lg font-semibold">Registered Users</h2>
      </div>
      <p className="text-2xl font-bold text-green-700 mt-4 text-center">{totalUser}</p>
    </div>
  </motion.div>
</div>


      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-green-700">Let’s Grow Something Today 🌱</h3>
          <p className="text-gray-600 mt-1">
            Track your plant care, add new ones, or view your collection.
          </p>
        </div>
        <div className="flex gap-4">
          <Link to="/dashboard/add-plant">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow transition">
              <FaPlus /> Add Plant
            </button>
          </Link>
          <Link to="/dashboard/my-plants">
            <button className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-md shadow transition">
              <FaSeedling /> My Plants
            </button>
          </Link>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-400">
        <p className="text-green-800 font-medium">
          🌿 Tip: Keep your plants healthy by checking moisture levels weekly. Don’t forget to name your plants!
        </p>
      </div>
    </div>
  );
};

export default Overview;
