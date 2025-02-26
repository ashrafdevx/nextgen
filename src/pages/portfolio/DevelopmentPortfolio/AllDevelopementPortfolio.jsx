import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { developmentPortfolioData } from "../../../utils/data";

const AllDevelopmentPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const filteredProjects =
    activeFilter === "All"
      ? developmentPortfolioData
      : developmentPortfolioData.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div className="container flex flex-col mx-auto">
      <div className="md:py-10 md:px-16">
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
        <h2 className="text-xl md:text-4xl px-2 md:px-0 font-bold md:mt-2 md:py-4">
          Our Portfolio
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 md:gap-4 mb-3 md:mb-8 py-3 md:pt-0">
          {["All", "Completed", "Under Construction"].map((category) => (
            <button
              key={category}
              className={`px-2 md:px-4 md:py-2 py-1 rounded-full text-sm ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-100"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="shadow-lg overflow-hidden bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover md:h-80 md:object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-justify break-all mb-4 md:h-28">
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
          ))}
        </div>
      </div>

      <div className="container pt-3 md:pt-0 flex items-center justify-center">
        {" "}
        <button
          onClick={() => navigate("/")}
          className=" border text-center transition bg-blue-600  text-white border-blue-600 hover:text-blue-600 duration-300 px-16 py-2 rounded-full shadow-md hover:bg-white"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AllDevelopmentPortfolio;
