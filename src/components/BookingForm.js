// src/components/BookingForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Booking.css';

const BookingForm = ({ availableTimes, dispatchTimes, submitForm }) => {
  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    phone: Yup.string()
      .matches(/^\d{3}[- ]?\d{3}[- ]?\d{4}$/, 'Invalid phone number')
      .required('Phone number is required'),
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number()
      .min(1, 'At least 1 guest')
      .max(10, 'Max 10 guests')
      .required('Guests number is required'),
    occasion: Yup.string().required('Occasion is required'),
  });

  const initialValues = {
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  };

  const handleDateChange = (e, setFieldValue) => {
    const selectedDate = e.target.value;
    setFieldValue('date', selectedDate);
    dispatchTimes({ date: selectedDate });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => submitForm(values)}
      validateOnMount={true} // ✅ 添加此项让验证即时生效
    >
      {({ values, isValid, dirty, setFieldValue }) => (
        <Form>
          <h1>Book a Table</h1>

          <label htmlFor="name">Your Name</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />

          <label htmlFor="phone">Phone Number</label>
          <Field id="phone" name="phone" type="tel" placeholder="555-123-4567" />
          <ErrorMessage name="phone" component="div" className="error" />

          <label htmlFor="date">Choose Date</label>
          <Field
            id="date"
            name="date"
            type="date"
            onChange={(e) => handleDateChange(e, setFieldValue)}
          />
          <ErrorMessage name="date" component="div" className="error" />

          <label htmlFor="time">Choose Time</label>
          <Field as="select" id="time" name="time">
            <option value="">Select a time</option>
            {availableTimes?.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" className="error" />

          <label htmlFor="guests">Number of Guests</label>
          <Field id="guests" name="guests" type="number" min="1" max="10" />
          <ErrorMessage name="guests" component="div" className="error" />

          <label htmlFor="occasion">Occasion</label>
          <Field as="select" id="occasion" name="occasion">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
          </Field>
          <ErrorMessage name="occasion" component="div" className="error" />

          <button
            type="submit"
            className="button-primary"
            disabled={!(isValid && dirty)}
          >
            Submit Reservation
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
