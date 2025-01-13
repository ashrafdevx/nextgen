import Banner from "./2-banner";
import ComprehensiveInvestmentManagement from "./3-ComprehensiveInvestmentManagement";
import PhotosConstructionUpdates from "./4-PhotosConstructionUpdates";
import EfficientProjectManagement from "./5-EfficientProjectManagement";
import ProvenTrackRecord from "./6-ProvenTrackRecord";
import InvestmentResearchAnalysis from "./7-InvestmentResearchAnalysis";
// import ContactForm from "../../../utils/ContactForm";
import Heading from "./Heading";

const EstateInvestmentAndManagement = () => {
  return (
    <div className="flex flex-col items-center sm:pt-7">
      <div className="grid grid-cols-1 md:grid-cols-1 items-center justify-center gap-4">
        <div className="order-2 md:order-1 flex items-center justify-center">
          <Heading />
        </div>
        <div className="order-1 md:order-2">
          <Banner />
        </div>
      </div>
      <ComprehensiveInvestmentManagement />
      <PhotosConstructionUpdates />
      <EfficientProjectManagement />
      <ProvenTrackRecord />
      <InvestmentResearchAnalysis />
      {/* <ContactForm /> */}
    </div>
  );
};

export default EstateInvestmentAndManagement;
