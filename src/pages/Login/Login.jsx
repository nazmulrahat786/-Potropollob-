import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json";

// Navbar and Footer
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signIn, googleLogin, user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" />;
  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login successfully");
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else {
          toast.error("Login failed. Please try again.");
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google login successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google login failed. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center  px-4 py-10">
        <div className="bg-white shadow-md rounded-lg p-8 w-[90%] max-w-3xl flex flex-col lg:flex-row-reverse items-center gap-8">
          
          {/* Animation */}
          <div className="w-full lg:w-1/2">
            <Lottie animationData={loginAnimation} loop autoplay />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-center text-green-500 mb-6">Login Now!</h2>

            <form onSubmit={handleLoginForm}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6 relative">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-12 text-xl"
                >
                  {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all font-bold"
              >
                Login
              </button>
            </form>

            <div className="divider text-gray-600 mt-4">Or login with</div>

            <div className="text-center mt-4">
              <button
                onClick={handleGoogleLogin}
                className="flex text-black items-center gap-2 justify-center mt-2 py-2 px-4 w-full rounded-lg border-2 border-green-500 font-bold hover:bg-green-100 hover:text-black transition-all"
              >
                <FcGoogle className="text-xl " /> Google
              </button>
            </div>

            <p className="text-center text-sm mt-4 text-gray-600">
              Don’t have an account?{" "}
              <Link to="/register" className="text-green-500 font-medium hover:underline">
                Register Now!
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Login;
