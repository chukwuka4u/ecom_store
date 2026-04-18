import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import BuyerRoutes from './routes/buyer-routes.tsx'
import VendorRoutes from './routes/vendor-routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BuyerRoutes />
      <VendorRoutes />
    </BrowserRouter>
  </StrictMode>,
)
