// src/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Authorization': `Bearer 2efaa3544e0f3b6a77347fc8f72cbf1bfa3969ef52632df347f7492099cb1646a745cf70f02126bafdbe311b743f402e11dc51b5b6e6a4abdb5b8a901a692fc29526c5169fb216af8fb41a3c164b7e88e4961d9e8a48c45882c23b18aa4f9e59d2a0b8366bbbc32da589b9abd0b448826db0abd697ae82e4537200fe6a1bad67`
  }
})

export default api

