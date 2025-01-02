import ContactForm from "../../../utils/ContactForm";
import InvestmentPortfolio from "./InvestmentPortfolio";

const RealEstatePortfolioInvestment = () => {
  return (
    <div className="flex flex-col items-center  sm:pt-7">
      <InvestmentPortfolio />
      <ContactForm />
    </div>
  );
};

export default RealEstatePortfolioInvestment;
