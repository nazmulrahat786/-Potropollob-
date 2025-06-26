import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Loading from "../../../public/Loading";

const AllArtCraftItems = () => {
  const allItems = useLoaderData();
  const [allItemsData, setAllItemsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sorting state: 'asc' or 'desc'
  const [sortOrder, setSortOrder] = useState("asc");

  // Filtering state: selected category
  const [filterCategory, setFilterCategory] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    if (allItems && allItems.length > 0) {
      setAllItemsData(allItems);
      setLoading(false);
    }
  }, [allItems]);

  // Get unique categories from data for filter dropdown
  const categories = ["All", ...new Set(allItemsData.map(item => item.category))];

  // Apply filtering & sorting before rendering
  const filteredAndSortedItems = allItemsData
    .filter(item => filterCategory === "All" || item.category === filterCategory)
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-5 px-5">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="py-16 max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-semibold mb-6">All Art & Craft Items</h2>

        {/* Sorting and Filtering Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          {/* Filter by Category */}
          <div>
            <label htmlFor="categoryFilter" className="mr-2 font-medium">Filter by Category:</label>
            <select
              id="categoryFilter"
              value={filterCategory}
              onChange={e => setFilterCategory(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Sort Order */}
          <div>
            <label htmlFor="sortOrder" className="mr-2 font-medium">Sort by Name:</label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1"
            >
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedItems.map((item) => (
            <div
              key={item._id}
              className="border rounded-lg shadow-md flex flex-col"
              style={{ minHeight: "380px" }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  Category: <span className="font-medium">{item.category}</span>
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Status: <span className="font-medium">{item.healthStatus}</span>
                </p>
                <p className="text-gray-600 flex-grow text-sm">
                  {item.description
                    ? item.description.length > 100
                      ? item.description.slice(0, 100) + "..."
                      : item.description
                    : "No description available."}
                </p>
                <button
                  onClick={() => navigate(`/plantViewDetails/${item._id}`)}
                  className="mt-4 bg-green-500 text-white py-2 rounded hover:bg-white hover:text-green-500 border-2 border-green-500 transition"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
          {filteredAndSortedItems.length === 0 && (
            <p className="text-center col-span-full text-gray-500">No items found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllArtCraftItems;
