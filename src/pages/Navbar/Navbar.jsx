import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allArtCraftItems"
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
        >
          All Plants
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active-link" : "default-link"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive ? "active-link" : "default-link"
          }
        >
          Support
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-green-500 text-white">
      <div className="navbar max-w-6xl mx-auto">
        {/* Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white text-black"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="w-20 h-18 flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-2xl object-cover"
                src={logo}
                alt="Logo"
              />
              <h2 className="text-3xl font-bold invisible md:visible">
                Potropollob
              </h2>
            </div>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
            {navLinks}
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end flex items-center gap-4">
          {/* Theme toggle */}
          <label className="flex cursor-pointer gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
              className="toggle theme-controller"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {/* User info and buttons */}
          {user ? (
            <>
              <img
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
                src={user?.photoURL || "https://i.ibb.co/TmsrwQs/user.png"}
                alt="User"
                title={user?.displayName || "User"}
              />
              <button
                onClick={handleLogout}
                className="btn px-4 md:px-6 bg-white text-green-700 ml-4 hover:bg-gray-200"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex">
              <Link to="/login">
                <button className="py-2 px-4 md:px-6 rounded font-semibold bg-white text-green-700">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="py-2 px-4 md:px-6 rounded font-semibold bg-white text-green-700 ml-2">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
