// src/pages/BookingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { submitAPI } from '../api';

function BookingPage({ availableTimes, dispatchTimes }) {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      alert("This time is not available. Please select another.");
    }
  };

  return (
    <section className="booking-section">
      <BookingForm
        availableTimes={availableTimes}
        dispatchTimes={dispatchTimes}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
