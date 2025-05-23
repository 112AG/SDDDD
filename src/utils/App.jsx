import React, { useContext } from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Calculator from "../pages/Calculator";
import Career from "../pages/Career";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import MediaCoverage from "../pages/MediaCoverage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import PageNotFound from "../pages/PageNotFound";
import Testimonials from "../components/Testimonials";
import Services from "../pages/services/Services";
import ScrollToTop from "./ScrollToTop";
import '../styles/index.css';
 

function App() {
   return (
    <div 

    className="animate-fadeIn"
    >
      <Header/>
      <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/emi-calculator" element={<Calculator />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/media-coverage" element={<MediaCoverage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-condition" element={<TermsCondition />} />
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path="/services/:slug" element={<Services/>}/>
      <Route path="/emi-calculator" element={<Calculator/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
