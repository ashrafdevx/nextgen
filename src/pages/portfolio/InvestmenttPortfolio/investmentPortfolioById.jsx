import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Phone, Home, Bath, ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { investmentPortfolioData } from "../../../utils/data";
const InvestmentPortfolioById = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
    >
      <ArrowRight className="h-6 w-6 text-gray-800" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
    >
      <ArrowLeft className="h-6 w-6 text-gray-800" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  const navigate = useNavigate();
  const { id } = useParams();
  // Find the project by ID or title
  const selectedProject = investmentPortfolioData?.find(
    (project) => project.id === parseInt(id)
  );
  console.log("selectedProject", selectedProject);
  if (!selectedProject?.images) {
    return <Navigate to="/" />; // Redirect to home page (or wherever appropriate)
  }
  return (
    <div className="container mx-auto p-4">
      {/* Back button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        onClick={() => navigate("/portfolio/development-portfolio")}
      >
        ← All Listings
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image carousel section */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-2 py-1 rounded">
              {currentSlide + 1} / {selectedProject?.images.length}
            </div>
            <Slider {...settings} className="property-slider">
              {selectedProject?.images.map((img, index) => (
                <div key={index} className="relative h-[400px]">
                  <img
                    src={img}
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-2 px-2">
              {selectedProject?.images.map((img, index) => (
                <div
                  key={index}
                  className="w-24 h-16 cursor-pointer"
                  onClick={() => setCurrentSlide(index)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Property details section */}
          <div className="px-6">
            <div className="flex justify-between items-start ">
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-2xl font-semibold">
                    {selectedProject.title}
                  </h1>
                  {/* <MapPin className="h-6 w-6 text-gray-500" /> */}
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Home className="h-5 w-5 text-gray-600" />
                    <span>{selectedProject?.Bedroom} Bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-5 w-5 text-gray-600" />
                    <span>{selectedProject?.Bathroom} Bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Garage(s): {selectedProject?.Garage}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-500">
                  {selectedProject?.sellingPrice}
                </p>
                <span className="text-green-500 text-md">
                  {" "}
                  {selectedProject?.propertyStatus}
                </span>
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <p className="text-gray-600">Specs: {selectedProject?.specs}</p>
              <p className="text-gray-600">
                Property Type:: {selectedProject?.propertyType}
              </p>

              {/* <p className="text-gray-600">
                Living Area: {selectedProject?.LivingArea}
              </p>
              <p className="text-gray-600">
                Covered Area: {selectedProject?.CoveredArea}
              </p> */}
              <p className="text-gray-600">
                Investors: {selectedProject?.investors}
              </p>

              <p className="text-gray-600">
                Per Investors Share : {selectedProject?.perInvestorShare}
              </p>

              <p className="text-gray-600">
                Funding Round: : {selectedProject?.fundRound}
              </p>
              {/* <p className="text-gray-600"> Garage(s): 1</p> */}
              <p className="text-gray-600">
                Floor(s): {selectedProject?.Floor}
              </p>
              {/* <p className="text-gray-600">
                {" "}
                Community : {selectedProject?.Community}
              </p> */}
              <div className="pt-2">
                <p className="text-gray-800 font-rubik text-lg">Elevations :</p>
                <p className="text-gray-600 font-rubik text-lg">
                  Front Elevation: {selectedProject?.FrontElevation}
                </p>
                <p className="text-gray-600 font-rubik text-lg">
                  Side Elevations: {selectedProject?.SideElevations}
                </p>
              </div>
            </div>

            <h2 className="font-semibold text-lg mb-2">{`What's special`}</h2>

            <div className="space-y-4 text-gray-700">
              <p>{selectedProject?.description}</p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </button>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">(919)-249-8450</span>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
          {/* Video content */}

          <video
            ref={videoRef}
            className="w-full h-auto"
            autoPlay={isIntersecting}
            muted
            loop
            playsInline
            src={
              isIntersecting
                ? "https://videos.pexels.com/video-files/27086044/12067677_640_360_60fps.mp4?autoplay"
                : ""
            }
            alt="Under Construction Video"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolioById;
