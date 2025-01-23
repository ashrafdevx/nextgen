import ImageWithOverlay from "../../../utils/ImagePreview";

const EfficiantProjectManagement = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center   md:px-16 bg-white  md:py-16">
      {/* Right Section */}
      <div className="max-w-full flex md:hidden ">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f70c0756dd300798e82bc_1680127446345.jpg" />
      </div>
      {/* Left Section */}
      <div className="max-w-xl px-2 md:px-0 text-center md:text-left">
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Efficient Project Management
          </h1>
        </div>

        <p className="text-gray-600 break-all md:break-words  text-justify font-quicksand">
          We are committed to efficient projectmanagement, ensuring that
          timelines are met without compromising quality. Ourorganized approach
          keeps your project on track from inception to completion,allowing you
          to focus on your core business activities while we handle
          thecomplexities of construction.
        </p>
      </div>
      {/* Right Section */}
      <div className="max-w-full hidden md:flex">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f70c0756dd300798e82bc_1680127446345.jpg" />
      </div>
    </div>
  );
};

export default EfficiantProjectManagement;
