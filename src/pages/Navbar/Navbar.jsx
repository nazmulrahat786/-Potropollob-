import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logged out successfully");
        // Optionally redirect or show notification
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
          to="/allArtCraftItems" // If this should be "All Plants", change the route too
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
    <div
      className={`sticky top-0 z-50 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-green-500 text-white"
      }`}
    >
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
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
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
          <button
            onClick={toggleTheme}
            className="btn btn-sm bg-white text-green-700 hover:bg-gray-200"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

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
