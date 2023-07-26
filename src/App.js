

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Make sure the correct path is provided here
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
// import './App.css';


//  const backgroundUrl = 'https://img.freepik.com/free-vector/realistic-travel-background_23-2148045936.jpg?size=626&ext=jpg';
// const backgroundUrl = 'https://tinyurl.com/y8tbnxph'

const backgroundUrl = ''

function App() {
  const [user, setUser] = useState(null);
  const [pastTrips, setPastTrips] = useState([]);
  const [upcomingTrips, setUpcomingTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrips = async () => {
    const userId = localStorage.getItem('userId');
    const response = await fetch(`http://localhost:9292/users/${userId}/trips`);
    const data = await response.json();

    const past = data.filter(trip => new Date(trip.start_date) < new Date());
    const upcoming = data.filter(trip => new Date(trip.start_date) > new Date());

    setPastTrips(past);
    setUpcomingTrips(upcoming);
    setLoading(false);
  };

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userId = localStorage.getItem('userId');
    if (userToken && userId) {
      setUser({
        token: userToken,
        id: userId,
      });
      fetchTrips(); // Fetch the trips after successful login
    }
  }, []);

  const handleLogin = async (user) => {
    localStorage.setItem('userToken', user.token);
    localStorage.setItem('userId', user.id);
    setUser(user);
    fetchTrips(); // Fetch the trips after successful login
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    setUser(null);
  };

  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header isLoggedIn={!!user} onLogout={handleLogout} /> 
        {/* <nav>
          <Link to="/">Home</Link>
          {user ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav> */}
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register onLogin={handleLogin} />} />
          <Route path="/dashboard" element={user ? <Dashboard fetchTrips={fetchTrips} pastTrips={pastTrips} upcomingTrips={upcomingTrips} setPastTrips={setPastTrips} setUpcomingTrips={setUpcomingTrips} loading={loading} /> : <Navigate to="/login" />} />
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
