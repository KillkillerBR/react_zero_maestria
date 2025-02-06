import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CounterContextProvider } from './context/CounterContext.jsx'
import { TittleColorContextProvider } from './context/TittleColorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2 - criando provider */}
    <CounterContextProvider>
      <TittleColorContextProvider>
        <App />
      </TittleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
