import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import Home from "../../Pages/UserPages/Home/Home";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#071952] to-[#088395] text-white py-12">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
     
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest">
              TRAVILLA
            </h2>
            <p className="mt-4 text-gray-200 ">
              Discover the world With TRAVILLA
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">
              LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#Hero" onClick={<Navigate to={"#Hero"}/>}className="hover:text-gray-300 transition">
                  🏠 HOME
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-gray-300 transition">
                  ✈️ TRIPS
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-gray-300 transition">
                  🏨 HOTELS
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:text-gray-300 transition">
                  📞 CONTACT US 
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">
              Follow us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                to="#"
                className="bg-white text-[#071952] p-3 rounded-full  "
              >
                <FaFacebook className="text-2xl hover:text-blue-600 transition duration-300" />
              </Link>
              <Link
                to="#"
                className="bg-white text-[#071952] p-3 rounded-full  "
              >
                <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
              </Link>
              <Link
                to="#"
                className="bg-white text-[#071952] p-3 rounded-full  "
              >
                <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
              </Link>
              <Link
                to="#"
                className="bg-white text-[#071952] p-3 rounded-full  "
              >
                <FaYoutube className="text-2xl hover:text-red-600 transition duration-300" />
              </Link>
              <Link
                to="https://linkedin.com"
                className="bg-white text-[#071952] p-3 rounded-full  "
              >
                <FaLinkedin className="text-2xl hover:text-blue-700 transition duration-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-400 pt-5 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} TRAVILLA. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
