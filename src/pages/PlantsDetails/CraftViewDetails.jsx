
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import { MdOutlineWaterDrop } from "react-icons/md";

import { useLoaderData, useParams } from "react-router-dom";
import Loading from "../../../public/Loading";

const CraftViewDetails = () => {
  const { id } = useParams();
  const allCraftItems = useLoaderData();

  if (!allCraftItems) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center py-5 px-5">
               <Loading></Loading>
            </div>
        <Footer />
      </>
    );
  }

  const expectedItem = allCraftItems.find((item) => item._id === id);

  if (!expectedItem) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center text-red-600 font-bold text-xl">
          Craft item not found.
        </div>
        <Footer />
      </>
    );
  }

  const {
    name,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userName,
    userEmail,
    image,
  } = expectedItem;

  return (
    <div >
      
      <main className=" flex gap-7 flex-col justify-between min-h-screen">
        <Navbar />
        <div className="w-[90%] max-w-5xl mx-auto shadow-2xl border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 p-6">
            {/* Image Section */}
      <div className="lg:w-2/5 relative group rounded-xl overflow-hidden shadow-md aspect-w-4 aspect-h-3">
  <img
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-lg"
    src={image}
    alt={name || "Plant image"}
    loading="lazy"
    role="img"
  />
  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs sm:text-sm font-semibold uppercase rounded-full px-3 py-1 shadow-lg">
    {category}
  </div>
</div>


            {/* Details Section */}
            
            <section className="lg:w-3/5 flex flex-col justify-between">
             <div className="pb-4">
                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold  leading-tight">
                  {name}
                </h1>
                <p className="y  whitespace-pre-line leading-relaxed text-sm sm:text-base">
                  {description}
                </p>

            </div>
           
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 text-gray-700 font-medium text-sm sm:text-base">
                
                <div className="flex items-center justify-between bg-green-50 rounded-lg px-4 py-2 shadow-sm">
                  <span className="font-semibold">Care Level</span>
                  <span className="text-green-700 capitalize">{careLevel}</span>
                </div>
                <div
                  className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-2 shadow-sm"
                  title="Watering Frequency"
                >
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <MdOutlineWaterDrop className="text-xl" />
                    <span>Water every</span>
                  </div>
                  <span>{wateringFrequency} day(s)</span>
                </div>
                <div className="flex items-center justify-between bg-yellow-50 rounded-lg px-4 py-2 shadow-sm">
                  <span className="font-semibold">Last Watered</span>
                  <span>{lastWateredDate}</span>
                </div>
                <div className="flex items-center justify-between bg-purple-50 rounded-lg px-4 py-2 shadow-sm">
                  <span className="font-semibold">Next Watering</span>
                  <span>{nextWateringDate}</span>
                </div>
                <div className="flex items-center justify-between bg-red-50 rounded-lg px-4 py-2 shadow-sm">
                  <span className="font-semibold">Health Status</span>
                  <span
                    className={`font-bold ${
                      healthStatus.toLowerCase() === "healthy"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {healthStatus}
                  </span>
                </div>
              </div>

              {/* Main Info */}
              <div className="space-y-6">
               
                <address className="not-italic space-y-3 mt-8 border-t border-gray-200 pt-6 text-sm sm:text-base">
                  <p className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                    <span className="text-cyan-600">👤</span> User Name:{" "}
                    <span className="font-normal">{userName}</span>
                  </p>
                  <p className="flex items-center gap-2 text-base sm:text-lg font-semibold">
                    <span className="text-teal-600">📧</span> User Email:{" "}
                    <span className="font-normal">{userEmail}</span>
                  </p>
                </address>
              </div>
            </section>
          </div>
          
        </div>
        <Footer />
      </main>
      
    </div>
  );
};

export default CraftViewDetails;
