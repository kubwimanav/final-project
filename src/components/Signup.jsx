import { useState, useEffect } from "react";

import comput from "../assets/image1.jpg";

const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    // Set the height of the container to the viewport height
    const setHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Initial set
    setHeight();

    // Update on resize
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[95vh] mx-auto mt-4 max-w-[750px] rounded-lg bg-white shadow-md">
      {/* Brand side */}
      <div
        className="bg-[#003366] bg-opacity-85 bg-cover bg-center w-full md:w-1/2 flex flex-col items-center justify-center rounded-t-lg md:rounded-l-xl md:rounded-tr-none text-white p-8 md:p-10 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(${comput})`,
        }}
      >
        <div className="mb-8 md:mb-10">
          <div className="w-[70px] h-[80px] mx-auto mb-4 bg-white rounded-full flex items-center justify-center relative">
            <div className="w-[60px] h-[60px] bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%2778b0a0%27%3E%3Cpath d=%27M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z%27/%3E%3C/svg%3E')] bg-contain bg-no-repeat bg-center"></div>
          </div>
          <h3 className="text-[22px] font-medium">
            Digital Lost and Found System
          </h3>
        </div>
        <p className="mb-5 text-base">Already have an account?</p>
        <Link
          to={"/login"}
          className="px-8 py-2 bg-transparent text-white border-2 border-white rounded-full text-base transition-all hover:bg-white/10"
        >
          Sign In
        </Link>
      </div>

      {/* Form side */}
      <div className="flex-1 px-6 md:px-10 py-5 flex flex-col">
        <h1 className="text-3xl font-medium mb-1">Hello!</h1>
        <p className="text-gray-500 mb-1">Please signup to continue</p>

        <div className="w-full">
          {/* First row with first and last name */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <div className="flex-1 mb-1 relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full py-3 border-b border-gray-300 text-base text-gray-800 bg-transparent focus:outline-none focus:border-[#78b0a0] placeholder-gray-400"
              />
            </div>

            <div className="flex-1 mb-1 relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full py-3 border-b border-gray-300 text-base text-gray-800 bg-transparent focus:outline-none focus:border-[#78b0a0] placeholder-gray-400"
              />
            </div>
          </div>

          <div className="mb-1 relative">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-3 border-b border-gray-300 text-base text-gray-800 bg-transparent focus:outline-none focus:border-[#78b0a0] placeholder-gray-400"
            />
          </div>

          <div className="mb-1 relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3 border-b border-gray-300 text-base text-gray-800 bg-transparent focus:outline-none focus:border-[#78b0a0] placeholder-gray-400"
            />
          </div>

          <div className="mb-1 relative">
            <div className="relative">
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full py-3 border-b border-gray-300 text-base text-gray-800 bg-transparent appearance-none focus:outline-none focus:border-[#78b0a0]"
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="mb-1 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-3 border-b border-gray-300 text-base text-gray-800 bg-transparent focus:outline-none focus:border-[#78b0a0] placeholder-gray-400"
            />
          </div>

          <div className="mb-1 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full py-3 border-b border-gray-300 text-base text-gray-800 bg-transparent focus:outline-none focus:border-[#78b0a0] placeholder-gray-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-2 px-4 bg-[#003366] text-white rounded text-base cursor-pointer transition-colors hover:bg-[#669e8d] mt-2"
          >
            Sign Up
          </button>

          <div className="relative text-center my-1">
            <div
              className="before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[calc(50%-20px)] before:h-px before:bg-gray-300 
                          after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[calc(50%-20px)] after:h-px after:bg-gray-300"
            >
              <span className="bg-white px-2 text-sm text-gray-500 relative z-10">
                or
              </span>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            I'm already a member!{" "}
            <a className="text-[#78b0a0] font-medium no-underline hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
