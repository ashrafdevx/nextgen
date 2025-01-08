import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Install lucide-react with `npm install lucide-react`
import AboutUs from "./3-AboutUs.jsx";
import Banner from "./1-Banner.jsx";
import NextGenProperties from "./2-NextGenProperties.jsx";
import OurInvestmentPortfolio from "./5-OurInvestmentPortfolio.jsx";
import AskQuesdtion from "./6-AskQuesdtion.jsx";
import TestimonialCarousel from "./7-OurCustomerFeedback.jsx";

import ContactForm from "../../utils/ContactForm.jsx";
import OurBlogs from "../../utils/blogs.jsx";
import DevelopmentPortfolio from "./4-developmentPortfolio.jsx";
// import ContactForm from "../component/home/9-form.jsx";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Banner />
      <NextGenProperties />
      <AboutUs />
      <DevelopmentPortfolio />
      <OurInvestmentPortfolio />
      <AskQuesdtion />
      <TestimonialCarousel />
      <OurBlogs />
      <ContactForm />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Home;
