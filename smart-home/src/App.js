import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import your page components
import Dashboard from './pages/Dashboard';
import SensorPage from './pages/SensorPage';
import ElectricityUsagePage from './pages/ElectricityUsagePage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
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
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sensor" element={<SensorPage />} />
          <Route path="/electricity-usage" element={<ElectricityUsagePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;