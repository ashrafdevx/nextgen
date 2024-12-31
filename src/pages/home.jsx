import AboutUs from "../component/home/3-AboutUs";
import Banner from "../component/home/1-Banner";
import NextGenProperties from "../component/home/2-NextGenProperties";
import OurProject from "../component/home/4-OurProject";
import OurInvestmentPortfolio from "../component/home/5-OurInvestmentPortfolio.jsx";
import AskQuesdtion from "../component/home/6-AskQuesdtion.jsx";
import TestimonialCarousel from "../component/home/7-OurCustomerFeedback.jsx";
import OurBlogs from "../component/home/8-OurBlogs.jsx";
import ContactForm from "../component/home/9-form.jsx";

const Home = () => {
  return (
    <>
      <Banner />
      <NextGenProperties />
      <AboutUs />
      <OurProject />
      <OurInvestmentPortfolio />
      <AskQuesdtion />
      <TestimonialCarousel />
      <OurBlogs />
      <ContactForm />
    </>
  );
};

export default Home;
