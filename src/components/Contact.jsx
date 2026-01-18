import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import '../styles/Contact.css';

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
                                <p>shhahhraxa110@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <Phone className="info-icon" size={32} />
                            <div>
                                <h3>WhatsApp</h3>
                                <p>+918630628812</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <MapPin className="info-icon" size={32} />
                            <div>
                                <h3>Location</h3>
                                <p>Remote / Worldwide</p>
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
