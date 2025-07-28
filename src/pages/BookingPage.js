// src/pages/BookingPage.js
import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatchTimes }) {
  return (
    <section className="booking-page">
      
      <BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} />
    </section>
  );
}

export default BookingPage;