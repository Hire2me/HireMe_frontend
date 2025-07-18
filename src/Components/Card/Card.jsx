import React from "react";
import "./Card.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from "react-icons/fa";
import { users } from "../data";
import badge from "../../assets/badge.png";
import calendar from "../../assets/calendar.png";
import { Link } from "react-router";

const Card = () => {
  return (
    <div className="card-grid">
      {users.map((user, index) => (
        <Link to="/view-page">
          <div className="card" key={index}>
            <img src={user.image} alt={user.name} className="card-image" />
            <div className="card-body">
              <div className="card-name-1">
                <div className="card-name">
                  <span>{user.name}</span>
                  <img src={badge} alt="" />
                </div>
                <div className="card-info">
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <span className="user-location">{user.location}</span>
                  </div>
                  <div className="info-item">
                    {/* <FaCalendarAlt className="info-icon" /> */}
                    <img src={calendar} alt="" />
                    <span className="user-available">{user.available}</span>
                  </div>
                </div>
              </div>
              <div className="card-profession">
                <div className="occupation">{user.profession}</div>
                <div className="rating">
                  <span className="rating-value">4.9</span>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
