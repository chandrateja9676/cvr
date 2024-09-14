// src/Welcome.js
import React, { useState, useEffect } from 'react';
import { Layout, Carousel, Button, Row, Col, Card } from 'antd';
import { SolutionOutlined, CloudOutlined, DatabaseOutlined, CodeOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { WavyLink, WavyContainer } from 'react-wavy-transitions';
import 'antd/dist/reset.css';
import './Welcome.css';

const { Header, Content, Footer } = Layout;

const Welcome = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout className="welcome-container">
            <WavyContainer />
            <Header className={`welcome-header ${isScrolled ? 'scrolled' : ''}`}>
                <img src="/logo.jpg" alt="Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li><WavyLink to="/services" color="#00793c">Services</WavyLink></li>
                        <li><WavyLink to="/solutions" color="#00793c">Solutions</WavyLink></li>
                        <li><WavyLink to="/about" color="#00793c">About</WavyLink></li>
                        <li><WavyLink to="/career" color="#00793c">Careers</WavyLink></li>
                        <li><WavyLink to="/contact" color="#00793c">Contact</WavyLink></li>
                    </ul>
                </nav>
            </Header>
            <Content className="welcome-main">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Welcome to CVR Tech Solutions</h1>
                        <p>Transforming businesses with cutting-edge technology and innovative solutions.</p>
                        <div className="welcome-buttons">
                            <Button type="primary" size="large" className="ant-btn-learnmore" onClick={() => navigate('/learnmore')}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services-provided">
                    <h2>Our Expertise</h2>
                    <Carousel autoplay>
                        <div>
                            <Row gutter={16} justify="center">
                                <Col xs={24} md={12} lg={6}>
                                    <Card
                                        className="service-card"
                                        cover={<SolutionOutlined className="card-icon" />}
                                        title="IT Consulting"
                                        bordered={false}
                                    >
                                        Our IT consulting services help you optimize your technology infrastructure.
                                    </Card>
                                </Col>
                                <Col xs={24} md={12} lg={6}>
                                    <Card
                                        className="service-card"
                                        cover={<CloudOutlined className="card-icon" />}
                                        title="Cloud Solutions"
                                        bordered={false}
                                    >
                                        Secure and scalable cloud services tailored to your business needs.
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row gutter={16} justify="center">
                                <Col xs={24} md={12} lg={6}>
                                    <Card
                                        className="service-card"
                                        cover={<DatabaseOutlined className="card-icon" />}
                                        title="Data & Analytics"
                                        bordered={false}
                                    >
                                        Unlock insights from your data to drive strategic growth.
                                    </Card>
                                </Col>
                                <Col xs={24} md={12} lg={6}>
                                    <Card
                                        className="service-card"
                                        cover={<CodeOutlined className="card-icon" />}
                                        title="Application Development"
                                        bordered={false}
                                    >
                                        Custom applications tailored to enhance your operational capabilities.
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Carousel>
                </section>

                {/* Featured Solutions and Software Services */}
                <section className="featured-solutions">
                    <h2>Featured Solutions and Software Services</h2>
                    <Row gutter={16} justify="center">
                        <Col xs={24} md={12} lg={8}>
                            <Card title="Enterprise Resource Planning (ERP)" bordered={false}>
                                Streamline your business processes with our custom ERP solutions.
                            </Card>
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Card title="Cybersecurity Services" bordered={false}>
                                Protect your digital assets with our comprehensive security solutions.
                            </Card>
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <Card title="AI and Machine Learning" bordered={false}>
                                Enhance decision-making with AI-driven analytics and solutions.
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Expertise We Deliver */}
                <section className="expertise-deliver">
                    <h2>Expertise We Deliver</h2>
                    <Row gutter={16} justify="center">
                        <Col xs={24} md={12} lg={6}>
                            <Card cover={<CheckCircleOutlined className="card-icon" />} title="Project Management" bordered={false}>
                                Efficient and effective project delivery.
                            </Card>
                        </Col>
                        <Col xs={24} md={12} lg={6}>
                            <Card cover={<CheckCircleOutlined className="card-icon" />} title="Business Analysis" bordered={false}>
                                Business insights and analysis to drive your business forward.
                            </Card>
                        </Col>
                        <Col xs={24} md={12} lg={6}>
                            <Card cover={<CheckCircleOutlined className="card-icon" />} title="Cloud Migration" bordered={false}>
                                Seamless and secure migration to the cloud.
                            </Card>
                        </Col>
                        <Col xs={24} md={12} lg={6}>
                            <Card cover={<CheckCircleOutlined className="card-icon" />} title="Software Development" bordered={false}>
                                High-quality software solutions tailored to your needs.
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials">
                    <h2>Testimonials</h2>
                    <Carousel autoplay>
                        <div>
                            <p>"CVR Tech Solutions transformed our business with their expert IT consulting services."</p>
                            <p>- CEO, ABC Corp</p>
                        </div>
                        <div>
                            <p>"Their cloud migration services were seamless and exceeded our expectations."</p>
                            <p>- CTO, XYZ Ltd</p>
                        </div>
                        <div>
                            <p>"We've been able to unlock tremendous value from our data with their analytics solutions."</p>
                            <p>- Data Manager, 123 Inc</p>
                        </div>
                    </Carousel>
                </section>
            </Content>

            {/* Footer Section */}
            <Footer className="footer">
                <p>&copy; 2024 CVR Tech Solutions. All rights reserved.</p>
                <nav>
                    <ul className="footer-links">
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </Footer>
        </Layout>
    );
};

export default Welcome;
