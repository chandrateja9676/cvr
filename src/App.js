import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WavyContainer, WavyLink } from 'react-wavy-transitions';
import Welcome from './pages/Welcome';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About'
import Solutions from './pages/Solutions'
import Career from './pages/Career'
import Learnmore from './pages/Learnmore'


// const Solutions = () => <div>Solutions Page</div>;
// const About = () => <div>About Page</div>;
// const Careers = () => <div>Careers Page</div>;
// const Contact = () => <div>Contact Page</div>;
const NoMatch = () => <div>No Match</div>;

function App() {
    return (
        <Router>
           <WavyContainer />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Solutions" element={<Solutions />} />
                <Route path="/About" element={<About />} />
                <Route path="/Career" element={<Career />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Learnmore" element={<Learnmore />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    );
}

export default App;
