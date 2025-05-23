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
                <div key={index} className="relative h-64 md:h-[400px]">
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
              {selectedProject?.images?.slice(0, 8)?.map((img, index) => (
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
          </div>{" "}
          {/* Mobile Vedio */}
          <div className="grid md:hidden grid-cols-1 lg:grid-cols-2 gap-6 ">
            {/* Video content */}
            <div className="video-container">
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                src="https://videos.pexels.com/video-files/27086044/12067677_640_360_60fps.mp4?autoplay"
                alt="Under Construction Video"
              />
            </div>

            {/* 3D Image content */}
          </div>
          {/* Property details section */}
          <div className="px-2 md:px-6">
            <div className="flex justify-between items-start ">
              <div className="">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="md:text-2xl font-semibold">
                    {selectedProject.title}
                  </h1>
                  {/* <MapPin className="h-6 w-6 text-gray-500" /> */}
                </div>
                <div className="hidden md:flex md:gap-4 mb-2">
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
                <p className="md:text-2xl font-bold text-orange-500">
                  {selectedProject?.sellingPrice}
                </p>
                <span className="text-green-500 text-md">
                  {" "}
                  {selectedProject?.propertyStatus}
                </span>
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <li className="text-gray-800 font-rubik">
                Specs: {selectedProject?.specs}
              </li>
              <li className="md:hidden">{selectedProject?.Bedroom} Bed</li>
              <li className="md:hidden">{selectedProject?.Bathroom} Bath</li>
              <li className="md:hidden">
                Garage(s): {selectedProject?.Garage}
              </li>{" "}
              <li className="text-gray-800 font-rubik">
                Property Type : {selectedProject?.propertyType}
              </li>
              {/* <li className="text-gray-800">
                Living Area: {selectedProject?.LivingArea}
              </li>
              <li className="text-gray-800">
                Covered Area: {selectedProject?.CoveredArea}
              </li> */}
              <li className="text-gray-800 font-rubik">
                Investors: {selectedProject?.investors}
              </li>
              <li className="text-gray-800 font-rubik">
                Per Investors Share : {selectedProject?.perInvestorShare}
              </li>{" "}
              <li className="text-gray-800 font-rubik">
                Total Raised : {selectedProject?.totalRaised}
              </li>
              <li className="text-gray-800 font-rubik">
                Funding Round: : {selectedProject?.fundRound}
              </li>
              {/* <li className="text-gray-800"> Garage(s): 1</li> */}
              <li className="text-gray-800 font-rubik">
                Floor(s): {selectedProject?.Floor}
              </li>
              {/* <p className="text-gray-800">
                {" "}
                Community : {selectedProject?.Community}
              </p> */}
              <div className="pt-2">
                <p className="text-gray-800 font-rubik text-lg">Elevations :</p>
                <li className="text-gray-800 font-rubik text-lg">
                  Front Elevation: {selectedProject?.FrontElevation}
                </li>
                <li className="text-gray-800 font-rubik text-lg">
                  Side Elevations: {selectedProject?.SideElevations}
                </li>
              </div>
            </div>

            <h2 className="font-semibold text-lg mb-2">{`What's special`}</h2>

            <div className="space-y-4 text-gray-700">
              <p>{selectedProject?.description}</p>
            </div>

            <div className="mt-6 mb-2 flex items-center justify-between">
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
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
          {/* Video content */}

          {/* <video
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
          /> */}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolioById;
