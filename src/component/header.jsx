import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container mx-auto mt-3 navbar bg-base-100">
        <div className="navbar-start">
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
                <a>Item tfyhfhf1</a>
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
            {" "}
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
          <ul className="menu menu-horizontal px-2 gap-3">
            <li className="relative text-md px-1 py-1 rounded-md overflow-hidden group">
              <Link
                to={"/"}
                className="relative z-10 text-black group-hover:text-white transition duration-300"
              >
                Home
              </Link>
              <span className="absolute inset-0 bg-[#0049ad] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </li>
            <li className="relative text-md px-1 py-1 rounded-md overflow-hidden group">
              <Link
                to={"/about"}
                className="relative z-10 text-black group-hover:text-white transition duration-300"
              >
                About
              </Link>
              <span className="absolute inset-0 bg-[#0049ad] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </li>

            <li className="relative text-md px-1 py-1 rounded-md overflow-hidden group">
              <Link
                to={"/services"}
                className="relative z-10 text-black group-hover:text-white transition duration-300"
              >
                Services
              </Link>
              <span className="absolute inset-0 bg-[#0049ad] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </li>
            <li className="relative text-md px-1 py-1 rounded-md overflow-hidden group">
              <Link
                to={"/privacy-policy"}
                className="relative z-10 text-black group-hover:text-white transition duration-300"
              >
                Privacy Policy
              </Link>
              <span className="absolute inset-0 bg-[#0049ad] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </li>

            <li className="relative text-md px-1 py-1 rounded-md overflow-hidden group">
              <Link
                to={"/portfolio"}
                className="relative z-10 text-black group-hover:text-white transition duration-300"
              >
                Portfolio
              </Link>
              <span className="absolute inset-0 bg-[#0049ad] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </li>
            <li className="relative text-md px-1 py-1 rounded-md overflow-hidden group">
              <Link
                to={"/blog"}
                className="relative z-10 text-black group-hover:text-white transition duration-300"
              >
                Blogs
              </Link>
              <span className="absolute inset-0 bg-[#0049ad] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </li>
            {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-2 gap-3">
            <li className="relative rounded-full text-lg bg-[#0049ad] px-3 text-white  py-[2px] overflow-hidden group">
              <a className="relative z-10  transition duration-300">Login</a>
              {/* <span className="absolute inset-0 bg-[#0049ad] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span> */}
            </li>
            <li className="relative rounded-full text-lg bg-[#0049ad] px-3 text-white  py-[2px] overflow-hidden group">
              <a className="relative z-10  transition duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
