import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import "./Navbar.css";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtCraftItems">All Plants</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addCraftItems">Add Plant</NavLink>
          </li>
          <li>
            <NavLink to="/myArtCraftList">My Plants</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/support">Support</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-500 sticky top-0 z-50">
      <div className="navbar max-w-6xl mx-auto text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <div className="w-20 h-18 flex items-center gap-4">
              <img
                className="w-full h-full rounded-2xl object-cover"
                src="https://potropollob-58633.web.app/assets/logo-BEnKhIEz.png"
                alt="Logo"
              />
              <h2 className="text-3xl font-bold invisible md:visible">
                Pottery
              </h2>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <img
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
                src={user?.photoURL || "https://i.ibb.co/TmsrwQs/user.png"}
                alt="User"
                title={user.displayName}
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
