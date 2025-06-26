import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/register.json";

const Register = () => {
  const { createUser, updateUserProfile, user } = useContext(AuthContext);
  const [signToggle, setSignToggle] = useState(false);
  const [registerErr, setRegisterErr] = useState("");
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" />;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    setRegisterErr("");

    if (password.length < 6) {
      setRegisterErr("Password should be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterErr("Password should have at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setRegisterErr("Password should have at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration Successful!",
              showConfirmButton: false,
              timer: 2000,
            }).then(() => {
              form.reset();
              navigate("/");
            });
          })
          .catch((err) => {
            console.error("Profile update error:", err);
          });
      })
      .catch((error) => {
        setRegisterErr(error.message);
      });
  };

  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 py-5 px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="flex-grow flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg max-w-5xl w-full flex flex-col lg:flex-row items-center gap-6 p-6 sm:p-10">
            {/* Lottie Animation */}
            <div className="w-[50%] lg:w-1/2 max-w-md">
              <Lottie animationData={registerAnimation} loop autoplay />
            </div>

            {/* Registration Form */}
            <div className="w-full lg:w-1/2 max-w-md">
              <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
                Register Now
              </h2>
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
                  <input
                    type="url"
                    name="photoURL"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter photo URL"
                  />
                </div>

                <div className="relative">
                  <label className="block text-gray-700 font-semibold mb-2">Password</label>
                  <input
                    type={signToggle ? "text" : "password"}
                    name="password"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={handleToggleSignBtn}
                    className="absolute right-3 top-[42px] text-gray-500 hover:text-cyan-700 transition"
                    aria-label={signToggle ? "Hide password" : "Show password"}
                  >
                    {signToggle ? <FaEyeSlash className="text-xl" /> : <IoEyeSharp className="text-xl" />}
                  </button>
                </div>

                {registerErr && (
                  <p className="text-red-600 text-center font-semibold">{registerErr}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all font-bold"
                >
                  Register
                </button>
              </form>

              <div className="text-center text-gray-500 my-6">or register with</div>

              <div className="text-center">
                <button
                  onClick={() => {
                    /* Add Google login handler here if you want */
                  }}
                  className="flex items-center gap-2 justify-center mt-2 py-2 px-4 w-full rounded-lg border-2 border-green-500 font-bold hover:bg-green-100 hover:text-black transition-all"
                >
                  <FcGoogle className="text-xl" /> Google
                </button>
              </div>

              <p className="text-center text-sm mt-6 text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-green-500 font-semibold hover:underline">
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
