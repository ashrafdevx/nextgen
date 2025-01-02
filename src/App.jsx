import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import PrivacyPolicy from "./pages/privacyPolicy";
import Blogs from "./pages/blogs";
import Header from "./component/header";
import Footer from "./component/footer";
import Services from "./pages/services/services";
import IndividualAndHomeOwner from "./pages/services/individualAndHomeOwner/index";
import InvesterAndFundManagers from "./pages/services/InvesterAndFundManagers";
import EstateInvestmentAndManagement from "./pages/services/estateInvesterManagement";
import Portfolio from "./pages/portfolio";
import PortfolioDevelopment from "./pages/portfolio/DevelopmentPortfolio/RealEstatePortfolioDevelopment";
import RealEstatePortfolioInvestment from "./pages/portfolio/InvestmenttPortfolio/RealEstatePortfolioInvestment";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route
            path="individuals-homeowners"
            element={<IndividualAndHomeOwner />}
          />
          <Route
            path="investment-management"
            element={<EstateInvestmentAndManagement />}
          />
          <Route
            path="investors-fund-manager"
            element={<InvesterAndFundManagers />}
          />
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
          <Route
            path="development-portfolio"
            element={<PortfolioDevelopment />}
          />
          <Route
            path="investment-portfolio"
            element={<RealEstatePortfolioInvestment />}
          />
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
