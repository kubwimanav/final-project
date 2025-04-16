import React, { useState } from "react";
import "./App.css";
import {
  FaSearch,
  FaTachometerAlt,
  FaShieldAlt,
  FaCamera,
  FaMapMarkerAlt,
  FaBell,
  FaMobileAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import ReportItemForm from "./components/ReportItemForm";

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showReportLostModal, setShowReportLostModal] = useState(false);
  const [showReportFoundModal, setShowReportFoundModal] = useState(false);

  const handlemadal = () => {
    setShowReportFoundModal(!showReportFoundModal);
  };
  return (
    <div className="font-sans">
      {/* Header */}

      {showReportFoundModal && <ReportItemForm handlemadal={ handlemadal} />}
      <header className="bg-blue-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center flex-col md:flex-row">
          <div className="flex items-center text-2xl font-bold">
            <FaSearch className="mr-2 text-3xl" />
            <span>CampusFound</span>
          </div>
          <nav className="my-4 md:my-0">
            <ul className="flex flex-wrap justify-center">
              <li className="mx-2">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Lost Items
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Found Items
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded font-medium hover:bg-yellow-600 transition-all"
              onClick={() => setShowLoginModal(true)}
            >
              Log In
            </button>
            <button
              className="ml-2 bg-transparent text-white px-4 py-2 rounded font-medium border border-white hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={() => setShowRegisterModal(true)}
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Lost Something? Found Something?
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our campus lost and found system helps you recover your lost items
            or return items you've found to their rightful owners. Simply search
            below or report a lost/found item.
          </p>
          <div className="flex flex-col md:flex-row max-w-3xl mx-auto bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search for an item..."
              className="flex-1 py-4 px-6 text-gray-700 focus:outline-none"
            />
            <button className="bg-yellow-500 text-white py-4 px-6 hover:bg-yellow-600 transition-colors">
              <FaSearch className="inline mr-2" /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Use CampusFound?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to find your lost items or return found
              items to the rightful owners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaTachometerAlt />}
              title="Fast & Efficient"
              description="Quickly search for your lost items or report found items with our intuitive interface."
            />
            <FeatureCard
              icon={<FaShieldAlt />}
              title="Secure Authentication"
              description="Security questions ensure that items are returned to the rightful owners."
            />
            <FeatureCard
              icon={<FaCamera />}
              title="Photo Upload"
              description="Upload photos of lost or found items to make identification easier."
            />
            <FeatureCard
              icon={<FaMapMarkerAlt />}
              title="Location Tracking"
              description="Specify exactly where an item was lost or found to narrow down the search."
            />
            <FeatureCard
              icon={<FaBell />}
              title="Notifications"
              description="Get notified when someone finds your lost item or claims an item you've found."
            />
            <FeatureCard
              icon={<FaMobileAlt />}
              title="Mobile Friendly"
              description="Access the lost and found system from any device, anywhere on campus."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to recover your lost items or return
              found items
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-12">
            <Step
              number="1"
              title="Register"
              description="Create an account using your university email and provide your contact information."
            />
            <Step
              number="2"
              title="Report"
              description="Report a lost item with details or submit information about an item you've found."
            />
            <Step
              number="3"
              title="Search"
              description="Search through listings for your lost item or wait for the owner to claim the item you found."
            />
            <Step
              number="4"
              title="Verify"
              description="Answer security questions to verify ownership of the item."
            />
            <Step
              number="5"
              title="Recover"
              description="Arrange a meetup to recover your lost item or return the found item to its owner."
            />
          </div>
        </div>
      </section>

      {/* Recent Items Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Recently Listed Items
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through recently reported lost and found items on campus
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <TabButton
              label="All Items"
              active={activeTab === "all"}
              onClick={() => setActiveTab("all")}
            />
            <TabButton
              label="Lost Items"
              active={activeTab === "lost"}
              onClick={() => setActiveTab("lost")}
            />
            <TabButton
              label="Found Items"
              active={activeTab === "found"}
              onClick={() => setActiveTab("found")}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ItemCard
              type="found"
              title="Blue Water Bottle"
              location="Main Library, 2nd Floor"
              date="April 8, 2025"
              imageUrl="/api/placeholder/300/200"
              actionLabel="Claim Item"
            />
            <ItemCard
              type="lost"
              title="Student ID Card"
              location="Science Building, Lab 102"
              date="April 7, 2025"
              imageUrl="/api/placeholder/300/200"
              actionLabel="I Found This"
            />
            <ItemCard
              type="found"
              title="MacBook Charger"
              location="Student Center, Study Area"
              date="April 5, 2025"
              imageUrl="/api/placeholder/300/200"
              actionLabel="Claim Item"
            />
            <ItemCard
              type="lost"
              title="House Keys with Red Keychain"
              location="Engineering Building"
              date="April 3, 2025"
              imageUrl="/api/placeholder/300/200"
              actionLabel="I Found This"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Lost Item?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Register now and start using our campus lost and found system to
            recover your lost items or help others find theirs.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              className="bg-white text-blue-500 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
              onClick={() => setShowReportLostModal(true)}
            >
              Report Lost Item
            </button>
            <button
              className="bg-transparent text-white px-6 py-3 rounded font-medium border-2 border-white hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={handlemadal}
            >
              Report Found Item
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center text-xl font-bold mb-4">
                <FaSearch className="mr-2" />
                <span>CampusFound</span>
              </div>
              <p className="text-gray-400 mb-6">
                CampusFound is a lost and found system designed to help
                university students and staff recover their lost items
                efficiently.
              </p>
              <div className="flex gap-4">
                <SocialLink icon={<FaFacebookF />} />
                <SocialLink icon={<FaTwitter />} />
                <SocialLink icon={<FaInstagram />} />
                <SocialLink icon={<FaLinkedinIn />} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul>
                <FooterLink label="Home" />
                <FooterLink label="Lost Items" />
                <FooterLink label="Found Items" />
                <FooterLink label="How It Works" />
                <FooterLink label="FAQ" />
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl mb-4">Resources</h3>
              <ul>
                <FooterLink label="User Guide" />
                <FooterLink label="Privacy Policy" />
                <FooterLink label="Terms of Service" />
                <FooterLink label="Contact Support" />
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl mb-4">Contact Information</h3>
              <ContactItem
                icon={<FaMapMarkerAlt />}
                text="University Campus, Building 4, Room 101"
              />
              <ContactItem icon={<FaSearch />} text="info@campusfound.edu" />
              <ContactItem icon={<FaSearch />} text="(555) 123-4567" />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} CampusFound. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals would go here - simplified for this example */}
      {showLoginModal && (
        <Modal
          title="Log In"
          onClose={() => setShowLoginModal(false)}
          content={<LoginForm onClose={() => setShowLoginModal(false)} />}
        />
      )}

      {showRegisterModal && (
        <Modal
          title="Register"
          onClose={() => setShowRegisterModal(false)}
          content={<RegisterForm onClose={() => setShowRegisterModal(false)} />}
        />
      )}

      {showReportLostModal && (
        <Modal
          title="Report Lost Item"
          onClose={() => setShowReportLostModal(false)}
          content={
            <ReportItemForm
              type="lost"
              onClose={() => setShowReportLostModal(false)}
            />
          }
        />
      )}

      {showReportFoundModal && (
        <Modal
          title="Report Found Item"
          onClose={() => setShowReportFoundModal(false)}
          content={
            <ReportItemForm
              type="found"
              onClose={() => setShowReportFoundModal(false)}
            />
          }
        />
      )}
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-100 rounded-lg p-8 text-center transition-all hover:transform hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl text-blue-500 mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Step Component
function Step({ number, title, description }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-10 text-center">
      <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white text-2xl font-bold rounded-full mx-auto mb-6">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Tab Button Component
function TabButton({ label, active, onClick }) {
  return (
    <button
      className={`px-8 py-3 mx-2 border-b-2 ${
        active
          ? "text-blue-500 border-blue-500"
          : "text-gray-600 border-gray-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// Item Card Component
function ItemCard({ type, title, location, date, imageUrl, actionLabel }) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all hover:transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs ${
            type === "found" ? "bg-blue-500" : "bg-yellow-500"
          } text-white mb-3`}
        >
          {type === "found" ? "Found" : "Lost"}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-1">
          <FaMapMarkerAlt className="text-blue-500 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <span>{date}</span>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {actionLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

// Social Link Component
function SocialLink({ icon }) {
  return (
    <a
      href="#"
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
    >
      {icon}
    </a>
  );
}

// Footer Link Component
function FooterLink({ label }) {
  return (
    <li className="mb-3">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        {label}
      </a>
    </li>
  );
}

// Contact Item Component
function ContactItem({ icon, text }) {
  return (
    <div className="flex items-start mb-4 text-gray-400">
      <span className="text-blue-500 mt-1 mr-3">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

// Modal Component
function Modal({ title, onClose, content }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md overflow-hidden shadow-lg animate-fade-in">
        <div className="bg-blue-500 text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>
        <div className="p-6">{content}</div>
      </div>
    </div>
  );
}

// Form Components - Simplified for this example
function LoginForm({ onClose }) {
  return (
    <form>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>
      </div>
    </form>
  );
}

function RegisterForm({ onClose }) {
  return (
    <form>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your full name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your university email"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your university email"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your university email"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Create a password"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-medium">Confirm Password</label>
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Confirm your password"
        />
      </div>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Register
        </button>
      </div>
    </form>
  );
}



export default App;
