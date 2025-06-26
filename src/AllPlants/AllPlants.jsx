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

        <div className="overflow-x-auto shadow rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto sm:table-fixed">
            {/* Table header hidden on small screens */}
            <thead className="bg-gray-50 dark:bg-gray-800 hidden sm:table-header-group">
              <tr>
                <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Health Status
                </th>
                <th className="px-3 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAndSortedItems.length > 0 ? (
                filteredAndSortedItems.map((item) => (
                  <tr
                    key={item._id}
                    className="block sm:table-row hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer mb-6 sm:mb-0"
                  >
                    <td
                      className="block sm:table-cell px-3 sm:px-6 py-2 whitespace-normal sm:whitespace-nowrap relative"
                      data-label="Image"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 sm:h-16 sm:w-16 rounded object-cover mx-auto sm:mx-0"
                      />
                    </td>
                    <td
                      className="block sm:table-cell px-3 sm:px-6 py-2 whitespace-normal sm:whitespace-nowrap text-gray-900 dark:text-gray-100 font-semibold text-sm sm:text-base"
                      data-label="Name"
                    >
                      {item.name}
                    </td>
                    <td
                      className="block sm:table-cell px-3 sm:px-6 py-2 whitespace-normal sm:whitespace-nowrap text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                      data-label="Category"
                    >
                      {item.category}
                    </td>
                    <td
                      className="block sm:table-cell px-3 sm:px-6 py-2 whitespace-normal sm:whitespace-nowrap text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                      data-label="Health Status"
                    >
                      {item.healthStatus}
                    </td>
                    <td
                      className="block sm:table-cell px-3 sm:px-6 py-2 whitespace-normal sm:whitespace-nowrap text-center"
                      data-label="Actions"
                    >
                      <button
                        onClick={() =>
                          navigate(`/plantViewDetails/${item._id}`)
                        }
                        className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm rounded transition"
                      >
                        See More
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-3 sm:px-6 py-4 whitespace-nowrap text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base"
                  >
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AllPlants;
