// src/LearnMore.js
import React from 'react';
import './Learnmore.css'; // Import the CSS file for styling

const Learnmore = () => {
    return (
        <div className="learn-more-container">
            <header className="learn-more-header">
                <img src="/logo.jpg" alt="Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li><a href="/services">Services</a></li>
                        <li><a href="/solutions">Solutions</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/career">Careers</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="learn-more-main">
                <h1>Learn More About Us</h1>
                <section className="learn-more-content">
                    <h2>Our Mission</h2>
                    <p>At CVR Tech Solutions, our mission is to provide innovative technology solutions that empower businesses to succeed in the digital era. We focus on delivering exceptional value through our services and partnerships.</p>
                    
                    <h2>Our Approach</h2>
                    <p>We adopt a client-centric approach, tailoring our solutions to meet the unique needs of each business. Our team of experts works closely with clients to understand their challenges and goals, ensuring we deliver impactful and sustainable results.</p>

                    <h2>Our Services</h2>
                    <p>From IT consulting to digital transformation, our comprehensive suite of services is designed to support your business at every stage of its growth. Explore our offerings to find out how we can help you achieve your objectives.</p>
                    
                    <h2>Client Testimonials</h2>
                    <div className="testimonials">
                        <div className="testimonial">
                            <p>"CVR Tech Solutions transformed our IT infrastructure and significantly improved our operational efficiency. Their expertise and dedication are unmatched!"</p>
                            <cite>- Jane Doe, CEO of ExampleCorp</cite>
                        </div>
                        <div className="testimonial">
                            <p>"The digital transformation services provided by CVR Tech Solutions were instrumental in modernizing our business processes. Highly recommended!"</p>
                            <cite>- John Smith, CTO of TechInnovate</cite>
                        </div>
                    </div>
                    
                    <h2>Case Studies</h2>
                    <div className="case-studies">
                        <div className="case-study">
                            <h3>Case Study 1: IT Infrastructure Overhaul</h3>
                            <p>We helped a large enterprise revamp their outdated IT systems, resulting in a 40% increase in productivity and significant cost savings.</p>
                        </div>
                        <div className="case-study">
                            <h3>Case Study 2: Successful Digital Transformation</h3>
                            <p>Our digital transformation strategies enabled a mid-sized company to enhance their online presence and streamline their operations, leading to a 50% growth in customer engagement.</p>
                        </div>
                    </div>
                    
                    <h2>Contact Us</h2>
                    <p>If you have any questions or would like to discuss how we can assist your business, please don't hesitate to reach out to us.</p>
                    <p>Email: contact@cvrtechsolutions.com</p>
                    <p>Phone: (123) 456-7890</p>
                </section>
            </main>
            <footer className="learn-more-footer">
                <p>&copy; 2024 CVR Tech Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Learnmore;
