import React from "react";
import "./Footer.css";
import HireMe from "../../assets/HireMMe.png";

const Footer = () => (
  <footer className="custom-footer">
    <div className="footer-top">
      <div className="footer-col left">
        <img src={HireMe} alt="HireMe Logo" className="footer-logo" />
        <p className="footer-description">
          Your go-to platform for verified local service providers
        </p>
        <address>
          <strong>
            PROHUB, Salawu Olabode Avenue,
            <br />
            Ewung Road, Idi-aba, Abeokuta 110124
          </strong>
        </address>
      </div>
      <div className="footer-col-1">
        <div className="footer-col">
          <h3>Home</h3>
          <ul>
            <li>Partners</li>
            <li>Services</li>
            <li>Artisans</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Stay Updated</h3>
          <ul>
            <li>Newsletter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Contact us</li>
            <li>FAQs</li>
            <li>Become an artisan</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="footer-divider" />
    <div className="footer-bottom">
      <div className="footer-copy">
        <span>&copy; 2025 Find Artisan. All right reserved</span>
      </div>
      <div className="footer-links">
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  </footer>
);

export default Footer;
