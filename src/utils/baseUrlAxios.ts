'use client'

import Cookies from 'js-cookie'
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { base_url } from './base-url'

const baseUrlAxios: AxiosInstance = axios.create({
  baseURL: base_url,
  headers: {
    'Accept-Language': Cookies.get('Next-Locale')
  }
})

baseUrlAxios.interceptors.request.use(config => {
  const token = Cookies.get('tokenAgent')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

baseUrlAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove('tokenAgent')
      Cookies.remove('user')
      localStorage.removeItem('login-user')
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

type TErrorAxios = AxiosError<{
  message: string
  errors: TErrors
}>

export { type AxiosResponse, type TErrorAxios, baseUrlAxios }

export default baseUrlAxios
