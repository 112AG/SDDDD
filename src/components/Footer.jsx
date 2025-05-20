import { FaInstagram, FaWhatsapp, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const linkClass =
    "hover:text-[#109E73] hover:underline transition-all duration-200 ease-in-out";

  return (
    <footer className="bg-[#f6f8fb] text-gray-800 px-6 py-12 text-sm border-t border-gray-300">
      <div className="max-w-6xl flex flex-wrap items-start justify-between mx-auto gap-8">
        
        {/* Menu */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Menu</h3>
          <ul className="space-y-2">
            <li><Link to="/" className={linkClass}>Home</Link></li>
            <li><Link to="/about" className={linkClass}>About Us</Link></li>
            <li><Link to="services/working-capital-loans" className={linkClass}>Our Services</Link></li>
            <li><Link to="/testimonials" className={linkClass}>Testimonials</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><Link to="/faqs" className={linkClass}>FAQs</Link></li>
            <li><Link to="/how-it-works" className={linkClass}>How It Works</Link></li>
            <li><Link to="/qualifications" className={linkClass}>Qualifications</Link></li>
            <li><Link to="/career" className={linkClass}>Career</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/blog" className={linkClass}>Blog</Link></li>
            <li><Link to="/apply" className={linkClass}>Apply Now</Link></li>
            <li><Link to="/terms" className={linkClass}>Terms of Service</Link></li>
            <li><Link to="/privacy" className={linkClass}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
          <ul className="">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#109E73]" /> +91 9106531465
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#109E73]" /> sdfinancialofficial@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#109E73] mt-1" />
              <span>
                C-168/169, Emerald One,<br />
                B/s, Gujarat Kidney Hospital,<br />
                Jetalpur Road, Vadodara,<br />
                Gujarat, India
              </span>
            </li>
          </ul>
        </div>

        {/* SD Financial Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">SD Financial Services</h3>
          <p className="text-xs mb-4 leading-relaxed text-gray-600">
            With SD Finance, managing your money has<br />never been more convenient.
          </p>
          <div className="flex gap-4 text-xl text-gray-600 transition-colors duration-200">
            <a href="#" className="hover:text-[#109E73]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#109E73]"><FaWhatsapp /></a>
            <a href="#" className="hover:text-[#109E73]"><FaTwitter /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
