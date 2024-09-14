import React from 'react';
import './Contact.css';
import { WavyLink, WavyContainer } from 'react-wavy-transitions';

const Contact = () => {
    return (
        <div className="contactus-container">
            <WavyContainer />
            <header className="contactus-header">
                <img src="/logo.jpg" alt="Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li><WavyLink to="/" color="#00793c">Home</WavyLink></li>
                        <li><WavyLink to="/solutions" color="#00793c">Solutions</WavyLink></li>
                        <li><WavyLink to="/about" color="#00793c">About</WavyLink></li>
                        <li><WavyLink to="/career" color="#00793c">Careers</WavyLink></li>
                        <li><WavyLink to="/contact" color="#00793c">Contact</WavyLink></li>
                    </ul>
                </nav>
            </header>
            <main className="contactus-main">
                <h1>Contact Us</h1>
                <section className="contact-details">
                    <div className="contact-box">
                        <i className="icon-address"></i>
                        <h3>Our Address</h3>
                        <p>123 Business St., Suite 100, City, Country</p>
                    </div>
                    <div className="contact-box">
                        <i className="icon-phone"></i>
                        <h3>Phone Number</h3>
                        <p>(+123) 456-7890</p>
                    </div>
                    <div className="contact-box">
                        <i className="icon-email"></i>
                        <h3>Email Address</h3>
                        <p>contact@yourcompany.com</p>
                    </div>
                    <div className="contact-box">
                        <i className="icon-hours"></i>
                        <h3>Business Hours</h3>
                        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                </section>
                
                <section className="contact-form">
                    <h2>Get in Touch</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </section>
                
                {/* <section className="map">
                    <h2>Find Us</h2>
                    <iframe
                        title="Company Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.223634098851!2d-122.0842490846925!3d37.42199977982585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba21e94610ab%3A0xa735f83b5b7f1a1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634134699920!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </section> */}
                
                <section className="social-media">
                    <h2>Connect With Us</h2>
                    <ul>
                        <li><a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </section>
            </main>
            <footer className="contactus-footer">
                <p>&copy; 2024 CVR Tech Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;
