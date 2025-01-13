// import ContactForm from "../../utils/ContactForm";
import NextGenproperties from "./NextGenproperties";
import AboutBanner from "./banner";
import OurFounder from "./founder";
// import AskQuesdtion from "../faq/6-AskQuesdtion";
// import PrivacyPolicy from "../ourPolicy/privacyPolicy";
const About = () => {
  return (
    <>
      <div className=" flex flex-col md:pt-6">
        <h1 className="flex font-medium font-sans text-2xl md:text-5xl justify-center ">
          About Us
        </h1>
        <AboutBanner />
        <OurFounder />
        <NextGenproperties />
        {/* <AskQuesdtion /> */}
        {/* <PrivacyPolicy /> */}
        {/* <ContactForm /> */}
      </div>
    </>
  );
};

export default About;
