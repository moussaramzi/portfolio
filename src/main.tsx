import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.tsx'
import './index.css'
import './i18n.tsx';
import SettingsPopup from './components/settingPopup.tsx'
import Footer from './components/footer.tsx'
import NotFound404 from './components/notFound404.tsx'
import Home from './home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <SettingsPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)