import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { getValidationError } from "../utilities/get-validation-error"
//import type { AxiosRequestConfig } from "axios"

export const PrivatePublicAxiosInterceptor = () => {
  const updateHeader = (req: InternalAxiosRequestConfig) => {
    const token = 'axk8z91f'
    const newHeaders = {
      Authorization: token,
      'content-type': 'application/json',
    }
    req.headers = newHeaders //! Genera un error de tipo, pero funciona de todas maneras
    return req
  }

  axios.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    console.log('Starting Request...', req);
    if (req.url?.includes('assets')) return req // * Si la req en la url incluye assets no se le agrega el token
    return updateHeader(req) // * Cambia todas las peticiones de la app utilizando el token
  }, (error) => {
    //console.log(error);
    console.log("Error", getValidationError(error.code));
    return Promise.reject(error)
  })
}

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log('Response:', res);
    return res
  },
  (error) => {
    console.log("Error", getValidationError(error.code));
    return Promise.reject(error)
  })