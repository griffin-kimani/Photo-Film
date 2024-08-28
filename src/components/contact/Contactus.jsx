import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './contactus.css';
import backgroundImage from '../../assets/Couples/Image-44.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    event: '',
    date: '',
    budget: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Booking request sent successfully.');
      } else {
        alert('Failed to send booking request.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send booking request.');
    }
  };

  return (
    <div
      className="contact-us-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backgroundBlendMode: 'overlay',
        padding: '40px',
        margin: '100px auto',
        maxWidth: '800px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        position: 'relative'  
      }}
    >
      <p>
        Ready to start planning your wedding photography and film? Contact us today to schedule a consultation and learn more about our services. We look forward to being a part of your special day!
      </p>
      <h2>Reach Out</h2>
      <div className="contact-options">
        <a href="tel:0701728828" className="contact-option">
          <FaPhone /> Call Us
        </a>
        <a href="https://wa.me/0701728828" className="contact-option">
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="https://www.instagram.com/top_bride_weddings/#" className="contact-option">
          <FaInstagram /> Instagram
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label>{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}:</label>
            {key !== 'details' ? (
              <input
                type={key === 'date' ? 'date' : key === 'email' ? 'email' : key === 'phone' ? 'tel' : key === 'budget' ? 'number' : 'text'}
                name={key}
                value={value}
                onChange={handleChange}
                required
              />
            ) : (
              <textarea
                name={key}
                value={value}
                onChange={handleChange}
                required
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
