import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToggleContextProvider from './context/toggleContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleContextProvider>
    <App />
    </ToggleContextProvider>
    
  </React.StrictMode>,
)
