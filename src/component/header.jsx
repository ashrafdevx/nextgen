import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blogs", path: "/blog" },
  ];

  return (
    <>
      <div className="container mx-auto mt-3 navbar bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
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
              >
                <Link
                  to={item.path}
                  onClick={() => setActiveItem(item.path)}
                  className={`relative z-10 ${
                    activeItem === item.path ? "text-white" : "text-black"
                  } group-hover:text-white transition duration-300`}
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
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-2 gap-3">
            <li className="relative rounded-full text-lg bg-[#0049ad] px-3 text-white py-[2px] overflow-hidden group">
              <a className="relative z-10 transition duration-300">Login</a>
            </li>
            <li className="relative rounded-full text-lg bg-[#0049ad] px-3 text-white py-[2px] overflow-hidden group">
              <a className="relative z-10 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
