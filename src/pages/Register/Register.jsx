import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [registerErr, setRegisterErr] = useState([]);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password);

        if (password.length < 6) {
            setRegisterErr('Password should be at least 6 character or longer!');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterErr('Password should have at least one Uppercase cahracter!');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterErr('Password should have at least one Lowercase character!');
        }

        // reset error 
        setRegisterErr('');

        // create user 
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your registration successfull",
                    showConfirmButton: false,
                    timer: 2000
                  })
                  .then(() => {
                    form.reset();
                    navigate('/');
                  })
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-gray-400 py-16'>
                <h2 className="text-4xl font-bold text-white text-center mb-6">Register Now</h2>
                <div className='w-[92%] md:w-[60%] lg:w-[35%] mx-auto bg-white rounded-2xl'>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Enter Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-700 text-white">Register</button>
                        </div>
                        {
                            registerErr && <p className="text-red-500 font-semibold text-center">{registerErr}</p>
                        }
                        <p className="mt-6">Dont have an account? <Link className="text-green-500 font-bold" to='/login'>Login Now</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;