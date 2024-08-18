// components/Footer.js
import React from 'react';
import {  FaEnvelope, FaInstagram, FaYoutube,  } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white px-6 md:px-16 py-6 md:py-16">
            <div className="container mx-auto flex flex-wrap justify-center items-start">




                {/* About Us Section */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">About Us</h3>
                    <p className="text-sm">
                        <a href="/about" className="hover:underline">We are a premier institute for coaching students appearing for competitive exams at state and national levels.</a>
                    </p>
                </div>

                {/* Address Section */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-center">
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="text-sm">
                        Spardha Sarathi KAS Academy<br />
                        196-5, 6th ward,<br />
                        Kundapura Main Rd,<br />
                        Old Bustand, near Muncipality,<br />
                        Kundapura, Karnataka 576201
                    </p>
                </div>


                {/* Address Section */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-center">
                    <h3 className="text-xl font-bold mb-2">contect</h3>
                    <p className="text-sm mt-2">
                        <strong>Phone:</strong> +91 7019130402<br />
                        <strong>Email:</strong> <a href="mailto:info@spardhasarathi.com" className="hover:underline">spardhasarathi@gmail.com</a>
                    </p>
                </div>


                {/* Social Media Links */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
                    <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                    <div className="flex justify-center space-x-4">

                        <a href="https://youtu.be/sde1vh0M0nw?si=fO4oVzK4eBU12Xzn" className="text-red-700 hover:text-red-500" aria-label="youtube">
                            <FaYoutube size={24} />
                        </a>
                        <a href="https://www.instagram.com/spardha_sarathi_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-pink-600 hover:text-pink-400" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 border-t border-gray-700 mt-6">
                <p className="text-sm">© 2024 Spardha Sarathi KAS Academy. All rights reserved.</p>
                {/* Developer Information */}
                <div className="mb-4 ">
                    <p className="text-sm flex justify-center space-x-4">
                        <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Developed By:</a>

                        <a href="https://www.instagram.com/shetty_nishanth08?igsh=ejZ6amExNm5lMm9z" className="text-pink-600 hover:text-pink-400" aria-label="Instagram">
                            <FaInstagram size={20} />
                        </a>
                        <a href="mailto:shettynishanth100@gmail.com" className="text-blue-600 hover:text-blue-400" aria-label="Email">
                            <FaEnvelope size={20} />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
