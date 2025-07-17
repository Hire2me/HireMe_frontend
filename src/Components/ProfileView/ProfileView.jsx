import React from "react";
import "./ProfileView.css";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import { trustedArtisans, workGalleryImages } from "../data";
import Header from "../Header/Header";
import banner from "../../assets/banner.png";
import Engineer from "../../assets/engineer.png";
import calendar from "../../assets/calendar.png";
import Feedback from "../../assets/feedback.png";
import badge from "../../assets/badge.png";
import { Link } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from "react-icons/fa";

const ProfileView = () => (
  <div>
    <Header />
    {/* Top image and avatar */}
    <div className="profileview-banner">
      <img className="banner-img" src={banner} alt="banner" />
      <img className="profile-avatar" src={Engineer} alt="avatar" />
    </div>
    <div className="profileview-container">
      <div className="profileview-main">
        {/* Left Profile Card */}
        <aside className="profile-card">
          <h2>Mr Olamide Olamide</h2>
          <div className="aside-elect">
            <div>
              <p>Electrician</p>
            </div>
            <div className="start-rate">
              <span className="star"> &#9733;</span>
              <p>4.9</p>
            </div>
          </div>
          <div className="profile-status">
            <div className="info-item">
              <img src={calendar} alt="" />
              <span className="user-available">Available Today</span>
            </div>
            <div className="">
              <span className="">reviews</span>
            </div>
          </div>
          <div className="profile-actions">
            <p className="action-details">Residential Electrician</p>
            <p className="action-details">Commercial Electrician</p>
          </div>
          <div className="profile-actions">
            <p className="action-details">Maintenance Electrician</p>
            <p className="action-details">Automotive Electrician</p>
          </div>
          <p className="profile-desc">
            I am a certified and experienced electrician specializing in
            residential, commercial, maintenance and automotive electrical
            systems. With over 7 years of hands-on experience, I provide safe,
            reliable, and code-compliant solutions for wiring, lighting,
            installations, and electrical maintenance. My commitment is to
            deliver quality workmanship, timely service, and lasting results to
            every client I serve.
          </p>
          <div className="profile-availability">
            <h4>Availability</h4>
            <div className="availability-row">
              <span>Monday-Friday</span>
              <span>8:00am - 7:00pm</span>
            </div>
            <div className="availability-row">
              <span>Saturday</span>
              <span>8:00am - 7:00pm</span>
            </div>
            <div className="availability-row">
              <span>Sunday</span>
              <span>Not available</span>
            </div>
          </div>
          <div className="profile-buttons">
            <button className="call-btn">Call Artisan</button>
            <button className="message-btn">Message</button>
          </div>
          <button className="report-btn">Report Artisan</button>
        </aside>
        {/* Right Info Section */}
        <section className="profile-details">
          {/* Work Gallery */}
          <div className="card gallery-card">
            <h3>Work Gallery</h3>
            <div className="gallery-grid">
              {workGalleryImages.map((src, i) => (
                <img key={i} src={src} alt={`work-${i + 1}`} />
              ))}
            </div>
          </div>
          {/* Feedbacks */}
          <div className="card feedback-card">
            <div className="feedback-header">
              <h3>Feedback(5)</h3>
              <a href="#">Write a feedback</a>
            </div>
            <div className="feedback-rating-row">
              <span className="main-rating">4.9</span>
              <div className="rating-bars">
                <div className="rating-bar">
                  <span>5</span>
                  <div className="bar" style={{ width: "80%" }}></div>
                  <span>24</span>
                </div>
                <div className="rating-bar">
                  <span>4</span>
                  <div className="bar" style={{ width: "15%" }}></div>
                  <span>3</span>
                </div>
                <div className="rating-bar">
                  <span>3</span>
                  <div className="bar" style={{ width: "5%" }}></div>
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="feedback-list">
              <div className="feedback-item">
                <div className="feedback-header">
                  <div className="feedback-user">
                    <img src={Feedback} alt="user" />
                    <div className="feedback-user-details">
                      <p className="name-A">Chayenet Happiness</p>
                      <p className="name-B">Vetinary Doctor</p>
                    </div>
                  </div>
                  <div className="feedback11">
                    <span className="stars">★★★★★</span>
                    <span className="feedback-date"> 8:10PM | 23 Mar 2025</span>
                  </div>
                </div>
                <p>
                  "Professional and punctual, exceeded expectations! Quick
                  turnaround and strong attention to safety".
                </p>
              </div>
              <a className="read-feedback" href="#">
                Read all Feedback
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* Trusted Artisans */}
      <section className="trusted-artisans">
        <h3>Trusted Artisans</h3>
        <p>Our artisans are diligent and trusted with their craftsmanship</p>

        <div className="card-grid">
          {trustedArtisans.map((artisan, index) => (
            <Link to="/profile-view">
              <div className="card" key={index}>
                <img
                  src={artisan.img}
                  alt={artisan.name}
                  className="card-image"
                />
                <div className="card-body">
                  <div className="card-name-1">
                    <div className="card-name">
                      <span>{artisan.name}</span>
                      <img src={badge} alt="" />
                    </div>
                    <div className="card-info">
                      <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <span className="user-location">
                          {artisan.location}
                        </span>
                      </div>
                      <div className="info-item">
                        {/* <FaCalendarAlt className="info-icon" /> */}
                        <img src={calendar} alt="" />
                        <span className="user-available">
                          {artisan.available}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-profession">
                    <div className="occupation">{artisan.profession}</div>
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
        {/* <div className="artisan-cards">
          {trustedArtisans.map((artisan, i) => (
            <div className="artisan-card" key={i}>
              <img src={artisan.img} alt={artisan.name} />
              <h4>{artisan.name}</h4>
              <span className="artisan-category">{artisan.category}</span>
              <div className="artisan-rating">
                <span className="stars">
                  {"★".repeat(Math.floor(artisan.rating))}
                  {artisan.rating % 1 >= 0.5 ? "½" : ""}
                </span>
                <span>
                  {artisan.rating} ({artisan.reviews} reviews)
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
    <Hero />
    <Footer />
  </div>
);

export default ProfileView;
