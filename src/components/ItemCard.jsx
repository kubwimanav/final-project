import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/helpers";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const { id, title, type, status, location, date, image, category } = item;

  const statusClass = status === "lost" ? "status-lost" : "status-found";
  const statusText = status === "lost" ? "Lost" : "Found";

  return (
    <div className="item-card">
      <div className={`item-status ${statusClass}`}>{statusText}</div>

      <div className="item-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="item-no-image">No Image</div>
        )}
      </div>

      <div className="item-info">
        <h3 className="item-title">{title}</h3>

        <div className="item-details">
          <p>
            <span className="item-label">Category:</span> {category}
          </p>
          <p>
            <span className="item-label">Location:</span> {location}
          </p>
          <p>
            <span className="item-label">Date:</span> {formatDate(date)}
          </p>
        </div>

        <Link to={`/items/${id}`} className="item-view-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
