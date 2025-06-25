import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import AllArtCraftItem from "../AllArtCraftItem/AllArtCraftItem";

const AllArtCraftItems = () => {
  const allItems = useLoaderData();
  const [allItemsData, setAllItemsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allItems && allItems.length > 0) {
      setAllItemsData(allItems);
      setLoading(false);
    }
  }, [allItems]);

  if (loading) {
    return (
      <p className="text-center mt-12">
        <span className="loading loading-spinner loading-lg"></span>
      </p>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="py-16 max-w-6xl mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="overflow-x-auto border rounded-lg">
            <table className="table w-full">
              {/* table head */}
              <thead>
                <tr className="text-base md:text-lg font-semibold">
                  <th>Name</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allItemsData.map((item) => (
                  <AllArtCraftItem key={item._id} items={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllArtCraftItems;
