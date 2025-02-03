import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { developmentPortfolioData } from "../../utils/data";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true, // Keep dots visible on medium screens
          arrows: true, // Ensure arrows are enabled for medium screens
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false, // Show arrows on mobile screens
        },
      },
    ],
  };

  return (
    <div className="container flex mb-2 sm:mb-0  flex-col mx-auto">
      <div className="sm:py-10 px-6  md:px-16">
        {/* Header */}
        <div className="sm:py-2">
          {pathname === "/" && (
            <button
              onClick={() => navigate("/portfolio")}
              className="border-blue-600 text-blue-600 border transition hover:text-white duration-300 px-6  sm:px-9 py-1 sm:py-2 rounded-full shadow-md hover:bg-blue-700"
            >
              Our Projects
            </button>
          )}
        </div>
        <h2 className="sm:text-4xl text-center sm:text-start font-bold sm:mt-2 py-4">
          Our Development Portfolio
        </h2>

        {/* Projects Carousel */}
        <Slider {...settings} className="">
          {filteredProjects.map((project) => (
            <div key={project.id} className="sm:p-4 ">
              <div className="shadow-lg overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full mb-2 h-40 sm:h-80 object-fill sm:object-fill"
                />{" "}
                <div className=" px-6 py-4">
                  <h3 className="text-xl sm:text-md overflow-hidden whitespace-nowrap text-ellipsis font-bold mb-2 ">
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-600 line-clamp-3 mb-4 sm:h-24 overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3, // Adjust the number of lines as needed
                      lineClamp: 3, // For non-webkit browsers
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start">
                    <button
                      onClick={() =>
                        navigate(
                          `/portfolio/development-portfolio/${project.id}`
                        )
                      }
                      className="border-blue-600 text-blue-600 border transition hover:text-white duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container flex pt-3 sm:pt-0 items-center justify-center">
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
