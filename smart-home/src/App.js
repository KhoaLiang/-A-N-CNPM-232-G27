import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Import your page components
import Dashboard from './pages/Dashboard';
import SensorPage from './pages/SensorPage';
import ElectricityUsagePage from './pages/ElectricityUsagePage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';

const Header = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    //uncomment this when it's time to implement the login page properly
    // if (isLoginPage) {
    //     return null;
    // } 

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" ><Link to="/">Dashboard</Link></a>
                <a class="nav-link" ><Link to="/sensor">Sensor</Link></a>
                <a class="nav-link" ><Link to="/electricity-usage">Electricity Usage</Link></a>
                <a class="nav-link" ><Link to="/settings">Settings</Link></a>
                <a class="nav-link" ><Link to="/login">Login/Logout</Link></a>
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
        <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </div>
            </div>
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;