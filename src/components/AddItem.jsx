// AddItem.js
import React, { useState } from "react";
import "../Styles/AddItem.css";

const AddItem = () => {
  const [itemType, setItemType] = useState("lost");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    date: "",
    description: "",
    image: null,
    securityQuestion: "",
    securityAnswer: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    "ID/Cards",
    "Electronics",
    "Books",
    "Personal Items",
    "Others",
  ];

  const handleTypeChange = (type) => {
    setItemType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, this would send data to an API
    console.log("Form submitted with data:", {
      itemType,
      ...formData,
    });

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        title: "",
        category: "",
        location: "",
        date: "",
        description: "",
        image: null,
        securityQuestion: "",
        securityAnswer: "",
      });
      setPreviewImage(null);
    }, 3000);
  };

  return (
    <div className="add-item-container">
      <h2>Report {itemType === "lost" ? "Lost" : "Found"} Item</h2>

      <div className="item-type-selector">
        <button
          className={itemType === "lost" ? "active" : ""}
          onClick={() => handleTypeChange("lost")}
        >
          I Lost Something
        </button>
        <button
          className={itemType === "found" ? "active" : ""}
          onClick={() => handleTypeChange("found")}
        >
          I Found Something
        </button>
      </div>

      {isSubmitted ? (
        <div className="submission-success">
          <h3>Thank you!</h3>
          <p>Your {itemType} item has been reported successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="item-form">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder={`Enter a title for your ${itemType} item`}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder={`Where was the item ${
                itemType === "lost" ? "lost" : "found"
              }?`}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder={`Provide details about the ${itemType} item`}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            {previewImage && (
              <div className="image-preview">
                <img src={previewImage} alt="Item preview" />
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="securityQuestion">Security Question *</label>
            <input
              type="text"
              id="securityQuestion"
              name="securityQuestion"
              value={formData.securityQuestion}
              onChange={handleInputChange}
              placeholder="Enter a question only the real owner would know the answer to"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="securityAnswer">Security Answer *</label>
            <input
              type="text"
              id="securityAnswer"
              name="securityAnswer"
              value={formData.securityAnswer}
              onChange={handleInputChange}
              placeholder="Enter the answer to your security question"
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Submit {itemType === "lost" ? "Lost" : "Found"} Item
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddItem;
