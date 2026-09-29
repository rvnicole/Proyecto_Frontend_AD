import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import Router from './Router.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
    <ToastContainer />
  </StrictMode>,
)
