// src/Services.js
import React from 'react';
import './Services.css';
import { WavyLink, WavyContainer } from 'react-wavy-transitions';

const Services = () => {
    return (
        <div className="services-container">
            <WavyContainer />
            <header className="services-header">
                <img src="/logo.jpg" alt="Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li><WavyLink to="/" color="#00793c">Home</WavyLink></li>
                        <li><WavyLink to="/services" color="#00793c">Services</WavyLink></li>
                        <li><WavyLink to="/solutions" color="#00793c">Solutions</WavyLink></li>
                        <li><WavyLink to="/about" color="#00793c">About</WavyLink></li>
                        <li><WavyLink to="/career" color="#00793c">Careers</WavyLink></li>
                        <li><WavyLink to="/contact" color="#00793c">Contact</WavyLink></li>
                    </ul>
                </nav>
            </header>
            <main className="services-main">
                <h1>Our Services</h1>
                <div className="services-grid">
                    <div className="service-box">
                        <i className="icon-consulting"></i>
                        <h3>IT Consulting</h3>
                        <p>Leverage our expertise to transform your IT infrastructure.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-transformation"></i>
                        <h3>Digital Transformation</h3>
                        <p>Accelerate your digital journey with our innovative solutions.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-development"></i>
                        <h3>Application Development</h3>
                        <p>Build custom applications to meet your unique business needs.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-analytics"></i>
                        <h3>Data & Analytics</h3>
                        <p>Unlock the power of your data to drive informed decisions.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-support"></i>
                        <h3>24/7 Support</h3>
                        <p>Receive round-the-clock support to ensure your systems run smoothly.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-security"></i>
                        <h3>Cybersecurity</h3>
                        <p>Protect your business from digital threats with our comprehensive security solutions.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-cloud"></i>
                        <h3>Cloud Solutions</h3>
                        <p>Optimize your IT infrastructure with our cloud-based solutions.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-automation"></i>
                        <h3>Business Automation</h3>
                        <p>Automate your business processes to increase efficiency and reduce costs.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-training"></i>
                        <h3>Staff Training</h3>
                        <p>Empower your team with the skills they need to leverage technology effectively.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-integration"></i>
                        <h3>System Integration</h3>
                        <p>Seamlessly integrate various systems to improve workflow and productivity.</p>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Services;
