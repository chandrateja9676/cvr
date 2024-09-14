// src/About.js
import React from 'react';
import './About.css';
import { WavyLink, WavyContainer } from 'react-wavy-transitions';

const About = () => {
    return (
        <div className="about-container">
            <WavyContainer />
            <header className="about-header">
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
            <main className="about-main">
                <section className="about-intro">
                    <h1>About Us</h1>
                    <p>CVR Tech Solutions is a leading IT solutions provider with a strong focus on empowering businesses through innovative technology solutions. We bring years of industry expertise and a commitment to excellence.</p>
                    <p>Our team specializes in everything from software development and cloud solutions to digital transformation, ensuring businesses have the tools they need to thrive in a digital-first world.</p>
                </section>

                <section className="about-mission">
                    <h2>Our Mission</h2>
                    <p>Our mission is to help organizations succeed in a rapidly changing technological landscape by delivering custom IT solutions that foster growth, innovation, and efficiency.</p>
                    <p>We aim to bridge the gap between technology and business strategy, offering tailored services that meet the unique needs of each client.</p>
                </section>

                <section className="about-history">
                    <h2>Our History</h2>
                    <p>Founded in 2022, CVR Tech Solutions started with a passion for technology and a vision to change how businesses approach IT. From our humble beginnings, we have expanded into a global firm, helping organizations of all sizes unlock their potential with our expert solutions.</p>
                    <p>Over the years, we have become known for our innovative approach, deep technical expertise, and unwavering commitment to customer satisfaction.</p>
                </section>

                <section className="about-values">
                    <h2>Core Values</h2>
                    <ul>
                        <li><strong>Innovation:</strong> Constantly pushing boundaries and embracing new technologies to stay at the forefront of the industry.</li>
                        <li><strong>Integrity:</strong> Conducting business with honesty and transparency to build lasting relationships based on trust.</li>
                        <li><strong>Customer Focus:</strong> Always putting the needs of our clients first, ensuring tailored solutions that deliver measurable results.</li>
                        <li><strong>Excellence:</strong> Striving for the highest standards in every project we undertake, ensuring quality in every aspect of our work.</li>
                        <li><strong>Collaboration:</strong> Working as a team, both internally and with our clients, to achieve the best outcomes together.</li>
                    </ul>
                </section>

                <section className="about-team">
                    <h2>Meet the Team</h2>
                    <p>Our team is made up of skilled professionals who are passionate about technology and dedicated to helping businesses grow. With diverse backgrounds in development, management, and strategy, we bring a wealth of experience to every project.</p>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="/team1.jpg" alt="John Doe" className="team-photo" />
                            <h3>CT</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-member">
                            <img src="/team2.jpg" alt="Jane Smith" className="team-photo" />
                            <h3>-</h3>
                            <p>Chief Technology Officer</p>
                        </div>
                        <div className="team-member">
                            <img src="/team3.jpg" alt="Michael Brown" className="team-photo" />
                            <h3>-</h3>
                            <p>Lead Consultant</p>
                        </div>
                        <div className="team-member">
                            <img src="/team4.jpg" alt="Emily Davis" className="team-photo" />
                            <h3>-</h3>
                            <p>Head of Marketing</p>
                        </div>
                    </div>
                </section>

                <section className="about-achievements">
                    <h2>Our Achievements</h2>
                    <p>We pride ourselves on the success stories we’ve been part of. From launching groundbreaking software to transforming businesses through cloud migration, we’ve been at the forefront of many transformative projects.</p>
                    <ul>
                        <li><strong>Over 200 successful projects completed</strong> across various industries, including healthcare, finance, and retail.</li>
                        <li><strong>Award-winning IT consultancy services</strong>, recognized for excellence in customer satisfaction and technical innovation.</li>
                        <li><strong>Global client base</strong> spanning more than 15 countries, helping businesses thrive in diverse markets.</li>
                    </ul>
                </section>

                <section className="about-testimonials">
                    <h2>Client Testimonials</h2>
                    <div className="testimonial">
                        <p>"CVR Tech Solutions provided exceptional service and helped us achieve our goals efficiently. Highly recommended!"</p>
                        <h4>- Sarah Johnson, CEO of XYZ Corp</h4>
                    </div>
                    <div className="testimonial">
                        <p>"Their team is knowledgeable and responsive. We couldn't have asked for a better partner for our digital transformation."</p>
                        <h4>- David Lee, CTO of ABC Inc</h4>
                    </div>
                    <div className="testimonial">
                        <p>"CVR Tech Solutions transformed our business operations with their innovative approach and deep technical expertise. They have been an invaluable partner to us."</p>
                        <h4>- Amanda White, COO of Global Retail</h4>
                    </div>
                </section>
            </main>
            <footer className="about-footer">
                <p>&copy; 2024 CVR Tech Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
