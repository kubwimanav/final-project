import React, { useState } from "react";
import "../Styles/LostItemForm.css"; // Assuming you have a CSS file for styling

const ReportLostForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    dateTime: "",
    location: "",
    description: "",
    securityQuestion: "",
    securityAnswer: "",
    contactInfo: "",
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Electronics",
    "Books/Notes",
    "ID/Cards",
    "Keys",
    "Clothing",
    "Accessories",
    "Water Bottles/Tumblers",
    "Bags/Backpacks",
    "Wallets",
    "Others",
  ];

  const locations = [
    "Faculty of Information Science and Technology",
    "Faculty of Engineering",
    "Faculty of Science",
    "Main Library",
    "Chancellery Building",
    "Cafeteria/Food Court",
    "Student Residential Halls",
    "Sports Complex",
    "Bus Stop",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your server
    console.log("Form data submitted:", formData);

    // Show success message
    setSubmitted(true);

    // Reset form after submission (you might want to keep this behavior or remove it)
    setTimeout(() => {
      setFormData({
        itemName: "",
        category: "",
        dateTime: "",
        location: "",
        description: "",
        securityQuestion: "",
        securityAnswer: "",
        contactInfo: "",
        image: null,
      });
      setPreviewUrl("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="report-lost-container">
      <h2>Report Lost Item</h2>

      {submitted ? (
        <div className="success-message">
          <p>Your lost item has been reported successfully!</p>
          <p>Others who find your item will be able to contact you.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="report-lost-form">
          <div className="form-group">
            <label htmlFor="itemName">Item Name*</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
              placeholder="Enter item name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category*</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dateTime">Date & Time Lost*</label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Last Seen Location*</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select a location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description*</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Provide a detailed description of your lost item (color, size, brand, distinguishing features, etc.)"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="securityQuestion">Security Question*</label>
            <input
              type="text"
              id="securityQuestion"
              name="securityQuestion"
              value={formData.securityQuestion}
              onChange={handleChange}
              required
              placeholder="Create a security question to validate ownership"
            />
          </div>

          <div className="form-group">
            <label htmlFor="securityAnswer">Security Answer*</label>
            <input
              type="text"
              id="securityAnswer"
              name="securityAnswer"
              value={formData.securityAnswer}
              onChange={handleChange}
              required
              placeholder="Answer to your security question"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactInfo">Contact Information*</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              required
              placeholder="Provide your phone number or UKM email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Image (Optional)</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
            {previewUrl && (
              <div className="image-preview">
                <img src={previewUrl} alt="Item preview" />
              </div>
            )}
          </div>

          <div className="form-group button-group">
            <button type="submit" className="submit-button">
              Submit Report
            </button>
            <button
              type="reset"
              className="reset-button"
              onClick={() => {
                setFormData({
                  itemName: "",
                  category: "",
                  dateTime: "",
                  location: "",
                  description: "",
                  securityQuestion: "",
                  securityAnswer: "",
                  contactInfo: "",
                  image: null,
                });
                setPreviewUrl("");
              }}
            >
              Clear Form
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReportLostForm;
