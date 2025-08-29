import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
		<img src="banner.JPG" />
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
			   <li><Link to="/about">About</Link></li>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/contact">Contact</Link></li>
             
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<h2>Welcome to the Student Management System</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
