import React from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route, useRoutes, Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

//Import function
import { getCookie } from './function/login-logout';
import { logOut} from './api/userApi'; // logout api

const ProtectedLink = ({ isLoggedIn, to, children, ...props }) => {
  if (!isLoggedIn) {
    return null;
  }

  return <Link to={to} {...props}>{children}</Link>;
};
const PrivateRoute = ({ isLoggedIn, children }) => {
  const location = useLocation();
  return isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />;
};
const Header = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogOut = async () => {
    const data = await logOut();
    console.log("Logout: ",data); // handle the response as needed
    setIsLoggedIn(false);
  };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ProtectedLink isLoggedIn={isLoggedIn} to="/"><img src={logo} alt="" className='logo-nav' /></ProtectedLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <ProtectedLink isLoggedIn={isLoggedIn} to="/" className="nav-link px-5 nav-elem">Dashboard</ProtectedLink>
              <ProtectedLink isLoggedIn={isLoggedIn} to="/sensor" className="nav-link px-5 nav-elem">Sensor</ProtectedLink>
              <ProtectedLink isLoggedIn={isLoggedIn} to="/electricity-usage" className="nav-link px-5 nav-elem">Electricity Usage</ProtectedLink>
              <ProtectedLink isLoggedIn={isLoggedIn} to="/settings" className="nav-link px-5 nav-elem">Settings</ProtectedLink>
              {
                isLoggedIn 
                  ? <Link to="/login" className="nav-link px-5 nav-elem" onClick={handleLogOut}>Logout</Link>
                  : <Link to="/login" className="nav-link px-5 nav-elem">Login</Link>
              }
              
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    getCookie('jwt') !== undefined 
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }/>
          <Route path="/sensor" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <SensorPage />
            </PrivateRoute>
          }/>
          <Route path="/electricity-usage" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <ElectricityUsagePage />
            </PrivateRoute>
          }/>
          <Route path="/settings" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <SettingsPage />
            </PrivateRoute>
          }/>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/forgot" element={<ForgotPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;