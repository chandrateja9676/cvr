// src/Career.js
import React from 'react';
import './Career.css';
import { WavyLink, WavyContainer } from 'react-wavy-transitions';

const Career = () => {
    return (
        <div className="careers-container">
            <WavyContainer />
            <header className="careers-header">
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
            <main className="careers-main">
                <section className="careers-intro">
                    <h1>Join Our Team</h1>
                    <p>We are looking for passionate individuals to join our growing team. Explore our open positions and become part of our dynamic company.</p>
                    <p>At CVR Tech Solutions, we provide opportunities for personal and professional growth in a fast-paced, innovative environment. Our team values collaboration, creativity, and commitment to excellence.</p>
                    <p>Whether you're an experienced professional or just starting your career, we have a place for you. Check out our available positions below.</p>
                </section>

                <section className="careers-values">
                    <h2>Why Work with Us?</h2>
                    <ul>
                        <li>🌟 Innovative Projects: Work on exciting and cutting-edge technologies.</li>
                        <li>💼 Professional Growth: Access ongoing training and career development.</li>
                        <li>🧑‍🤝‍🧑 Inclusive Culture: We value diversity and foster an inclusive environment.</li>
                        <li>🏆 Recognition & Rewards: Your contributions are recognized and rewarded.</li>
                        <li>🌍 Flexible Work: Options for remote and hybrid working models.</li>
                    </ul>
                </section>

                <section className="careers-list">
                    <div className="job-listing">
                        <h2>Software Engineer</h2>
                        <p><strong>Location:</strong> New York, NY</p>
                        <p><strong>Type:</strong> Full-time</p>
                        <p><strong>Salary:</strong> $90,000 - $120,000 per year</p>
                        <p>Join our software development team to build innovative applications and solve complex problems. Ideal candidates will have experience with JavaScript, React, Node.js, and cloud-based platforms.</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    <div className="job-listing">
                        <h2>Project Manager</h2>
                        <p><strong>Location:</strong> San Francisco, CA</p>
                        <p><strong>Type:</strong> Full-time</p>
                        <p><strong>Salary:</strong> $100,000 - $130,000 per year</p>
                        <p>Lead our project teams and manage timelines, resources, and client relationships. You’ll ensure smooth project delivery and successful outcomes. PMP certification is a plus.</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    <div className="job-listing">
                        <h2>UX Designer</h2>
                        <p><strong>Location:</strong> Remote</p>
                        <p><strong>Type:</strong> Contract</p>
                        <p><strong>Salary:</strong> $50 - $70 per hour</p>
                        <p>Create intuitive and delightful user experiences. This role involves wireframing, prototyping, and conducting user research. Experience with Figma and Adobe XD is required.</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    <div className="job-listing">
                        <h2>Marketing Specialist</h2>
                        <p><strong>Location:</strong> Chicago, IL</p>
                        <p><strong>Type:</strong> Full-time</p>
                        <p><strong>Salary:</strong> $65,000 - $85,000 per year</p>
                        <p>Help us grow our brand by developing and executing marketing campaigns. You’ll work on both digital and traditional marketing channels, focusing on engagement and lead generation.</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    <div className="job-listing">
                        <h2>Data Analyst</h2>
                        <p><strong>Location:</strong> Boston, MA</p>
                        <p><strong>Type:</strong> Full-time</p>
                        <p><strong>Salary:</strong> $75,000 - $100,000 per year</p>
                        <p>Analyze complex data sets to provide actionable insights. Proficiency in Python, SQL, and visualization tools (e.g., Tableau, Power BI) is preferred.</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    <div className="job-listing">
                        <h2>Customer Support Representative</h2>
                        <p><strong>Location:</strong> Austin, TX</p>
                        <p><strong>Type:</strong> Part-time</p>
                        <p><strong>Salary:</strong> $20 - $25 per hour</p>
                        <p>Provide exceptional customer service by answering inquiries, troubleshooting issues, and ensuring client satisfaction across multiple channels (phone, email, chat).</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    <div className="job-listing">
                        <h2>Sales Executive</h2>
                        <p><strong>Location:</strong> Los Angeles, CA</p>
                        <p><strong>Type:</strong> Full-time</p>
                        <p><strong>Salary:</strong> $80,000 - $120,000 per year + commission</p>
                        <p>Develop and maintain client relationships while driving revenue growth. This role requires excellent communication skills and a proven sales track record.</p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                </section>
            </main>
            <footer className="careers-footer">
                <p>&copy; 2024 CVR Tech Solutions. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Career;
