import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ReportItemForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "electronics",
    location: "",
    date: "",
    description: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        itemName: "",
        category: "electronics",
        location: "",
        date: "",
        description: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        image: null,
      });
      setImagePreview(null);
      setFormErrors({});
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null,
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.itemName.trim()) errors.itemName = "Item name is required";
    if (!formData.location.trim()) errors.location = "Location is required";
    if (!formData.date.trim()) errors.date = "Date is required";
    if (!formData.contactName.trim())
      errors.contactName = "Your name is required";

    // Basic email validation
    if (!formData.contactEmail.trim()) {
      errors.contactEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      errors.contactEmail = "Please enter a valid email address";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Create form data for submission (including image file)
    const submitData = new FormData();
    for (const key in formData) {
      submitData.append(key, formData[key]);
    }

    onSubmit(submitData);

    // Close the modal after successful submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
      onClick={(e) => {
        // Close modal when clicking outside
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-sm h-full max-h-screen">
        {/* Close button positioned at top right, partially outside */}
        <button
          className="absolute right-0 top-0 z-20 flex items-center justify-center h-8 w-8 bg-blue-700 text-white hover:bg-blue-800 transition-colors -mt-2 -mr-2 rounded-md"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Card with header and content */}
        <div className="w-full max-w-4xl max-h-[95vh] overflow-y-auto">
        

          {/* Main Form Container */}
          <div className="bg-white rounded-b-xl p-4 sm:p-6 lg:p-8">
            <div className="space-y-6 sm:space-y-8">
              {/* Location and Date Row */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-1 space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Where Lost <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Building, room, area, etc."
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Date Lost <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-1 space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Name Row */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-1 space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Address Row */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-1 space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="New York"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-6">
                <button
                  className="w-full sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors order-1 sm:order-2"
                >
                  Submit Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportItemForm;
