require('dotenv').config();
const axios = require('axios');

/**
 * Axios client for Zaptilo API
 */
const client = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 15000,
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

module.exports = client;
