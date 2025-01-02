import ContactForm from "../../../utils/ContactForm";
import DevelopmentPortfolio from "../../../utils/developmentPortfolio";

const PortfolioDevelopment = () => {
  return (
    <div className="flex flex-col items-center  sm:pt-7">
      <DevelopmentPortfolio />
      <ContactForm />
    </div>
  );
};

export default PortfolioDevelopment;
