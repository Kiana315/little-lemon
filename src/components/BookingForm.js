// src/components/BookingForm.js
import React, { useState } from 'react';
import './Booking.css';

function BookingForm({ availableTimes, dispatchTimes }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', {
      name,
      phone,
      date,
      time,
      guests,
      occasion,
    });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatchTimes({ date: newDate }); // 向 reducer 发出更新时间的请求
  };

    return (
        <form onSubmit={handleSubmit} >
            <h1>Book a Table</h1>
            <label htmlFor="name">Your Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="e.g. 555-123-4567"
                pattern="[\d\s\-()+]+"
            />

            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                {availableTimes?.map((t) => (
                <option key={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>

            <button className='button-primary' type="submit">Submit Reservation</button>
        </form>
    );
}

export default BookingForm;
