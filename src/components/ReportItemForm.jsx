import React, { useState, useEffect } from "react";
import "../Styles/ReportItemForm.css"; // We'll create this CSS file next

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
      className="report-item-modal-overlay"
      onClick={(e) => {
        // Close modal when clicking outside
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="report-item-modal">
        <div className="report-item-modal-header">
          <h2>Report a Lost Item</h2>
          <button className="report-item-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="report-item-form" onSubmit={handleSubmit}>
          <div className="report-item-form-section">
            <h3>Item Information</h3>

            <div className="report-item-form-group">
              <label htmlFor="itemName">
                Item Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className={formErrors.itemName ? "report-item-input-error" : ""}
                placeholder="Enter item name"
              />
              {formErrors.itemName && (
                <div className="report-item-error">{formErrors.itemName}</div>
              )}
            </div>

            <div className="report-item-form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="documents">Documents</option>
                <option value="keys">Keys</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="report-item-form-group">
              <label htmlFor="location">
                Where Lost<span className="required">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={formErrors.location ? "report-item-input-error" : ""}
                placeholder="Building, room, area, etc."
              />
              {formErrors.location && (
                <div className="report-item-error">{formErrors.location}</div>
              )}
            </div>

            <div className="report-item-form-group">
              <label htmlFor="date">
                Date Lost<span className="required">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={formErrors.date ? "report-item-input-error" : ""}
              />
              {formErrors.date && (
                <div className="report-item-error">{formErrors.date}</div>
              )}
            </div>

            <div className="report-item-form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Add any distinguishing features that might help identify your item"
                rows="4"
              />
            </div>

            <div className="report-item-form-group">
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="report-item-file-input"
              />

              {imagePreview && (
                <div className="report-item-image-preview">
                  <img src={imagePreview} alt="Item preview" />
                </div>
              )}
            </div>
          </div>

          <div className="report-item-form-section">
            <h3>Contact Information</h3>

            <div className="report-item-form-group">
              <label htmlFor="contactName">
                Your Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className={
                  formErrors.contactName ? "report-item-input-error" : ""
                }
                placeholder="Enter your full name"
              />
              {formErrors.contactName && (
                <div className="report-item-error">
                  {formErrors.contactName}
                </div>
              )}
            </div>

            <div className="report-item-form-group">
              <label htmlFor="contactEmail">
                Email<span className="required">*</span>
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className={
                  formErrors.contactEmail ? "report-item-input-error" : ""
                }
                placeholder="your.email@example.com"
              />
              {formErrors.contactEmail && (
                <div className="report-item-error">
                  {formErrors.contactEmail}
                </div>
              )}
            </div>

            <div className="report-item-form-group">
              <label htmlFor="contactPhone">Phone Number</label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="+123 456-7890"
              />
            </div>
          </div>

          <div className="report-item-form-actions">
            <button
              type="button"
              className="report-item-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="report-item-submit-btn">
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportItemForm;
