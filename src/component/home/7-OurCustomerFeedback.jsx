import React, { useState } from "react";

const feedbacks = [
  {
    title: "Our Dream Home, Perfectly Realized",
    description:
      "NextGen Properties turned our vision into reality with impeccable craftsmanship and attention to every detail. The process was seamless, and the result was beyond our expectations. We couldn’t be happier with our beautiful new home.",
    name: "Karen Tignor",
    image: "https://via.placeholder.com/50", // Replace with actual image
    rating: 5,
  },
  {
    title: "A Seamless Experience",
    description:
      "The team made the entire process easy and enjoyable. Their expertise and attention to detail ensured we got exactly what we were looking for. Highly recommended!",
    name: "John Doe",
    image: "https://via.placeholder.com/50", // Replace with actual image
    rating: 5,
  },
  {
    title: "Exceeding Expectations",
    description:
      "From start to finish, the service was outstanding. They truly care about their clients, and it shows in their work. We’re beyond satisfied!",
    name: "Emily Smith",
    image: "https://via.placeholder.com/50", // Replace with actual image
    rating: 5,
  },
];

const OurCustomerFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex container mx-auto flex-col items-center py-10 bg-gray-100">
      {/* Header */}
      <div className="text-center">
        <h4 className="text-gray-600 font-semibold">Showcase of Excellence</h4>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Our Customer Feedback
        </h2>
      </div>

      {/* Feedback Card */}
      <div className="relative max-w-2xl  w-full mt-8  ">
        <div className="transition-transform px-12 duration-500">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className={`absolute w-full bg-white rounded-lg p-8 shadow-lg transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-3-6a9 9 0 110-18 9 9 0 010 18z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-6">
                {feedback.title}
              </h3>
              <p className="text-gray-600 mt-4">{feedback.description}</p>
              {/* User Info */}
              <div className="flex items-center justify-center mt-6">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="font-medium text-gray-800">{feedback.name}</p>
                  <div className="flex">
                    {Array(feedback.rating)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.975-2.888a1 1 0 00-1.175 0l-3.974 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.049 9.1c-.783-.57-.381-1.81.588-1.81h4.905a1 1 0 00.95-.69L9.049 2.927z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default OurCustomerFeedback;
