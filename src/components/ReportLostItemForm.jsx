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
        <div className="bg-white rounded-2xl shadow-2xl w-full h-full flex flex-col overflow-hidden">
          {/* Header area */}
          <div className="relative bg-[#003366] text-white p-4 flex justify-center items-center">
            <h2 className="text-xl font-semibold">Report Lost Item</h2>
          </div>

          {/* Form content */}
          <div className="p-4 px-6 flex-grow overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800">
                  Item Information
                </h3>

                <div className="space-y-1">
                  <label
                    htmlFor="itemName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Item Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleChange}
                    className={`w-full text-sm px-3 py-2 border ${
                      formErrors.itemName ? "border-red-500" : "border-gray-200"
                    } rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter item name"
                  />
                  {formErrors.itemName && (
                    <div className="text-red-500 text-xs">
                      {formErrors.itemName}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="category"
                    className="text-sm font-mono text-gray-700"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                    <option value="documents">Documents</option>
                    <option value="keys">Keys</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="location"
                    className="text-sm font-mono text-gray-700"
                  >
                    Where Lost
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full text-xs px-3 py-2 border ${
                      formErrors.location ? "border-red-500" : "border-gray-200"
                    } rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Building, room, area, etc."
                  />
                  {formErrors.location && (
                    <div className="text-red-500 text-xs">
                      {formErrors.location}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="date"
                    className="text-sm font-mono text-gray-700"
                  >
                    Date Lost
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full text-sm px-3 py-2 border ${
                      formErrors.date ? "border-red-500" : "border-gray-200"
                    } rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {formErrors.date && (
                    <div className="text-red-500 text-xs">
                      {formErrors.date}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="description"
                    className="text-sm font-mono text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Add any distinguishing features that might help identify your item"
                    rows="3"
                    className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="image"
                    className="text-sm font-mono text-gray-700"
                  >
                    Upload Image
                  </label>
                  <div className="p-3 flex flex-col items-center justify-center bg-blue-50 border border-gray-200 rounded-lg cursor-pointer transition-all hover:bg-blue-100">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="text-sm cursor-pointer w-full"
                    />
                  </div>

                  {imagePreview && (
                    <div className="mt-2 text-center p-2 bg-white rounded-lg border border-gray-200 shadow-sm transition-transform hover:scale-105">
                      <img
                        src={imagePreview}
                        alt="Item preview"
                        className="max-w-full h-auto rounded"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-800">
                  Contact Information
                </h3>

                <div className="space-y-1">
                  <label
                    htmlFor="contactName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={`w-full text-sm px-3 py-2 border ${
                      formErrors.contactName
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.contactName && (
                    <div className="text-red-500 text-xs">
                      {formErrors.contactName}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contactEmail"
                    className="text-xs font-medium text-gray-700"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className={`w-full text-sm px-3 py-2 border ${
                      formErrors.contactEmail
                        ? "border-red-500"
                        : "border-gray-200"
                    } rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.contactEmail && (
                    <div className="text-red-500 text-xs">
                      {formErrors.contactEmail}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contactPhone"
                    className="text-xs font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+123 456-7890"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons fixed at bottom */}
          <div className="p-4 px-6 bg-gray-50 border-t border-gray-200">
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="flex-1 py-2 px-4 bg-gradient-to-b from-[#003366] to-[#003366] text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportItemForm;
