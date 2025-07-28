// src/test/BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('BookingForm Component', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatchTimes = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    renderWithRouter(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatchTimes={mockDispatchTimes}
        submitForm={mockSubmitForm}
      />
    );
  });

  test('renders all input fields', () => {
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', async () => {
    fireEvent.click(screen.getByRole('button', { name: /submit reservation/i }));

    // 手动触发 blur 以使 Formik 显示错误信息
    fireEvent.blur(screen.getByLabelText(/your name/i));
    fireEvent.blur(screen.getByLabelText(/phone number/i));
    fireEvent.blur(screen.getByLabelText(/choose date/i));
    fireEvent.blur(screen.getByLabelText(/choose time/i));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/phone number is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: 'Alice' },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: '123-456-7890' },
    });
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-08-01' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });

    fireEvent.submit(screen.getByRole('button', { name: /submit reservation/i }).closest('form'));



    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith({
        name: 'Alice',
        phone: '123-456-7890',
        date: '2025-08-01',
        time: '17:00',
        guests: 4,
        occasion: 'Birthday',
      });
    });
  });
});
