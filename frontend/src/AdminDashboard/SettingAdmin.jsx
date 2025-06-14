import { useState } from "react";
import { X } from "lucide-react";
import profile from "../assets/profl.jpg";

export default function SettingsPage() {
  const [publicProfile, setPublicProfile] = useState(false);
  const [formData, setFormData] = useState({
    name: "Jason Tatum",
    gender: "male",
    phone: "",
    email: "jason@studio.io",
    country: "Spain",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setPublicProfile(!publicProfile);
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", formData);
    // Implementation for saving data would go here
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-gray-50 min-h-screen rounded-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 mb-6">
          <span className="text-gray-800 px-1 py-1 text-lg font-medium">
            General Setting
          </span>
        
        <div className="flex items-center mt-3 md:mt-0">
          <span className="mr-2 text-gray-800 font-medium">Public Profile</span>
          <button
            onClick={handleToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              publicProfile ? "bg-blue-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                publicProfile ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Profile Photo Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center  pb-2">
          <label className="text-gray-800 font-medium mb-2 md:mb-0">
            Photo
          </label>
          <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto">
            <span className="text-gray-500 mb-2 md:mb-0 md:mr-4">
              Jason Tatum{" "}
            </span>
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label
              htmlFor="name"
              className="text-gray-800 font-medium w-32 mb-1 md:mb-0"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full md:w-2/3 lg:w-3/4 p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label
              htmlFor="gender"
              className="text-gray-800 font-medium w-32 mb-1 md:mb-0"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              className="w-full md:w-2/3 lg:w-3/4 p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label
              htmlFor="phone"
              className="text-gray-800 font-medium w-32 mb-1 md:mb-0"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-2/3 lg:w-3/4 p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label
              htmlFor="email"
              className="text-gray-800 font-medium w-32 mb-1 md:mb-0"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-2/3 lg:w-3/4 p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label
              htmlFor="country"
              className="text-gray-800 font-medium w-32 mb-1 md:mb-0"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full md:w-2/3 lg:w-3/4 p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label
              htmlFor="currentPassword"
              className="text-gray-800 font-medium w-32 mb-1 md:mb-0"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              placeholder="Your current password"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full md:w-2/3 lg:w-3/4 p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label
              htmlFor="newPassword"
              className="text-gray-800 font-medium w-32 mb-1 md:mb-0"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="New password"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full md:w-2/3 lg:w-3/4 p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <label
              htmlFor="confirmPassword"
              className="text-gray-800 font-medium w-32 mb-1 md:mb-0"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full md:w-2/3 lg:w-3/4 p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Bottom Save Button */}
        <div className="mt-8">
          <div className="flex justify-center sm:justify-end">
            <button
              type="button"
              onClick={handleSaveChanges}
              className="w-full sm:w-auto bg-blue-600 text-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
