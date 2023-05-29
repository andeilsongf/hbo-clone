import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    accept: 'application/json',
    Authorization: process.env.NEXT_PUBLIC_API_AUTHORIZATION,
  },
})

export default api
