import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Test from './test.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Test />
  </StrictMode>,
)
