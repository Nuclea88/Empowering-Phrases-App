import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { RouterContextProvider } from 'react-router'
import {router} from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
   <RouterContextProvider router = {router}/>
  </StrictMode>,
)
