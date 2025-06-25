import { NavLink, Outlet } from "react-router-dom";
import { FiHome, FiPlusSquare, FiList } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const DashboardLayout = () => {
    
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 hidden md:block sticky top-0 h-screen overflow-y-auto">
        <div className="flex items-center gap-2 text-2xl font-bold mb-10">
          <FaLeaf className="text-white text-3xl" />
          <span>Dashboard</span>
        </div>
        <nav className="flex flex-col gap-4 font-medium">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition ${
                isActive
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`
            }
          >
            <FiHome /> Overview
          </NavLink>
          <NavLink
            to="/dashboard/add-plant"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition ${
                isActive
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`
            }
          >
            <FiPlusSquare /> Add Plant
          </NavLink>
          <NavLink
            to="/dashboard/my-plants"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition ${
                isActive
                  ? "bg-white text-green-700 font-semibold"
                  : "hover:bg-green-600"
              }`
            }
          >
            <FiList /> My Plants
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="bg-white p-6 rounded-xl shadow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
