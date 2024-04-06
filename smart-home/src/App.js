import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from './img/Logo.png';
import './App.css';

// Import your page components
import Dashboard from './pages/Dashboard';
import SensorPage from './pages/SensorPage';
import ElectricityUsagePage from './pages/ElectricityUsagePage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import ForgotPage from './pages/Forgot';

const Header = () => {
    // const location = useLocation();
    // const isLoginPage = location.pathname === '/login';

    //uncomment this when it's time to implement the login page properly
    // if (isLoginPage) {
    //     return null;
    // } 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/"><img src={logo} alt="" className='logo-nav' /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link to="/" className="nav-link px-5 nav-elem">Dashboard</Link>
                <Link to="/sensor" className="nav-link px-5 nav-elem">Sensor</Link>
                <Link to="/electricity-usage" className="nav-link px-5 nav-elem">Electricity Usage</Link>
                <Link to="/settings" className="nav-link px-5 nav-elem">Settings</Link>
                <Link to="/login" className="nav-link px-5  nav-elem">Login/Logout</Link>
              </div>
            </div>
          </div>
        </nav>
    );
};

const Footer = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    if (isLoginPage) {
        return null;
    }

    return (
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light p-3">
            <div className="container-fluid">
                <p className="text-muted m-auto">Copyright 2024, Ho Chi Minh University of technology</p>
            </div>
        </nav>
    );
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/sensor">Sensor</Link>
            </li>
            <li>
              <Link to="/electricity-usage">Electricity Usage</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/login">Login/Logout</Link>
            </li>
          </ul>
        </nav> */}
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sensor" element={<SensorPage />} />
          <Route path="/electricity-usage" element={<ElectricityUsagePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;