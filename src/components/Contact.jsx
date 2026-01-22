import React from 'react';  // fix import

import { Mail, MapPin, Phone } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In <span className="highlight">Touch</span></h2>
                <p className="section-subtitle">Have a project in mind? Let's work together.</p>

                <div className="contact-container">
                    <div className="contact-info animate-fade-in">
                        <div className="info-card">
                            <Mail className="info-icon" size={32} />
                            <div>
                                <h3>Email Me</h3>
                                <a href="mailto:shhahhraxa110@gmail.com" className="contact-link">
                                shhahhraxa110@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-card">
                            <Phone className="info-icon" size={32} />
                            <div>
                                <h3>WhatsApp</h3>
                                <a 
                                href="https://api.whatsapp.com/send?phone=918630628812"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                                >
                                +91 8630628812
                                </a>
                            </div>
                            </div>


                        <div className="info-card">
                            <MapPin className="info-icon" size={32} />
                            <div>
                                <h3>Location</h3>
                                 <a 
                            href="https://www.google.com/maps/search/?api=1&query=Remote+Worldwide" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="contact-link">
                            Remote / Worldwide</a>                      
                            </div>
                        </div>
                    </div>

                    <form className="contact-form animate-fade-in delay-200" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
