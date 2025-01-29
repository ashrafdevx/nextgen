import Slider from "react-slick";
import { Star } from "lucide-react";
import "../../assets/slider.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Ashraf Nasib",
      date: "January 8, 2025",
      rating: 5,
      review:
        "Ashraf is a dedicated and skilled frontend developer with extensive experience in React.js, Redux, and Material-UI. He consistently delivers high-quality work with attention to detail and ensures the projects meet user needs.",
      imageInitial: "A",
    },
    {
      name: "Ashraf Nasib",
      date: "January 8, 2025",
      rating: 5,
      review:
        "I appreciate Ashraf's innovative approach to frontend development. He has a strong technical foundation and a passion for creating responsive and user-friendly web applications.",
      imageInitial: "A",
    },
    {
      name: "Ashraf Nasib",
      date: "January 8, 2025",
      rating: 5,
      review:
        "Ashraf has demonstrated excellent problem-solving skills, particularly in React.js projects. He has successfully worked on a wide range of complex tasks, from UI development to integrating backend services.",
      imageInitial: "A",
    },
    {
      name: "Ashraf Nasib",
      date: "January 8, 2025",
      rating: 6,
      review:
        "Ashraf’s commitment to continuous improvement in his frontend skills makes him a valuable asset. He is always learning and experimenting with new techniques to enhance the user experience.",
      imageInitial: "A",
    },
    {
      name: "Ashraf Nasib",
      date: "January 8, 2025",
      rating: 7,
      review:
        "Working with Ashraf has been a great experience. His dedication to perfecting the details of each project, from design implementation to responsiveness, ensures the success of any product he works on.",
      imageInitial: "A",
    },
    {
      name: "Ashraf Nasib",
      date: "January 8, 2025",
      rating: 8,
      review:
        "Ashraf is a proactive developer, always willing to take on new challenges and contribute innovative ideas. His work ethic and technical expertise make him an outstanding professional in the React.js ecosystem.",
      imageInitial: "A",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1280, // Tailwind `xl`
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // Tailwind `lg`
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tailwind `md`
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container  px-2 md:px-0 md:mb-0 mb-3 mx-auto sm:px-4 py-8 sm:py-12 ">
      <div className="sm:px-8">
        <div className="text-start sm:mb-12 px-8">
          <span className="hidden sm:inline-block hover:text-white hover:bg-gray-600 px-16 py-2 rounded-full border border-gray-700 text-gray-600">
            Showcase of Excellence
          </span>
          <h1 className="text-xl sm:text-4xl font-bold sm:my-10 ">
            Our Customer Feedback
          </h1>
        </div>
        <div className="container mx-auto ">
          <Slider
            {...settings}
            className="flex  md:mx-9 md:px-5 justify-center items-center "
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="sm:p-4 md:px-2 px-0 flex  items-center justify-center sm:px-0 max-w-md"
              >
                <div className="bg-white rounded-lg border shadow-lg py-3 sm:py-6 px-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.imageInitial}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.date}
                      </p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 h-40 line-clamp-4 mb-4">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
