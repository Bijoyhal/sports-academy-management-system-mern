import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FormProvider } from './context/formContext.jsx'
import { UserProvider } from './context/userContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FormProvider>
          <Toaster />
          <App />
        </FormProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
