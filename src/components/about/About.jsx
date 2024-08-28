import React from 'react';
import './about.css';
import './section.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="section about-us">
      <div className="intro">
        <h2>About Us</h2>
        <h3>Top Bride Photographies and Videographies</h3>
        <p>Discover a creative Wedding Photography and Videography hub nestled in Nairobi, Kenya. We are dedicated to crafting timeless wedding memories.</p>
        <Link to="/about" className="learn-more-button">Learn More &rarr;</Link>
      </div>
      <div className="how-we-work">
        <h3>How We Work</h3>
        <p>Top Bride Photography and filming works in a logical and experienced approach by securing contracts through client inquiries or outreach from most social media platforms or phone calls.</p>
        <p>Upon agreement, we schedule sessions, provide equipment, and offer creative direction.</p>
        <p>After the shoot, we edit and deliver final content, ensuring client satisfaction and maintaining professional standards.</p>
      </div>
    </div>
  );
};

export default About;

