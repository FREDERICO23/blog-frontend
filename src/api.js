import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    'Authorization': `Bearer ${process.env.VUE_APP_STRAPI_BEARER_TOKEN}`
  }
})

export default api

