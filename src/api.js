// src/api.js
export const fetchAPI = (date) => {
  // 模拟：从 API 获取时间段
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const submitAPI = (formData) => {
  // 模拟：检查时间是否可用
  return formData.time !== '18:00'; // 比如假设 18:00 总是被占
};
