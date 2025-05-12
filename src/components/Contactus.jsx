import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import comput from "../assets/image1.jpg";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Show success message
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif] bg-[#f5f5f5] w-full min-h-screen m-0 overflow-x-hidden pb-12">
      <header
        className="relative pt-16 pb-24 px-5 bg-[#003366] bg-opacity-85 bg-cover bg-center text-center text-white mb-16"
        style={{
          background: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(${comput})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="font-light text-lg max-w-lg mx-auto">
            Have questions about our Lost and Found system? Reach out to our
            team using the information below or send us a message.
          </p>
        </div>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#f5f5f5"
            ></path>
          </svg>
        </div>
      </header>

      <div className="flex flex-col">
        {/* Google Map - Now at the top */}
        <div className="w-full h-64 md:h-80 bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Placeholder for Google Map - In a real implementation, this would be a Google Maps iframe */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
            {/* Simple map visualization placeholder */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%25%22 height=%22100%25%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23e0e0e0%22/%3E%3Cpath d=%22M0 0L100 100M100 0L0 100%22 stroke=%22%23d0d0d0%22 stroke-width=%222%22/%3E%3C/svg%3E')] opacity-30"></div>
            <div className="z-10 bg-white p-3 rounded-full shadow-lg">
              <MapPin size={32} className="text-[#003366]" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#003366] text-white py-2 px-4 text-center">
              University Campus, Main Building
            </div>
          </div>
        </div>

        {/* Combined Contact Info and Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#003366]/10 p-3 rounded-full mr-4">
                    <MapPin className="text-[#003366] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">
                      University Campus, Main Building
                      <br />
                      123 University Avenue
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#003366]/10 p-3 rounded-full mr-4">
                    <Phone className="text-[#003366] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      Main Office: (123) 456-7890
                      <br />
                      Support: (123) 456-7891
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#003366]/10 p-3 rounded-full mr-4">
                    <Mail className="text-[#003366] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      info@lostandfound.edu
                      <br />
                      support@lostandfound.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#003366]/10 p-3 rounded-full mr-4">
                    <Clock className="text-[#003366] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Office Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">
                Send us a Message
              </h2>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] focus:border-[#003366]"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] focus:border-[#003366]"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] focus:border-[#003366]"
                      placeholder="Inquiry about lost item"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#003366] focus:border-[#003366]"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#003366] text-white font-medium py-3 px-6 rounded-md hover:bg-[#004080] transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
