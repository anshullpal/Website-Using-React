import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import hvmlogo from "../images/HVM-logo.png";
import twitter from "../images/icons-twitter.png";
import linkedln from "../images/icons-linkedln.png";
import facebook from "../images/icons-facebook.png";
import startupimg from "../images/start.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-black-600 text-center rounded-lg xl:w-80 mx-auto">
                                <img src={hvmlogo} alt="hvm-logo"></img>
                                {/* <h6 className="font-bold text-4xl mb-4">Office Address</h6> */}
                                <p className="font-bold text-black-1xl mb-4">Office Address</p>
                                <div className='text-md font-bold text--600'>
                                    <p>Rausar Chauthera, Shahjahanpur</p>
                                    <p>Uttar Pradesh India (242001)</p>
                                    <p>Cell - 70071 52549</p>
                                    <p>Email: iotbyhvm@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-4">
                                    <HashLink to="/about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About Us</HashLink>
                                </li>
                                <li className="mb-4">
                                    <HashLink to="/disclaimer" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Disclaimer</HashLink>
                                </li>
                                <li className="mb-4">
                                    <HashLink to="/privacypolicy" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Privacy Policy</HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">Business Links</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <Link to="/termsofuse" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Terms of Use</Link>
                                </li>

                                <li className="mb-2">
                                    <Link to="/carrers" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Carrers</Link>
                                </li>

                                <li className="mb-2">
                                    <Link to="/paymentguide" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Payment Guide</Link>
                                </li>

                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                            <div className="text-xl mb-6">
                                Social Media Links
                            </div>

                            <div className="text-md font-medium mb-6">
                                Stay Connected
                            </div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                    <a href="https://www.linkedin.com/company/hvm-smart-solutions/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Linkedln">

                                            <img src={linkedln} alt="linkedln-logo"></img>
                                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="https://www.facebook.com/iothvm/" target="_blank" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                            <img src={facebook} alt="facebook-logo"></img>
                                        </a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="https://twitter.com/harshvardhanrvm" target="_blank" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                            <img src={twitter} alt="twitter-logo"></img>
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />

                                        </a>
                                    </li>


                                </ul>
                                {/* <div>
                                    <img src={startupimg} alt="startupimage" width="200" height="150" />
                                </div> */}
                                <br></br>
                                <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.5156328245675!2d79.91565667500474!3d27.82467652030762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fbb4d99a72cd9%3A0x936ca7e332035d98!2sHVM%20Smart%20Solutions!5e0!3m2!1sen!2sin!4v1696415419291!5m2!1sen!2sin" width="320" height="150" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-black-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}{"  "}
                                <HashLink
                                    to="https://hvmsmart.solutions"
                                    className=" hover:text-black-900-bold">
                                    Hvm Smart Solutions
                                </HashLink>. All rights reserved.
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}
export default Footer;
