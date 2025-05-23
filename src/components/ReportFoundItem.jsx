import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ReportFoundItem = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    foundName: "",
    foundEmail: "",
    phoneNumber: "",
    itemName: "",
    itemImage: null,
    itemSerialNumber: "",
    location: "",
    description: "",
    dateFound: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        foundName: "",
        foundEmail: "",
        phoneNumber: "",
        itemName: "",
        itemImage: null,
        itemSerialNumber: "",
        location: "",
        description: "",
        dateFound: "",
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
        itemImage: file,
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
    if (!formData.foundName.trim()) errors.foundName = "Your name is required";
    if (!formData.itemName.trim()) errors.itemName = "Item name is required";
    if (!formData.location.trim()) errors.location = "Location is required";
    if (!formData.dateFound.trim()) errors.dateFound = "Date found is required";

    // Basic email validation
    if (!formData.foundEmail.trim()) {
      errors.foundEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.foundEmail)) {
      errors.foundEmail = "Please enter a valid email address";
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

    // Submit to backend
    fetch("/api/found-items", {
      method: "POST",
      body: submitData,
    })
      .then((response) => {
        if (response.ok) {
          onSubmit(submitData);
          onClose();
        } else {
          console.error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(49,49,49,0.8)] bg-opacity-80 flex justify-center items-start sm:items-center z-1000 p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[470px] md:max-w-[520px] lg:max-w-[600px] min-h-fit my-2 sm:my-0">
        {/* Close button positioned at top right, partially outside */}
        <button
          className="absolute right-0 top-0 z-20 flex items-center justify-center h-8 w-8 bg-blue-700 text-white hover:bg-blue-800 transition-colors -mt-2 -mr-2 rounded-md shadow-lg"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Card with header and content */}
        <div className="w-full">
          {/* Main Form Container */}
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-2xl">
            <div className="space-y-2 sm:space-y-3">
              {/* Header */}
              <div className="text-center mb-2 sm:mb-3">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Report Found Item
                </h4>
              </div>

              {/* Name and Email Row */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="flex-1 space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="foundName"
                    value={formData.foundName}
                    onChange={handleChange}
                    className={`w-full px-1.5 py-1.5 sm:px-2.5 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      formErrors.foundName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {formErrors.foundName && (
                    <p className="text-red-500 text-xs">
                      {formErrors.foundName}
                    </p>
                  )}
                </div>

                <div className="flex-1 space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="foundEmail"
                    value={formData.foundEmail}
                    onChange={handleChange}
                    className={`w-full px-1.5 py-1.5 sm:px-2.5 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      formErrors.foundEmail
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.foundEmail && (
                    <p className="text-red-500 text-xs">
                      {formErrors.foundEmail}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone and Item Name Row */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="flex-1 space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-1.5 py-1.5 sm:px-2.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="0789488837"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleChange}
                    className={`w-full px-1.5 py-1.5 sm:px-2.5 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      formErrors.itemName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="iPhone"
                  />
                  {formErrors.itemName && (
                    <p className="text-red-500 text-xs">
                      {formErrors.itemName}
                    </p>
                  )}
                </div>
              </div>

              {/* Serial Number and Location Row */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="flex-1 space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Serial Number
                  </label>
                  <input
                    type="text"
                    name="itemSerialNumber"
                    value={formData.itemSerialNumber}
                    onChange={handleChange}
                    className="w-full px-2 py-1.5 sm:px-2 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Serial number or unique identifier"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Location Found *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-2 py-1.5 sm:px-2 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      formErrors.location ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Location area"
                  />
                  {formErrors.location && (
                    <p className="text-red-500 text-xs">
                      {formErrors.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Date Found and Image Upload Row */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="flex-1 space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Date Found *
                  </label>
                  <input
                    type="date"
                    name="dateFound"
                    value={formData.dateFound}
                    onChange={handleChange}
                    className={`w-full px-2 py-1.5 sm:px-2 sm:py-2 text-xs sm:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      formErrors.dateFound
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formErrors.dateFound && (
                    <p className="text-red-500 text-xs">
                      {formErrors.dateFound}
                    </p>
                  )}
                </div>

                <div className="flex-1 space-y-1">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-2 py-1 sm:px-2 sm:py-1.5 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-1 file:py-0.5 file:px-2 file:rounded-md file:border-0 file:text-xs file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {imagePreview && (
                    <div className="mt-1">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full max-w-[100px] h-12 object-cover rounded-md border border-gray-300"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-2 py-1.5 sm:px-2 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical min-h-[50px]"
                  placeholder="Describe the item in detail (color, brand, condition, etc.)"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-3 sm:pt-4">
              <button
                onClick={onClose}
                className="w-full sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 sm:py-2.5 px-4 rounded-lg transition-colors order-2 sm:order-1 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-2.5 px-4 rounded-lg transition-colors order-1 sm:order-2 text-sm"
              >
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportFoundItem;
