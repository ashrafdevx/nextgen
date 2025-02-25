import AboutUs from "./3-AboutUs.jsx";
import Banner from "./1-Banner.jsx";
import NextGenProperties from "./2-NextGenProperties.jsx";
// import OurInvestmentPortfolio from "./5-OurInvestmentPortfolio.jsx";
// import TestimonialCarousel from "./7-OurCustomerFeedback.jsx";
import DevelopmentPortfolio from "./4-developmentPortfolio.jsx";
import OurBlogs from "../../utils/blogs.jsx";

const Home = () => {
  return (
    <>
      <Banner />
      <NextGenProperties />
      <AboutUs />
      <DevelopmentPortfolio />
      {/* <OurInvestmentPortfolio /> */}
      <OurBlogs />
      {/* <TestimonialCarousel /> */}
    </>
  );
};

export default Home;
