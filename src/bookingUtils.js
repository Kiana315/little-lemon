// bookingUtils.js
/* global fetchAPI, submitAPI */

import { fetchAPI } from './api'; // ✅ 确保路径正确

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};
