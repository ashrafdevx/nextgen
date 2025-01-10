import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/slider.css";
import { useNavigate } from "react-router-dom";
import { investmentPortfolioData } from "../../utils/data";

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

const OurInvestmentPortfolio = () => {
  const navigate = useNavigate();
  const [activeFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? investmentPortfolioData
      : investmentPortfolioData.filter(
          (project) => project.category === activeFilter
        );
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
    <div className="container flex flex-col mx-auto mb-2">
      <div className="py-10 md:px-16">
        <h2 className="text-4xl font-bold mt-2 py-4">
          Our Investment Portfolio
        </h2>

        {/* Projects */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        <Slider {...settings}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-4">
              {" "}
              <div className="shadow-lg overflow-hidden bg-white">
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    onClick={() =>
                      navigate(`/portfolio/investment-portfolio/${project.id}`)
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
      {/* </div> */}

      <div className="container  flex items-center justify-center">
        {" "}
        <button
          onClick={() => navigate("/portfolio/investment-portfolio")}
          className=" border text-center transition bg-blue-600  text-white border-blue-600 hover:text-blue-600 duration-300 px-16 py-2 rounded-full shadow-md hover:bg-white"
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default OurInvestmentPortfolio;
