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
import Category from "../pages/Category";
import Events from "../pages/Events";
import Insurance from "../pages/Insurance";
import MediaCoverage from "../pages/MediaCoverage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import PageNotFound from "../pages/PageNotFound";
import { DropDownProvider } from "../context/DropDownContext";
import Testimonials from "../components/Testimonials";
import Services from "../pages/services/Services";
 

function App() {
  // const {setShowCategory, setShowInsurance} = useContext(DropDownProvider)
   return (
    <div 
    // onMouseEnter={() => {
    //   setShowCategory(false);
    //   setShowInsurance(false);
    // }}
    className="animate-fadeIn"
    >
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/emi-calculator" element={<Calculator />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/category" element={<Category />} />
      <Route path="/events" element={<Events />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/media-coverage" element={<MediaCoverage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-condition" element={<TermsCondition />} />
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path="/services/:slug" element={<Services/>}/>
    </Routes>
    <Footer/>

    <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            // transform: translateY(20px);
          }
          to {
            opacity: 1;
            // transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.4s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
