import React from 'react';
import { Link } from 'react-router-dom';
import './aboutUs.css';
import image1 from '../../assets/Reception/DSC00953.jpg';
import serviceImage from '../../assets/Couples/DSC02875.jpg'; 
import image3 from '../../assets/Couples/G&C-81.jpg';
import Review from '../review/Review';
import FAQ from '../faq/Faq';
import Contactus from '../contact/Contactus';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="hero">
        <h1>Top Bride Photography & Videography</h1>
        <p>Crafting timeless wedding memories in Nairobi, Kenya</p>
      </header>

      <div className="intro">
        <h2>Welcome</h2>
        <p>Discover a creative Wedding Photography and Videography hub nestled in Nairobi, Kenya.</p>
        <p>We are dedicated to crafting timeless wedding memories.</p>
        <p>Through the lens of documentary photography and film, we encapsulate the essence of your special day, narrating its narrative with emotive imagery and captivating storytelling.</p>
        <p>Welcome to an experience where every frame resonates with authenticity and artistry.</p>
      </div>

      <div className="section">
        <div className="philosophy">
          <div className="philosophy-text">
            <h3>Our Philosophy</h3>
            <p>At Top Bride Photography and Videography, we believe in creating authentic and unforgettable memories that showcase your love story in a beautiful, documentary or film format.</p>
            <p>We strive to provide exceptional service, unwavering dedication, and a commitment to our clients' happiness.</p>
            <p>Our mission is to help you capture the essence of your special day while ensuring that your memories are both beautiful and meaningful.</p>
          </div>

          <div className="philosophy-image">
            <img src={image1} alt="Philosophy" />
          </div>
        </div>

        <div className="services">
          <div className="service-image">
            <img src={serviceImage} alt="Services" />
          </div>
          <div className="service-text">
            <h3>Our Services</h3>
            <ul>
              <li>Engagement Sessions: Capture the excitement and anticipation of your journey to the altar with a personalized engagement session.</li>
              <li>Wedding Photography: From the first look to the last dance, we document every detail and moment of your wedding day.</li>
              <li>Wedding Videography: Our cinematic wedding films bring your love story to life, capturing the laughter, tears, and joy of your celebration.</li>
            </ul>
          </div>
        </div>

        <div className="chooseus">
          <div className="chooseus-text">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Personalized Approach: We take the time to get to know you as a couple, ensuring that our work reflects your personalities and love story.</li>
              <li>Attention to Detail: We focus on the little details that make your wedding day unique, from the decor to the emotional moments.</li>
              <li>High-Quality Products: We use state-of-the-art equipment and editing techniques to deliver stunning photos and films that stand the test of time.</li>
              <li>Customer Satisfaction: Your happiness is our top priority. We're committed to providing you with exceptional service and beautiful memories.</li>
            </ul>
          </div>
          <div className="chooseus-image">
            <img src={image3} alt="Choose Us" />
          </div>
        </div>
      </div>

      <div className="how-we-work">
        <h3>How We Work</h3>
        <p>Top Bride Photography and filming works in a logical and experienced approach by securing contracts through client inquiries or outreach from most social media platforms or phone calls.</p>
        <p>Upon agreement, we schedule sessions, provide equipment, and offer creative direction.</p>
        <p>After the shoot, we edit and deliver final content, ensuring client satisfaction and maintaining professional standards.</p>
      </div>

      <div className="button-container">
        <Link to="/portfolio" className="button">View Photographs</Link>
        <a href="/prtfolio" className="button">View Films</a>
      </div>

      <div className="additional-sections">
        <Contactus />
        <Review />
        <FAQ /> 
      </div>
    </div>
  );
};

export default AboutUs;
