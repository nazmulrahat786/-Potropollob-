import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Loading from "../../public/Loading";

const AllPlants = () => {
  const allItems = useLoaderData();
  const [allItemsData, setAllItemsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("All");

  const navigate = useNavigate();

  const categories = [
    "All",
    "Succulent",
    "Herb",
    "Flowering Plant",
    "Indoor Plant",
    "Outdoor Plant",
    "Fern",
    "Cactus",
  ];

  useEffect(() => {
    if (allItems && allItems.length > 0) {
      setAllItemsData(allItems);
      setLoading(false);
    }
  }, [allItems]);

  const filteredAndSortedItems = allItemsData
    .filter(
      (item) => filterCategory === "All" || item.category === filterCategory
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-5 px-5 min-h-screen bg-white dark:bg-gray-900">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      <main className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <h2 className="text-xl text-center sm:text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          All Plants
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="w-full sm:w-auto">
            <label
              htmlFor="categoryFilter"
              className="block mb-1 sm:mb-0 font-medium text-gray-800 dark:text-gray-300"
            >
              Filter by Category:
            </label>
            <select
              id="categoryFilter"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-auto">
            <label
              htmlFor="sortOrder"
              className="block mb-1 sm:mb-0 font-medium text-gray-800 dark:text-gray-300"
            >
              Sort by Name:
            </label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Table view for desktop */}
        <div className="hidden sm:block overflow-x-auto shadow rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto sm:table-fixed">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-gray-300 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-gray-300 uppercase tracking-wider">Health Status</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-slate-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAndSortedItems.length > 0 ? (
                filteredAndSortedItems.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="px-6 py-4">
                      <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{item.name}</td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{item.category}</td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{item.healthStatus}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => navigate(`/plantViewDetails/${item._id}`)}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition"
                      >
                        See More
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-slate-500 dark:text-gray-400">No items found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Card view for mobile */}
        <div className="sm:hidden space-y-4">
          {filteredAndSortedItems.length > 0 ? (
            filteredAndSortedItems.map((item) => (
              <div
                key={item._id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="h-20 w-20 rounded object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Category: {item.category}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Health: {item.healthStatus}</p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => navigate(`/plantViewDetails/${item._id}`)}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition"
                  >
                    See More
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-500 dark:text-gray-400">No items found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default AllPlants;
