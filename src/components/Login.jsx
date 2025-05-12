import { useState } from "react";
import comput from "../assets/image1.jpg";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  // Mock Link component since we can't import react-router-dom
  const Link = ({ to, children, className }) => (
    <a href={to} className={className}>
      {children}
    </a>
  );

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[#f5f5f5] font-sans p-5 box-border">
      <div className="flex flex-col md:flex-row justify-between w-full md:w-4/5 max-w-[700px] min-h-[60px] my-8 mx-auto rounded-xl bg-white shadow-md overflow-hidden">
        {/* Left side - Brand container */}
        <div
          className="bg-[#003366] bg-opacity-85 bg-cover bg-center w-full md:w-1/2 flex flex-col items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none text-white p-10 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(${comput})`,
          }}
        >
          <div className="mb-8 flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full mb-4"></div>
            <h3 className="mt-4 text-2xl font-semibold">
              Digital Lost and Found System
            </h3>
          </div>
          <p>Don't have an account?</p>
          <Link to="/register" className="no-underline">
            <button className="bg-transparent border-2 border-white text-white py-2 px-8 rounded mt-4 text-base cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#003366]">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Right side - Form container */}
        <div className="w-full md:w-[55%] p-10 flex flex-col justify-center">
          <h1 className="text-gray-800 mb-2 text-4xl">Welcome Back!</h1>
          <p className="text-gray-500 mb-8">Please login to continue</p>

          <div className="flex flex-col gap-6 w-full">
            <div className="w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-base focus:outline-none focus:border-[#003366]"
              />
            </div>
            <div className="w-full">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded text-base focus:outline-none focus:border-[#003366]"
              />
            </div>
            <div className="text-right -mt-2">
              <Link
                to="/forgot-password"
                className="text-[#003366] no-underline text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#003366] text-white border-none p-3 rounded text-base cursor-pointer transition-all duration-300 hover:bg-[#004c99] mt-4"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
