import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
const TawkToWidget = React.lazy(() => import("./utils/tawk"));
const About = React.lazy(() => import("./pages/about/about"));
const AskQuesdtion = React.lazy(() => import("./pages/faq/6-AskQuesdtion"));
// const PrivacyPolicy = React.lazy(() => import("./pages/about/privacyPolicy"));
const Blogs = React.lazy(() => import("./pages/blogs"));
const Header = React.lazy(() => import("./component/header"));
const Footer = React.lazy(() => import("./component/footer"));
const Services = React.lazy(() => import("./pages/services/services"));
const IndividualAndHomeOwner = React.lazy(() =>
  import("./pages/services/individualAndHomeOwner/index")
);
const InvesterAndFundManagers = React.lazy(() =>
  import("./pages/services/InvesterAndFundManagers")
);
const EstateInvestmentAndManagement = React.lazy(() =>
  import("./pages/services/estateInvesterManagement")
);
const Portfolio = React.lazy(() => import("./pages/portfolio"));
const PortfolioDevelopmentMain = React.lazy(() =>
  import(
    "./pages/portfolio/DevelopmentPortfolio/RealEstatePortfolioDevelopment"
  )
);
const PrivacyPolicy = React.lazy(() =>
  import("./pages/ourPolicy/privacyPolicy")
);
const InvestmentPortfolioMain = React.lazy(() =>
  import("./pages/portfolio/InvestmenttPortfolio/RealEstatePortfolioInvestment")
);
const Home = React.lazy(() => import("./pages/home/home"));
const LoginPage = React.lazy(() => import("./pages/login/login"));
const PropertyListing = React.lazy(() =>
  import("./pages/portfolio/DevelopmentPortfolio/developPortfolioById")
);
const InvestmentPortfolioById = React.lazy(() =>
  import("./pages/portfolio/InvestmenttPortfolio/investmentPortfolioById")
);
const ContactUs = React.lazy(() => import("./pages/contactUs/contactUs"));

function App() {
  const location = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    console.log("Route Called!!!!!!!!");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
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
            element={<PortfolioDevelopmentMain />}
          />
          <Route
            path="development-portfolio/:id"
            element={<PropertyListing />}
          />

          <Route
            path="investment-portfolio"
            element={<InvestmentPortfolioMain />}
          />
          <Route
            path="investment-portfolio/:id"
            element={<InvestmentPortfolioById />}
          />
        </Route>
        <Route path="/our-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<AskQuesdtion />} />
      </Routes>
      <div className="fixed bottom-4 right-4 max-w-xs max-h-[80vh] w-full h-auto overflow-hidden rounded-lg shadow-lg">
        <TawkToWidget />
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
      <Footer />
    </>
  );
}

export default App;
