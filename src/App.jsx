import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Portfolio from "./pages/Portfolio";
import PrivacyPolicy from "./pages/privacyPolicy";
import Blogs from "./pages/blogs";
import Header from "./component/header";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
