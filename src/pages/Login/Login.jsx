import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

// react tostify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    // login by form manually 
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // reset error 
        setLoginError('');

        // sign in
        signIn(email, password)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You've Successfully Loged In",
                    showConfirmButton: false,
                    timer: 2000
                })
                    .then(() => {
                        form.reset();
                        //navigate after login
                        navigate(location?.state ? location.state : '/');
                    })
            })
            .catch(() => {
                setLoginError('Your email or password incorrect, try again');
            })

    }

    // login by social platfom 
    const googleLoginn = () => {
        googleLogin()
            .then(() => {
                toast.success("Login successful with Google");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const githubLoginn = () => {
        githubLogin()
            .then(() => {
                toast.success("Login successful with Google");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-gray-400 py-16'>
                <h2 className="text-4xl font-bold text-white text-center mb-6">Please Login</h2>
                <div className='w-[92%] md:w-[60%] lg:w-[30%] mx-auto bg-white rounded-2xl'>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-700 text-white">Login</button>
                        </div>
                        {
                            loginError && <p className="text-red-500 font-semibold text-center">{loginError}</p>
                        }
                        <div className="space-y-4 mt-2">
                            <h3 className="text-center border-b-2 pb-1 text-gray-700 font-semibold">Continue with</h3>
                            <ul className="flex gap-6 justify-center">
                                <li onClick={() => googleLoginn()} className="text-4xl"><button><FaGoogle /></button></li>
                                <li onClick={() => githubLoginn()} className="text-4xl"><button><FaGithub /></button></li>
                            </ul>
                        </div>
                        <p className="mt-6">Dont have an account? <Link className="text-red-500 font-bold" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;