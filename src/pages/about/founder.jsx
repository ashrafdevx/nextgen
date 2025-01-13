import ConsultButton from "../../utils/consultButton";
const OurFounder = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:mb-16">
      {/* Image Section */}
      <div className="order-1 md:order-1 md:py-0 flex items-center justify-end">
        <img
          src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/672075c141d8474775b0b4e2_d414b4ca-06a1-48e2-b25b-ca64574809ae.jpg"
          alt="Real Estate"
          className="w-full h-[300px] md:h-[500px] object-cover  shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="order-2 md:order-2 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-white p-4 md:p-16 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-rubik mb-4">
          Our Founder, Asim Ali
        </h2>
        <p className="text-base md:text-lg mb-6">
          {`NextGen Properties is more than just a real estate company; we are a
          team passionate about helping you build a better future. Whether
          you're looking for your dream home or a strategic investment
          opportunity, we're here to bring your vision to life.`}
        </p>
        <div className=" gap-2 md:gap-4 md:mt-2 space-x-2">
          {/* <ConsultButton /> */}
          <button className="border transition duration-300 border-blue-600 text-blue-600 hover:bg-blue-900 md:py-2 py-2  px-4 md:px-9 rounded-full hover:text-white">
            Consult Now
          </button>
          <button className="border transition duration-300 border-blue-600 text-blue-600 hover:bg-blue-900 md:py-2  px-4 py-2 md:px-9 rounded-full hover:text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
