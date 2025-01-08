import Slider from "react-slick";
import { Star } from "lucide-react";
import "../../assets/slider.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Sohail Ahmad",
      date: "September 3, 2023",
      rating: 5,
      review:
        "I Found the Saif Group very Professional and Most Trustable Group in Peshawar Real Estate Market",
      imageInitial: "S",
    },
    {
      name: "Muhammad Ali",
      date: "September 3, 2023",
      rating: 5,
      review:
        "Saif group is top company, they have very good management staff, also bring top projects for oversease.",
      imageInitial: "M",
    },
    {
      name: "Imad Khan",
      date: "September 3, 2023",
      rating: 5,
      review:
        "Saif group is good developer and Builders. I my self saw a lot of project of saif group which deliver on time.",
      imageInitial: "I",
    },
    {
      name: "Imad Khan",
      date: "September 3, 2023",
      rating: 6,
      review:
        "Saif group is good developer and Builders. I my self saw a lot of project of saif group which deliver on time.",
      imageInitial: "I",
    },
    {
      name: "Jalal Jann",
      date: "September 3, 2023",
      rating: 7,
      review:
        "Saif group is good developer and Builders. I my self saw a lot of project of saif group which deliver on time.",
      imageInitial: "I",
    },
    {
      name: "Khan Khan",
      date: "September 3, 2023",
      rating: 8,
      review:
        "Saif group is good developer and Builders. I my self saw a lot of project of saif group which deliver on time.",
      imageInitial: "I",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full container mx-auto px-4 py-12">
      <div className="text-start mb-12">
        <span className="inline-block hover:text-white hover:bg-gray-600 px-16 py-2 rounded-full border border-gray-700 text-gray-600">
          Showcase of Excellence
        </span>
        <h1 className="text-4xl font-bold my-10 ">Our Customer Feedback</h1>
      </div>
      <Slider {...settings} className=" px-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 ">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.imageInitial}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
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
              <p className="text-gray-700">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
