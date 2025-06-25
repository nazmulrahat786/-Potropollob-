import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import logo from '../../logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="bg-base-200 py-16 md:py-24">
                <footer className="footer text-base-content w-[90%] md:max-w-6xl mx-auto">
                    <aside>
                        <Link to='/'>
                            <div data-tip id="webName" className="w-20 h-18 gap-6">
                                <img className="w-full h-full rounded-full object-cover" src={logo} alt="" />
                                <h2 className="text-3xl font-bold">Pottery</h2>
                                <ReactTooltip
                                    anchorId="webName"
                                    place="top"
                                    content="Website Name is Pottery"
                                />
                            </div>
                        </Link>
                        {/* <h1 data-tip id="webName" className="text-4xl font-bold text-cyan-700">Ceramics <br /> & Pottery</h1>
                        <ReactTooltip 
                            anchorId="webName"
                            place="top"
                            content="Website Name"
                        /> */}
                        <p className="font-semibold mt-4">Biscut Company Ltd.<br />Providing energy plus biscut since 1947</p>
                        <div className="space-y-4 mt-6">
                            <ul className="flex gap-6 justify-center">
                                <li className="text-4xl"><a href="https://www.linkedin.com/in/hellotanvir4/"><RxLinkedinLogo /></a></li>
                                <li className="text-4xl"><a href="https://github.com/tanvir244"><FaGithub /></a></li>
                                <li className="text-4xl"><a href="https://www.facebook.com/tanvirrahman.saim.7"><FaFacebook /></a></li>
                                <li className="text-4xl"><a href="https://twitter.com/Tanvir339077"><FaXTwitter /></a></li>
                            </ul>
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 font-semibold text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Tanvir</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;