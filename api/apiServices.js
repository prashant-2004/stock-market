// apiService.js
import axios from 'axios';
import { API_KEY } from '../config';

const GAINER_URL = `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${API_KEY}`;
const LOSER_URL =`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${API_KEY}`;
export const fetchTopGainers = async () => {
  try {
    const response = await axios.get(GAINER_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchTopLosers = async () => {
  try {
    const response = await axios.get(LOSER_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};