import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Are You a Skilled Professional ?</h1>
        <p>
          Join a growing network of trusted artisans. Discover job
          opportunities, showcase your craft, or hire the right hands for the
          job, all in one place.
        </p>
        <Link to="/signup">
          <button className="hero-buttons">Become an Artisan</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
