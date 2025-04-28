import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar.tsx'
import './index.css'
import AboutMe from './components/aboutme.tsx'

createRoot(document.getElementById('root')!).render(

 <StrictMode>
    <Navbar />
    <AboutMe />

  </StrictMode>,
)
