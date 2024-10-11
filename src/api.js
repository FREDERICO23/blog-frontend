// src/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Authorization': `Bearer 89b30fc3cc76fa58201e31cebb0b2da14ef692213550938f75de8539350f7b2e5ccacc0ed5666b23a4c1aca307ba4b743f865b743dcb78e6b47507a08122d50457361bd1aa3bff455af8eb636750a322526edcd9ec8d5132161414648e41fae2c8ba774f3cd7c79d44a97150c91fc7fed6e02fc2bf8761aeab48b317970d0953`
  }
})

export default api

