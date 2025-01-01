import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Blogs", path: "/blog" },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (path) => {
    setActiveItem(path);
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="container mx-auto mt-3 navbar bg-base-100">
      <div className="navbar-start  lg:w-auto w-full">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={handleMenuToggle}
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

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-70 transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out z-50`}
          >
            <ul className="menu bg-white h-full w-full md:w-1/2 text-center p-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => handleMenuItemClick(item.path)}
                    className={`${
                      activeItem === item.path ? "bg-[#0049ad] text-white" : ""
                    } block py-2 px-4 hover:bg-[#0049ad] hover:text-white transition-colors duration-300`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <div className="px-4 py-2 space-y-2">
                <button className="w-full rounded-full font-quicksand text-lg bg-[#0049ad] px-4 text-white py-2 hover:bg-[#003c8a] transition duration-300">
                  Login
                </button>
                <button className="w-full rounded-full font-quicksand text-lg bg-[#0049ad] px-4 text-white py-2 hover:bg-[#003c8a] transition duration-300">
                  Contact
                </button>
              </div>
            </ul>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/6736c94fd7a302e4ac8ed8f3_NextGen%20Properties%20Logo.jpg"
            loading="lazy"
            sizes="(max-width: 479px) 80px, (max-width: 767px) 85px, (max-width: 991px) 120px, (max-width: 1279px) 11vw, 120px"
            alt=""
            className="h-12 w-20 object-cover"
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex px-2 gap-3">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className={`relative text-md px-3 py-2 rounded-md overflow-hidden group ${
                activeItem === item.path
                  ? "bg-[#0049ad] text-white"
                  : "text-black"
              }`}
              onClick={() => handleMenuItemClick(item.path)}
            >
              <Link
                to={item.path}
                className={`relative z-10 ${
                  activeItem === item.path ? "text-white" : "text-black"
                } group-hover:text-white font-quicksand transition duration-300`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute inset-0 group-hover:bg-[#0049ad] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out ${
                  activeItem === item.path ? "translate-x-0 " : ""
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-3 navbar-end">
        <button className="rounded-full font-quicksand text-lg bg-[#0049ad] px-4 lg:px-6 text-white py-2 overflow-hidden relative z-10 transition duration-300 hover:bg-[#003c8a]">
          Login
        </button>
        <button className="rounded-full font-quicksand text-lg bg-[#0049ad] px-4 lg:px-6 text-white py-2 overflow-hidden relative z-10 transition duration-300 hover:bg-[#003c8a]">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
