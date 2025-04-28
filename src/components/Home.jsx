import React, { useState } from "react";
import "../Styles/Home.css";
import keyboard from "../assets/keyboard.jpg"; 
import comput from "../assets/comput.jpg"; 

const Home = () => {
const [searchQuery, setSearchQuery] = useState("");

const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log("Searching for:", searchQuery);
};
  const stats = {
    itemsFound: 532,
    itemsReturned: 489,
    activeUsers: 1250,
    successRate: 92,
  };

  // Mock data for recent items
  const recentItems = [
    {
      id: 1,
      type: "found",
      name: "Student ID Card",
      location: "Library, 2nd Floor",
      date: "2025-04-15",
      image: keyboard,
      category: "identification",
    },
    {
      id: 2,
      type: "lost",
      name: "Blue Water Bottle",
      location: "Faculty of Science Building",
      date: "2025-04-17",
      image: comput,
      category: "personal",
    },
    {
      id: 3,
      type: "found",
      name: "Laptop Charger",
      location: "Cafeteria",
      date: "2025-04-18",
      image: comput,
      category: "electronics",
    },
    {
      id: 4,
      type: "lost",
      name: "Psychology Textbook",
      location: "Faculty of Social Sciences",
      date: "2025-04-16",
      image: comput,
      category: "books",
    },
    {
      id: 5,
      type: "found",
      name: "Student ID Card",
      location: "Library, 2nd Floor",
      date: "2025-04-15",
      image: keyboard,
      category: "identification",
    },
    {
      id: 6,
      type: "lost",
      name: "Blue Water Bottle",
      location: "Faculty of Science Building",
      date: "2025-04-17",
      image: comput,
      category: "personal",
    },
    {
      id: 7,
      type: "found",
      name: "Laptop Charger",
      location: "Cafeteria",
      date: "2025-04-18",
      image: comput,
      category: "electronics",
    },
    {
      id: 8,
      type: "lost",
      name: "Psychology Textbook",
      location: "Faculty of Social Sciences",
      date: "2025-04-16",
      image: comput,
      category: "books",
    },
  ];



  return (
    <div>
      <div className="home-section">
        <div className="hero-section">
          <div className="content-container">
            <h2>Digital Lost and Found System</h2>

            <div className="system-explanation">
              <p>
                Our Lost and Found System provides a centralized platform for UKM students, staff, and visitors to report and search for lost
                items. Simply register with your UKM email, then you can report
                lost items or items you've found on campus. When reporting,
                include detailed descriptions, location information
              </p>
            </div>

            <div className="search-container">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search for lost or found items..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <section className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-icon">1</div>
              <h3>Register</h3>
              <p>Sign up using your UKM email to access all features</p>
            </div>
            <div className="step">
              <div className="step-icon">2</div>
              <h3>Report</h3>
              <p>Submit details about lost or found items with photos</p>
            </div>
            <div className="step">
              <div className="step-icon">3</div>
              <h3>Connect</h3>
              <p>Get notified when a matching item is found or claimed</p>
            </div>
            <div className="step">
              <div className="step-icon">4</div>
              <h3>Retrieve</h3>
              <p>Verify ownership and safely retrieve your belongings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-items">
        <div className="section-recent-items">
          <div className="section-header">
            <h2 className="section-titl">Recent Items</h2>
            <a href="/all-items" className="view-all">
              View All Items
            </a>
          </div>

          <div className="items-container">
            {recentItems.map((item) => (
              <div className="item-card" key={item.id}>
                <div className={`item-badge ${item.type}`}>
                  {item.type === "found" ? "Found" : "Lost"}
                </div>
                <div className="item-image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-location">
                    <i className="icon-location"></i> {item.location}
                  </p>
                  <p className="item-date">
                    <i className="icon-calendar"></i>{" "}
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                  <a href={`/items/${item.id}`} className="item-link">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="testimonials">
        <div className="section-container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-container">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "I lost my student ID card during finals week and was
                  panicking. Someone found it and uploaded it to FoundeLost. I
                  got it back within hours!"
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="/images/student1.jpg"
                  alt="Student"
                  className="author-image"
                />
                <div className="author-info">
                  <h4>Nurul Huda</h4>
                  <p>Computer Science Student</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Found a laptop in the library and wasn't sure what to do.
                  Used this platform to report it and the owner contacted me the
                  same day. So efficient!"
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="/images/student2.jpg"
                  alt="Student"
                  className="author-image"
                />
                <div className="author-info">
                  <h4>Ahmad Faisal</h4>
                  <p>Engineering Faculty</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "As a staff member, I've seen how this system has dramatically
                  improved the return rate of lost items on campus. It's been a
                  fantastic addition to UKM."
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  src="/images/staff.jpg"
                  alt="Staff"
                  className="author-image"
                />
                <div className="author-info">
                  <h4>Dr. Rahmah Aziz</h4>
                  <p>Administrative Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3>How long are items kept before disposal?</h3>
              <p>
                Items are kept for 30 days before they are considered for
                disposal or donation, according to university policy.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I prove an item belongs to me?</h3>
              <p>
                You will need to correctly answer security questions set by the
                finder and may need to provide specific details about the item
                that only the owner would know.
              </p>
            </div>
            <div className="faq-item">
              <h3>Who can use this platform?</h3>
              <p>
                This platform is primarily for UKM students, faculty, and staff.
                Registration requires a valid UKM email address.
              </p>
            </div>
            <div className="faq-item">
              <h3>What information should I include when reporting?</h3>
              <p>
                Include clear photos, detailed description, location where the
                item was lost/found, date and time, and any identifying
                features.
              </p>
            </div>
          </div>
          <div className="faq-more">
            <a href="/faq" className="btn btn-outline">
              View All FAQs
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
