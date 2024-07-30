// services/apiService.js
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export const apiService = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL,
  timeout: 10000,
});

export const login = (mobile_number, otp) => {
  return apiService.post(API_ENDPOINTS.LOGIN, { mobile_number, otp });
};

// Add more API methods here
