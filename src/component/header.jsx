import { X } from "lucide-react";
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
  console.log("activeItem", activeItem);
  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdownItems: [
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Our Policy",
          path: "/our-policy",
        },
        {
          name: "Terms and Condition",
          path: "/terms-and-conditions",
        },

        {
          name: "FAQ",
          path: "/faq",
        },
      ],
    },
    {
      name: "Services",
      path: "/services/individuals-homeowners",
      dropdownItems: [
        {
          name: "Build for Individuals & Homeowners",
          path: "/services/individuals-homeowners",
        },
        {
          name: "Home Build for Investors & Fund Managers",
          path: "/services/investors-fund-manager",
        },
        {
          name: "Real Estate Investment Management",
          path: "/services/investment-management",
        },
      ],
    },
    {
      name: "Portfolio",
      path: "/portfolio/development-portfolio",
      // dropdownItems: [
      //   {
      //     name: "Real Estate Development Portfolio",
      //     path: "/portfolio/development-portfolio",
      //   },
      //   {
      //     name: "Real Estate Investment Portfolio",
      //     path: "/portfolio/investment-portfolio",
      //   },
      // ],
    },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact-us" },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (path) => {
    setActiveDropdown(null);
    setActiveItem(path);
    setMenuOpen(false);
    navigate(path);
  };

  // Mobiekl Nav
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleParentItemClick = (item) => {
    if (item.dropdownItems) {
      setActiveDropdown(activeDropdown === item.path ? null : item.path);
    } else {
      navigate(item.path);
      setActiveDropdown(null);
      setMenuOpen(false);
    }
  };

  const handleDropdownItemClick = (path) => {
    navigate(path);
    setMenuOpen(false);
    setActiveDropdown(null);
  };
  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center w-full lg:w-auto">
          <div className="lg:hidden flex items-center justify-between w-full ">
            <button onClick={handleMenuToggle} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link to="/" className="ml-2">
              <img
                src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/6736c94fd7a302e4ac8ed8f3_NextGen%20Properties%20Logo.jpg"
                alt="NextGen Properties Logo"
                className="h-14 w-24 object-cover"
              />
            </Link>
          </div>
          <Link to="/" className="ml-2 hidden lg:flex">
            <img
              src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/6736c94fd7a302e4ac8ed8f3_NextGen%20Properties%20Logo.jpg"
              alt="NextGen Properties Logo"
              className="h-14 w-24 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`py-2 px-3 relative rounded-md transition font-quicksand text-lg duration-300 ${
                  activeItem === item.path || item.path.includes(activeItem)
                    ? "text-white bg-blue-700"
                    : " group-hover:text-white group-hover:bg-blue-700"
                }`}
              >
                {item.name}
              </Link>
              {item.dropdownItems ? (
                <div className="absolute left-0 mt-2 min-w-min w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden inline-block">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        onClick={() => handleMenuItemClick(dropdownItem.path)}
                        className="block px-4 py-3 text-gray-800 hover:bg-blue-700 hover:text-white transition-colors duration-300"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {activeItem !== "/login" ? (
            <button
              onClick={() => navigate("/login")}
              className="rounded-full bg-blue-700 px-6 py-2 text-white font-quicksand text-lg mr-2 hover:bg-blue-800 transition-colors duration-300"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => navigate("/")}
              className="rounded-full bg-blue-700 px-6 py-2 text-white font-quicksand text-lg mr-2 hover:bg-blue-800 transition-colors duration-300"
            >
              Back
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 lg:hidden opacity-100 ${
            menuOpen ? "visible" : "hidden"
          } `}
        >
          <div className="fixed inset-y-0 right-0 w-full max-w-sm transform transition-transform duration-300 translate-x-0 bg-white">
            <div
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 p-2 cursor-pointer hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </div>
            <div className="p-4">
              {menuItems.map((item) => (
                <div key={item.path} className="py-2">
                  <div
                    onClick={() => handleParentItemClick(item)}
                    className="flex items-center justify-between py-2 text-gray-800 hover:text-blue-700 cursor-pointer"
                  >
                    <span>{item.name}</span>
                    {item.dropdownItems && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.path ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                  {item.dropdownItems && activeDropdown === item.path && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <div
                          key={dropdownItem.path}
                          onClick={() =>
                            handleDropdownItemClick(dropdownItem.path)
                          }
                          className="block py-2 text-gray-600 hover:text-blue-700 cursor-pointer"
                        >
                          {dropdownItem.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 space-y-2">
                <button className="w-full rounded-full bg-blue-700 px-4 py-2 text-white font-quicksand text-lg hover:bg-blue-800">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
