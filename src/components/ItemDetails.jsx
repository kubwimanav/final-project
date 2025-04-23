// ItemDetails.js
import React, { useState, useEffect } from "react";
import "../Styles/ItemDetails.css";

const ItemDetails = ({ itemId, itemType }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [securityStatus, setSecurityStatus] = useState(null); // null, 'success', 'error'
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch item details
    const fetchItemDetails = async () => {
      try {
        setLoading(true);

        // In a real application, this would be an API call with the itemId
        // Mock data for demonstration
        let mockItem;

        if (itemType === "lost") {
          mockItem = {
            id: itemId,
            title: "Lost Student ID Card",
            category: "ID/Cards",
            location: "Faculty of Information Science and Technology",
            date: "2023-04-10",
            description:
              "Lost my student ID card near the faculty building. It has my name, photo, and student ID number on it. I need it urgently for accessing the library and other campus facilities.",
            imageUrl: "/placeholder-image.jpg",
            contactEmail: "student@ukm.edu.my",
            matricNumber: "A165563",
            status: "active",
            reportedBy: "Ahmed bin Ismail",
            dateReported: "2023-04-10",
            securityQuestion:
              "What is your full name as printed on the ID card?",
          };
        } else {
          mockItem = {
            id: itemId,
            title: "Found Student ID Card",
            category: "ID/Cards",
            location: "Faculty of Science",
            date: "2023-04-11",
            description:
              "Found a student ID card near the faculty building entrance. The card appears to belong to a student from the Faculty of Information Science and Technology.",
            imageUrl: "/placeholder-image.jpg",
            contactEmail: "finder@ukm.edu.my",
            matricNumber: "A165570",
            status: "active",
            reportedBy: "Nur Amirah binti Abdullah",
            dateReported: "2023-04-11",
            securityQuestion:
              "What is your full name as printed on the ID card?",
          };
        }

        setItem(mockItem);
      } catch (error) {
        console.error("Error fetching item details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (itemId) {
      fetchItemDetails();
    }
  }, [itemId, itemType]);

  const handleSecurityAnswerChange = (e) => {
    setSecurityAnswer(e.target.value);
  };

  const handleSecuritySubmit = (e) => {
    e.preventDefault();

    // In a real application, this would verify the security answer with the backend
    // For demo purposes, any non-empty answer is considered "correct"
    if (securityAnswer.trim() !== "") {
      setSecurityStatus("success");

      // Mock contact information that would come from backend after successful verification
      setContactInfo({
        name:
          itemType === "lost"
            ? "Ahmed bin Ismail"
            : "Nur Amirah binti Abdullah",
        email: itemType === "lost" ? "student@ukm.edu.my" : "finder@ukm.edu.my",
        phone: itemType === "lost" ? "012-345-6789" : "019-876-5432",
        matricNumber: itemType === "lost" ? "A165563" : "A165570",
      });
    } else {
      setSecurityStatus("error");
    }
  };

  if (loading) {
    return (
      <div className="item-details-loading">
        <p>Loading item details...</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="item-details-not-found">
        <p>Item not found or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="item-details-container">
      <div className="item-details-header">
        <h2>{item.title}</h2>
        <span className={`item-status ${item.status}`}>{item.status}</span>
      </div>

      <div className="item-details-content">
        <div className="item-image-container">
          <img src={item.imageUrl} alt={item.title} />
        </div>

        <div className="item-info">
          <div className="info-group">
            <label>Category:</label>
            <span>{item.category}</span>
          </div>

          <div className="info-group">
            <label>Location:</label>
            <span>{item.location}</span>
          </div>

          <div className="info-group">
            <label>Date {itemType === "lost" ? "Lost" : "Found"}:</label>
            <span>{item.date}</span>
          </div>

          <div className="info-group">
            <label>Reported By:</label>
            <span>{item.reportedBy}</span>
          </div>

          <div className="info-group">
            <label>Date Reported:</label>
            <span>{item.dateReported}</span>
          </div>

          <div className="info-group full-width">
            <label>Description:</label>
            <p>{item.description}</p>
          </div>
        </div>
      </div>

      {securityStatus !== "success" && (
        <div className="security-verification">
          <h3>Claim this {itemType === "lost" ? "Found" : "Lost"} Item</h3>
          <p>
            To contact the person who {itemType === "lost" ? "found" : "lost"}{" "}
            this item, please answer the security question correctly:
          </p>

          <form onSubmit={handleSecuritySubmit} className="security-form">
            <div className="security-question">
              <label>Security Question:</label>
              <p>{item.securityQuestion}</p>
            </div>

            <div className="form-group">
              <label htmlFor="securityAnswer">Your Answer:</label>
              <input
                type="text"
                id="securityAnswer"
                value={securityAnswer}
                onChange={handleSecurityAnswerChange}
                placeholder="Enter your answer"
                required
              />
            </div>

            {securityStatus === "error" && (
              <div className="security-error">
                <p>Incorrect answer. Please try again.</p>
              </div>
            )}

            <button type="submit" className="verify-btn">
              Verify
            </button>
          </form>
        </div>
      )}

      {securityStatus === "success" && contactInfo && (
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p className="success-message">
            Security verification successful! You can now contact the{" "}
            {itemType === "lost" ? "finder" : "owner"}.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <label>Name:</label>
              <span>{contactInfo.name}</span>
            </div>

            <div className="contact-item">
              <label>Email:</label>
              <span>{contactInfo.email}</span>
            </div>

            <div className="contact-item">
              <label>Phone:</label>
              <span>{contactInfo.phone}</span>
            </div>

            <div className="contact-item">
              <label>Matric Number:</label>
              <span>{contactInfo.matricNumber}</span>
            </div>
          </div>

          <div className="contact-instructions">
            <p>
              Please contact the {itemType === "lost" ? "finder" : "owner"} as
              soon as possible to arrange for the return of the item. Be
              prepared to provide additional proof of ownership if requested.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
