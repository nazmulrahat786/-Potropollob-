import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiPlusSquare, FiList, FiMenu } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi"; // For All Plants icon

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to home page on back button press from dashboard
  useEffect(() => {
    if (location.pathname.startsWith("/dashboard")) {
      history.replaceState(null, "", "/"); // Set "/" as previous entry
      history.pushState(null, "", location.pathname); // Re-add current dashboard path

      const handlePopState = () => {
        navigate("/", { replace: true }); // Go home
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [location, navigate]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Prevent scrolling only on mobile when sidebar is open
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isSidebarOpen]);

  // Close sidebar on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isSidebarOpen) {
        closeSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSidebarOpen]);

  // Focus trap inside sidebar when open
  useEffect(() => {
    if (!isSidebarOpen) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
    const sidebarNode = sidebarRef.current;
    const focusableElements = sidebarNode.querySelectorAll(focusableElementsString);
    if (focusableElements.length === 0) return;

    const firstElem = focusableElements[0];
    const lastElem = focusableElements[focusableElements.length - 1];

    const trapFocus = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElem) {
          e.preventDefault();
          lastElem.focus();
        }
      } else {
        if (document.activeElement === lastElem) {
          e.preventDefault();
          firstElem.focus();
        }
      }
    };

    sidebarNode.addEventListener("keydown", trapFocus);
    firstElem.focus();

    return () => sidebarNode.removeEventListener("keydown", trapFocus);
  }, [isSidebarOpen]);

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded transition ${
      isActive
        ? "bg-white text-green-700 font-semibold"
        : "hover:bg-green-600 focus:bg-green-600 focus:outline-none"
    }`;

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900 relative">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <nav
        ref={sidebarRef}
        aria-label="Dashboard navigation"
        className={`fixed top-0 left-0 w-64 bg-green-700 text-white p-6 z-50 h-full transform transition-transform duration-300 ease-in-out will-change-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaLeaf className="text-white text-3xl" aria-hidden="true" />
            <span>Dashboard</span>
          </div>
          <button
            onClick={closeSidebar}
            className="text-white text-2xl"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4 font-medium">
          <NavLink to="/dashboard" end className={navLinkClasses} onClick={closeSidebar}>
            <FiHome aria-hidden="true" /> Overview
          </NavLink>
           <NavLink to="/dashboard/all-plants" className={navLinkClasses} onClick={closeSidebar}>
            <GiPlantSeed aria-hidden="true" /> All Plants
          </NavLink>
          <NavLink to="/dashboard/add-plant" className={navLinkClasses} onClick={closeSidebar}>
            <FiPlusSquare aria-hidden="true" /> Add Plant
          </NavLink>
          <NavLink to="/dashboard/my-plants" className={navLinkClasses} onClick={closeSidebar}>
            <FiList aria-hidden="true" /> My Plants
          </NavLink>
         
        </nav>
      </nav>

      {/* Desktop Sidebar */}
      <aside
        className="w-64 bg-green-700 text-white p-6 hidden md:block sticky top-0 h-screen overflow-y-auto"
        aria-label="Dashboard navigation"
      >
        <div className="flex items-center gap-2 text-2xl font-bold mb-10">
          <FaLeaf className="text-white text-3xl" aria-hidden="true" />
          <span>Dashboard</span>
        </div>
        <nav className="flex flex-col gap-4 font-medium">
          <NavLink to="/dashboard" end className={navLinkClasses}>
            <FiHome aria-hidden="true" /> Overview
          </NavLink>
            <NavLink to="/dashboard/all-plants" className={navLinkClasses}>
            <GiPlantSeed aria-hidden="true" /> All Plants
          </NavLink>
          <NavLink to="/dashboard/add-plant" className={navLinkClasses}>
            <FiPlusSquare aria-hidden="true" /> Add Plant
          </NavLink>
          <NavLink to="/dashboard/my-plants" className={navLinkClasses}>
            <FiList aria-hidden="true" /> My Plants
          </NavLink>
        
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto pt-16 md:pt-0 bg-white dark:bg-gray-900 rounded-xl shadow">
        {/* Mobile Top Bar */}
        <div className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-300 dark:border-gray-700 z-50">
          <button
            onClick={toggleSidebar}
            className="text-2xl text-green-700"
            aria-label="Open sidebar menu"
          >
            <FiMenu />
          </button>
          <div className="flex items-center gap-2 text-xl font-bold text-green-700">
            <FaLeaf aria-hidden="true" />
            Dashboard
          </div>
        </div>

        {/* Page Content */}
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
