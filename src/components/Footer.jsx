import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to find what you've lost?</h2>
          <p>
            Join thousands of UKM students and staff who have successfully
            recovered their belongings.
          </p>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary">
              Register Now
            </a>
            <a href="/how-it-works" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Wave Section */}
      <div className="wave-section">
        <div className="wave1"></div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>FoundeLost</h3>
            <p>An effective lost and found system for university campus.</p>
            <p>
              Helping students and staff find their lost belongings since 2023.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/lost-items">Lost Items</a>
              </li>
              <li>
                <a href="/found-items">Found Items</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>
              <IoLocationOutline className="icon-location" /> Kigali,Rwanda
            </p>
            <p>
              <HiOutlineMail className="icon-email" /> vkubwimana20@gmail.com
            </p>
            <p>
              <IoIosPhonePortrait className="icon-phone" /> +250789466837
            </p>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" className="social-icon">
                <MdFacebook className="icon-facebook" />
              </a>
              <a href="https://twitter.com" className="social-icon">
                <BsTwitterX className="icon-twitter" />
              </a>
              <a href="https://instagram.com" className="social-icon">
                <BsInstagram className="icon-instagram" />
              </a>
              <a href="https://linkedin.com" className="social-icon">
                <FaLinkedinIn className="icon-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} The Best Ever Group. All rights reserved.</p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a> |
            <a href="/terms-of-service">Terms of Service</a> |
            <a href="/contact">Contact Us</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
