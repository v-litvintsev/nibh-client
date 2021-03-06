import axios from 'axios'
import { ACCESS_TOKEN } from '../constants/storage'
import { API_URL } from '../constants/url-addresses'
import { storage } from '../utils/storage'

export const http = axios.create({ baseURL: API_URL })

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${storage.get(ACCESS_TOKEN)}`
  return request
})
