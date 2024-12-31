import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    title: "Our Dream Home, Perfectly Realized",
    content:
      "NextGen Properties turned our vision into reality with impeccable craftsmanship and attention to every detail. The process was seamless, and the result was beyond our expectations. We couldn't be happier with our beautiful new home.",
    author: "Karen Tignor",
    rating: 5,
    image: "https://avatar.iran.liara.run/public",
  },
  {
    title: "Exceptional Investment Experience",
    content:
      "Working with NextGen Properties on our investment portfolio was a game-changer. Their market insight and professional guidance helped us make informed decisions that yielded excellent returns.",
    author: "Michael Chen",
    rating: 5,
    image: "https://avatar.iran.liara.run/public",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 mt-16 bg-gray-50">
      <div className="text-center mb-12">
        <span className="inline-block hover:text-white hover:bg-gray-600 px-16 py-2 rounded-full border border-gray-700 text-gray-600">
          Showcase of Excellence
        </span>
        <h1 className="text-6xl font-bold my-10 ">Our Customer Feedback</h1>
      </div>

      <div className="relative px-4">
        <div className="pl-3  sm:h-[35vh]">
          <div className="flex justify-start mb-6 ">
            <img
              src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/67075624bb0fa3c3786e601d_Quotes%20(1).png"
              className="text-white rounded-full bg-blue-700  p-4"
              // size={64}
              alt="Sdfsdf"
            />
          </div>

          <h3 className="text-3xl font-semibold text-start mb-4">
            {testimonials[currentIndex].title}
          </h3>

          <p className="text-gray-600 text-xl h-[10vh] text-start mb-8">
            {testimonials[currentIndex].content}
          </p>

          <div className="flex items-startjustify-center gap-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">
                {testimonials[currentIndex].author}
              </p>
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pr-4 gap-4">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );
}
