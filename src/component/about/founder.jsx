const OurFounder = () => {
  return (
    <div className="flex flex-col md:flex-row sm:mb-16 w-full">
      <div className="mt-8 md:mt-0 w-1/2 flex items-center justify-end">
        <img
          src={
            "https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/672075c141d8474775b0b4e2_d414b4ca-06a1-48e2-b25b-ca64574809ae.jpg"
          }
          alt="Real Estate"
          className="md:h-[500px] h-300 shadow-lg  object-cover"
        />
      </div>
      <div className="flex-1 bg-gradient-to-r from-black via-gray-800 to-blue-900 text-white flex flex-col justify-center items-start px-8 md:px-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          What Sets Us Apart
        </h2>
        <p className="text-base md:text-lg">
          NextGen Properties is more than just a real estate company; we are a
          team passionate about helping you build a better future. Whether
          you’re looking for your dream home or a strategic investment
          opportunity, we’re here to bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default OurFounder;