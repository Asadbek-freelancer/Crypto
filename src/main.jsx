import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import i18n from './i18next/i18next.js'
i18n

createRoot(document.getElementById('root')).render(
/*   <StrictMode>
  </StrictMode>, */

  <React.StrictMode>
<BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
)