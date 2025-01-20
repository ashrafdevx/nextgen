import { LinkedinIcon, InstagramIcon, FacebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f36] text-white py-4 sm:py-12 px-4">
      <div className="sm:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 mb-3 sm:mb-0">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">NextGen Properties</h3>
          <p className="text-xl text-gray-300">
            Builders & Group
            <br />
            Investment Managers
          </p>
          <div className="hidden sm:flex items-center  space-x-4">
            <a href="#" className="hover:text-gray-300 ">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FacebookIcon size={20} />
            </a>

            <a to="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="32"
                viewBox="0 0 64 64"
                fill="#fff"
              >
                <path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 32.740234 19.693359 L 32.740234 36.294922 C 32.740234 38.576922 30.756031 39.755859 29.332031 39.755859 C 28.259031 39.755859 25.818359 38.914578 25.818359 36.267578 C 25.818359 33.488578 28.095422 32.779297 29.357422 32.779297 C 30.092422 32.779297 30.380859 32.9375 30.380859 32.9375 L 30.380859 28.507812 C 30.380859 28.507813 29.830172 28.425781 29.201172 28.425781 C 24.682172 28.425781 21.464844 32.083578 21.464844 36.267578 C 21.464844 39.802578 24.229297 44.082031 29.279297 44.082031 C 34.658297 44.082031 37.121094 39.595969 37.121094 36.292969 L 37.121094 28.058594 C 37.121094 28.058594 39.518422 29.736328 42.732422 29.736328 L 42.732422 25.541016 C 39.045422 25.278016 37.0745 22.801359 36.9375 19.693359 L 32.740234 19.693359 z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 flex gap-3 items-center sm:items-start sm:flex-col">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="hover:text-gray-300">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-sm">
            812 W McDermott Dr,
            <br />
            #1032,Allen, TX 75013
          </p>
          <p className="text-sm">919-249-8450</p>
          <p className="text-sm">support@nextgenproperties.us</p>
        </div>

        {/* Newsletter */}
        {/* <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l focus:outline-none text-black"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>

      {/* Copyright */}
      <div className="sm:mt-8 sm:pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        © Copyright 2025. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
