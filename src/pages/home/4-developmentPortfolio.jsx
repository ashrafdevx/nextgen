import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/slider.css";
import { developmentPortfolioData } from "../../utils/data";
// import { ChartArea, CircleDollarSign, DollarSign, House } from "lucide-react";

const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className}  `}
    style={{
      ...style,
      display: "block",
      left: "-10px",
      zIndex: 10,
      fontSize: "0px", // Increase the icon size
      color: "#000", // Set icon color
    }}
    onClick={onClick}
  ></div>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className}`}
    style={{
      ...style,
      display: "block",
      right: "-40px",
      zIndex: 10,
      color: "#000", // Set icon color
    }}
    onClick={onClick}
  ></div>
);
const DevelopmentPortfolio = () => {
  const [activeFilter] = useState("All");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const filteredProjects =
    activeFilter === "All"
      ? developmentPortfolioData
      : developmentPortfolioData.filter(
          (project) => project.category === activeFilter
        );

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container flex flex-col mx-auto">
      <div className="py-10 md:px-16">
        {/* Header */}
        <div className="py-2">
          {pathname === "/" && (
            <button
              onClick={() => navigate("/portfolio")}
              className="border-blue-600 text-blue-600 border transition hover:text-white duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700"
            >
              Our Projects
            </button>
          )}
        </div>
        <h2 className="text-4xl font-bold mt-2 py-4">
          Our Development Portfolio
        </h2>

        {/* Projects Carousel */}
        <Slider {...settings} className="">
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-4 ">
              <div className="shadow-lg overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full mb-2 h-80 object-cover"
                />{" "}
                <div className="px-6 py-4">
                  <h3 className="text-xl sm:text-md overflow-hidden whitespace-nowrap text-ellipsis font-bold mb-2 ">
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-600 mb-4 sm:h-24 overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3, // Adjust the number of lines as needed
                      lineClamp: 3, // For non-webkit browsers
                    }}
                  >
                    {project.description}
                  </p>
                  <button
                    onClick={() =>
                      navigate(`/portfolio/development-portfolio/${project.id}`)
                    }
                    className="border-blue-600 text-blue-600 border transition hover:text-white duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container flex items-center justify-center">
        <button
          onClick={() => {
            navigate("/portfolio/development-portfolio");
          }}
          className="border text-center transition bg-blue-600 text-white border-blue-600 hover:text-blue-600 duration-300 px-16 py-2 rounded-full shadow-md hover:bg-white"
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default DevelopmentPortfolio;
