// bookingUtils.test.js
import { initializeTimes, updateTimes } from '../bookingUtils';
import * as API from '../api';

jest.mock('../api');

test('initializeTimes returns mocked available times', () => {
  const mockTimes = ['17:00', '18:00', '19:00'];
  API.fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();
  expect(result).toEqual(mockTimes);
});

test('updateTimes returns new times based on action.date', () => {
  const mockTimes = ['18:00', '19:00', '20:00'];
  API.fetchAPI.mockReturnValue(mockTimes);

  const result = updateTimes([], { date: '2025-08-01' });
  expect(result).toEqual(mockTimes);
});
