import axios from 'axios'
// import { getToken, logout } from './login'

const api = axios.create({
  baseURL: 'superapilink'
})

export default api
