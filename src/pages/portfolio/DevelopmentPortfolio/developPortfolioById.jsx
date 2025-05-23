import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  Phone,
  Home,
  Bath,
  ArrowLeft,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Fullscreen,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { developmentPortfolioData } from "../../../utils/data";
const PropertyListing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { id } = useParams();

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
  const nextImage = () => {
    setCurrentSlide((prev) =>
      prev === selectedProject?.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProject?.images.length - 1 : prev - 1
    );
  };

  const navigate = useNavigate();
  // Find the project by ID or title
  const selectedProject = developmentPortfolioData?.find(
    (project) => project.id === parseInt(id)
  );

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (index) => {
    setCurrentSlide(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  console.log("selectedProject");
  if (!selectedProject?.images) {
    return <Navigate to="/" />;
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

      <div className="bg-white rounded-lg shadow-lg overflow-hidden pb-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
          {/* Carousels*/}
          <div className="relative">
            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-2 py-1 rounded">
              {currentSlide + 1} / {selectedProject?.images.length}
            </div>

            {/* Main Image Slider */}
            <Slider {...settings} className="property-slider">
              {selectedProject?.images.map((img, index) => (
                <div key={index} className="relative h-64 md:h-[500px]">
                  <img
                    src={img}
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Zoom Icon */}
                  <div
                    className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <Fullscreen size={20} />
                  </div>
                </div>
              ))}
            </Slider>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-2 px-2">
              {selectedProject?.images?.slice(0, 8).map((img, index) => (
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

            {/* Full-Screen Modal */}
            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white text-2xl"
                  onClick={closeModal}
                >
                  <X />
                </button>

                {/* Previous Button */}
                <button
                  className="absolute left-4 text-white text-3xl"
                  onClick={prevImage}
                >
                  <ChevronLeft />
                </button>

                {/* Enlarged Image */}
                <img
                  src={selectedProject?.images[currentSlide]}
                  alt={`Enlarged view ${currentSlide + 1}`}
                  className="max-w-full max-h-[90vh] object-contain"
                />

                {/* Next Button */}
                <button
                  className="absolute right-4 text-white text-3xl"
                  onClick={nextImage}
                >
                  <ChevronRight />
                </button>
              </div>
            )}
          </div>
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
                    <span>{selectedProject?.Bedroom} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-5 w-5 text-gray-600" />
                    <span>{selectedProject?.Bathroom} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Garage(s) {selectedProject?.Garage}</span>
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
                  <br />
                  {selectedProject?.expectedSale &&
                    `Sale Price : ${selectedProject?.expectedSale}`}
                </span>
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <li className="text-gray-800 font-rubik">
                Specs: {selectedProject?.specs}
              </li>
              <li className="md:hidden">{selectedProject?.Bedroom} Bed</li>
              <li className="md:hidden">{selectedProject?.Bathroom} Bath</li>
              <li className="md:hidden">
                Garage(s): {selectedProject?.Garage}
              </li>{" "}
              {/* <li className="text-gray-800 font-rubik">
                Property Type : {selectedProject?.propertyType}
              </li> */}
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
              {selectedProject?.totalRaised && (
                <li className="text-gray-800 font-rubik">
                  Total Raised : {selectedProject?.totalRaised}
                </li>
              )}
              <li className="text-gray-800 font-rubik">
                Funding Round: : {selectedProject?.fundRound}
              </li>
              {/* <li className="text-gray-800"> Garage(s): 1</li> */}
              {selectedProject?.Floor && (
                <li className="text-gray-800 font-rubik">
                  Floor(s): {selectedProject?.Floor}{" "}
                </li>
              )}
              {/* <p className="text-gray-800">
                {" "}
                Community : {selectedProject?.Community}
              </p> */}
              {selectedProject?.FrontElevation &&
                selectedProject?.SideElevations && (
                  <div className="pt-1">
                    <p className="text-gray-800 font-rubik text-lg">
                      Elevations :
                    </p>
                    <li className="text-gray-800 font-rubik ">
                      Front Elevation: {selectedProject?.FrontElevation}
                    </li>
                    <li className="text-gray-800 font-rubik ">
                      Side Elevations: {selectedProject?.SideElevations}
                    </li>
                  </div>
                )}
            </div>

            <h2 className=" font-semibold text-lg mb-1.5">{`What's special`}</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                {selectedProject?.description}
                {selectedProject?.link && (
                  <a
                    className="text-blue-600 hover:underline"
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedProject.link}
                  </a>
                )}
                <br />
                <br />
                {selectedProject?.pera && selectedProject?.pera}
              </p>
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
          {/* Property details section */}
          {/* <div className="px-2 md:px-6">
            <div className="flex justify-between items-start ">
              <div className="">
                <div className="flex items-center md:gap-2 mb-2">
                  <h1 className="md:text-2xl font-semibold">
                    {selectedProject.title}
                  </h1>
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
              <div className=" text-right">
                <p className="md:text-2xl font-bold text-orange-500">
                  {selectedProject?.SellingPrice}
                </p>
                <span className="text-green-500 text-md">
                  {" "}
                  {selectedProject?.Status}
                </span>
                <br />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <li className="md:hidden">{selectedProject?.Bedroom} Bed</li>

              <li className="md:hidden">{selectedProject?.Bathroom} Bath</li>

              <li className="md:hidden">
                Garage(s): {selectedProject?.Garage}
              </li>

              {selectedProject?.CompletionDate && (
                <li className="text-gray-800 font-rubik">
                  Completion Date: {selectedProject?.CompletionDate}
                </li>
              )}
              <li className="text-gray-800 font-rubik">
                Lot Area: {selectedProject?.LotArea}
              </li>
              <li className="text-gray-800 font-rubik">
                Living Area: {selectedProject?.LivingArea}
              </li>
              <li className="text-gray-800 font-rubik">
                Covered Area: {selectedProject?.CoveredArea}
              </li>
           
              <li className="text-gray-800 font-rubik">
                {" "}
                Floor(s): {selectedProject?.Floor}
              </li>
              <li className="text-gray-800 font-rubik">
                {" "}
                Community : {selectedProject?.Community}
              </li>
              <div className="pt-2">
                <p className="text-gray-800 font-rubik text-lg">Elevations :</p>
                <li className="text-gray-600 font-rubik text-lg">
                  Front Elevation: {selectedProject?.FrontElevation}
                </li>
                <li className="text-gray-600 font-rubik text-lg">
                  Side Elevations: {selectedProject?.SideElevations}
                </li>
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
          </div> */}
        </div>
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
          {/* Video content */}
          {selectedProject?.vedio ? (
            <div className="video-container h-96">
              <video
                className="w-full object-cover h-full"
                autoPlay
                muted
                loop
                playsInline
                src={
                  selectedProject?.vedio ||
                  "https://videos.pexels.com/video-files/27086044/12067677_640_360_60fps.mp4?autoplay"
                }
                alt="Under Construction Video"
              />
            </div>
          ) : (
            ""
          )}

          {/* 3D Image content */}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
