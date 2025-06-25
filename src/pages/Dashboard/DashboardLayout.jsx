import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiHome, FiPlusSquare, FiList, FiMenu } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded transition ${
      isActive ? "bg-white text-green-700 font-semibold" : "hover:bg-green-600"
    }`;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-green-700 text-white p-6 z-50 h-full transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaLeaf className="text-white text-3xl" />
            <span>Dashboard</span>
          </div>
          <button onClick={closeSidebar} className="text-white text-2xl">
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4 font-medium">
          <NavLink to="/dashboard" end className={navLinkClasses} onClick={closeSidebar}>
            <FiHome /> Overview
          </NavLink>
          <NavLink to="/dashboard/add-plant" className={navLinkClasses} onClick={closeSidebar}>
            <FiPlusSquare /> Add Plant
          </NavLink>
          <NavLink to="/dashboard/my-plants" className={navLinkClasses} onClick={closeSidebar}>
            <FiList /> My Plants
          </NavLink>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-6 hidden md:block sticky top-0 h-screen overflow-y-auto">
        <div className="flex items-center gap-2 text-2xl font-bold mb-10">
          <FaLeaf className="text-white text-3xl" />
          <span>Dashboard</span>
        </div>
        <nav className="flex flex-col gap-4 font-medium">
          <NavLink to="/dashboard" end className={navLinkClasses}>
            <FiHome /> Overview
          </NavLink>
          <NavLink to="/dashboard/add-plant" className={navLinkClasses}>
            <FiPlusSquare /> Add Plant
          </NavLink>
          <NavLink to="/dashboard/my-plants" className={navLinkClasses}>
            <FiList /> My Plants
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button onClick={toggleSidebar} className="text-2xl text-green-700">
            <FiMenu />
          </button>
          <div className="flex items-center gap-2 text-xl font-bold text-green-700">
            <FaLeaf />
            Dashboard
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
