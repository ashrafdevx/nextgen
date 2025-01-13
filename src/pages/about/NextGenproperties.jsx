import { useNavigate } from "react-router-dom";
import ConsultButton from "../../utils/consultButton";
import ImageWithOverlay from "../../utils/ImagePreview";

const NextGenproperties = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-16 bg-white py-10 md:py-8">
        <div className="md:hidden flex md:mt-8 md:mt-0 max-w-2xl">
          <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f6010e5d3bb46a4776ca1_DSC00001.webp" />
        </div>
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left">
          <div>
            <h1 className="text-2xl w-full font-rubikSans md:text-5xl font-medium leading-tight ">
              NextGen Properties LLC
            </h1>
          </div>
          <p className="text-gray-600 sm:mb-6 py-3 sm:py-6">
            NextGen Properties LLC has quickly become a trusted name in the
            Dallas-Fort Worth (DFW) real estate and custom home-building
            markets. With a strong focus on quality, innovation, and customer
            satisfaction, we have rapidly earned a reputation as a premier
            partner for individuals and businesses seeking premium properties
            and investment opportunities.
          </p>
          <div className="flex items-center justify-center gap-4">
            {/* <ConsultButton /> */}
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-blue-600 text-white transition duration-300 px-4 md:px-9 md:py-3 py-2 rounded-full shadow-md hover:bg-blue-700"
            >
              Consult Now
            </button>
            <button className="border transition duration-300 border-blue-600 text-blue-600 hover:bg-blue-900 px-4 md:px-9 py-2 md:py-3 rounded-full hover:text-white">
              Read More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:flex hidden mt-8 md:mt-0 max-w-2xl">
          <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f6010e5d3bb46a4776ca1_DSC00001.webp" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[60vh] w-full">
        <div
          className="md:hidden flex-1  bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&auto=format&fit=crop&q=60')`,
          }}
        ></div>
        {/* Left Section */}
        <div className="flex-1 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-white flex flex-col justify-center items-start px-8 md:px-16">
          <h2 className="text-3xl md:text-6xl font-medium mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-base md:text-lg">
            {` NextGen Properties is more than just a real estate company; we are a
            team passionate about helping you build a better future. Whether
            you’re looking for your dream home or a strategic investment
            opportunity, we’re here to bring your vision to life.`}
          </p>
        </div>

        {/* Right Section */}
        <div
          className="md:flex flex-1 hidden bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&auto=format&fit=crop&q=60')`,
          }}
        ></div>
      </div>

      {/* At NextGen Properties */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white  md:py-8">
        <div className="mt-8 md:hidden flex md:mt-0 max-w-2xl">
          <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f609f5a37f1c92da2c818_tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg" />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <div>
            <h1 className="text-2xl w-full md:text-5xl font-medium leading-tight ">
              At NextGen Properties
            </h1>
          </div>
          <p className="text-gray-600 mb-6 md:py-6">
            At NextGen Properties, our mission is to provide the highest quality
            custom homes, residential and commercial properties, and innovative
            real estate investment opportunities for the Dallas-Fort Worth
            community. We believe that every home should be a unique reflection
            of its owner is lifestyle, and that every real estate investment
            should yield exceptional returns.
          </p>
          <div className="flex md:flex-row gap-4 mb-2">
            <button className="border transition duration-300 border-blue-600  text-white bg-blue-900 py-2 px-3 md:px-9  rounded-full hover:text-white">
              Consult Now
            </button>
            <button className="border transition duration-300 border-blue-600 text-blue-600 hover:bg-blue-900 py-2 px-3 md:px-9  rounded-full hover:text-white">
              Read More
            </button>
          </div>
        </div>

        <div className="mt-8 md:flex hidden md:mt-0 max-w-2xl">
          <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f609f5a37f1c92da2c818_tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg" />
        </div>
      </div>
    </>
  );
};

export default NextGenproperties;
