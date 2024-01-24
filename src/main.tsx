import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrivatePublicAxiosInterceptor } from './interceptors/axios.interceptors.tsx'

PrivatePublicAxiosInterceptor()

/*
 <React.StrictMode>
    <App />
  </React.StrictMode>,
*/
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
