/* global fetchAPI, submitAPI */
// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useReducer } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';

import { initializeTimes, updateTimes } from './bookingUtils';
import './App.css';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Router>
      <header className="top-header">
        <Header />
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatchTimes={dispatch}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

