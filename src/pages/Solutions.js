import React from 'react';
import './Solutions.css';
import { WavyLink, WavyContainer } from 'react-wavy-transitions';

const Solutions = () => {
    return (
        <div className="solutions-container">
            <WavyContainer />
            <header className="solutions-header">
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
            <main className="solutions-main">
                <section className="solutions-intro">
                    <h1>Our Solutions</h1>
                    <p>Explore the comprehensive solutions we offer to drive innovation and success for your business. Our tailored solutions are designed to meet your specific needs and challenges.</p>
                </section>
                
                <section className="solutions-grid">
                    <div className="solution-box">
                        <i className="icon-cloud"></i>
                        <h3>Cloud Solutions</h3>
                        <p>Scalable and secure cloud solutions tailored to your business needs. Our cloud services include migration, management, and optimization to ensure your operations are efficient and cost-effective.</p>
                    </div>
                    <div className="solution-box">
                        <i className="icon-cybersecurity"></i>
                        <h3>Cybersecurity</h3>
                        <p>Advanced security measures to protect your digital assets. Our cybersecurity solutions include threat detection, incident response, and vulnerability assessments to safeguard your business from cyber threats.</p>
                    </div>
                    <div className="solution-box">
                        <i className="icon-ai"></i>
                        <h3>Artificial Intelligence</h3>
                        <p>Harness the power of AI to optimize operations and drive innovation. We offer AI solutions for data analysis, machine learning, and automation to enhance your business capabilities.</p>
                    </div>
                    <div className="solution-box">
                        <i className="icon-automation"></i>
                        <h3>Process Automation</h3>
                        <p>Streamline and automate your business processes for greater efficiency. Our process automation services help reduce manual work, improve accuracy, and increase productivity.</p>
                    </div>
                    <div className="solution-box">
                        <i className="icon-data-analytics"></i>
                        <h3>Data Analytics</h3>
                        <p>Transform data into actionable insights with our data analytics solutions. We provide tools and expertise to help you make data-driven decisions and gain a competitive edge.</p>
                    </div>
                    <div className="solution-box">
                        <i className="icon-consulting"></i>
                        <h3>IT Consulting</h3>
                        <p>Expert guidance to align technology with your business goals. Our IT consulting services include strategic planning, technology assessment, and implementation support.</p>
                    </div>
                </section>

                <section className="case-studies">
                    <h2>Case Studies</h2>
                    <div className="case-study">
                        <h3>Case Study 1: Enhancing Cloud Efficiency</h3>
                        <p>Learn how we helped Company XYZ improve their cloud efficiency, resulting in a 40% reduction in operational costs.</p>
                    </div>
                    <div className="case-study">
                        <h3>Case Study 2: Cybersecurity Transformation</h3>
                        <p>Discover how our cybersecurity solutions protected Company ABC from a major cyber attack and strengthened their security posture.</p>
                    </div>
                </section>

                <section className="client-testimonials">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonial">
                        <blockquote>"The cloud solutions provided by this company have transformed our operations. Highly recommend!"</blockquote>
                        <p>- Jane Doe, CTO of Company XYZ</p>
                    </div>
                    <div className="testimonial">
                        <blockquote>"Their cybersecurity expertise was instrumental in safeguarding our digital assets. A trustworthy partner!"</blockquote>
                        <p>- John Smith, IT Director of Company ABC</p>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Solutions;
