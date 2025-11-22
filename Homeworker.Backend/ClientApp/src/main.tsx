import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UploadTextbook from './pages/upload/Index.tsx'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/upload" element={<UploadTextbook />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
