import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar.tsx'
import './index.css'
import './i18n.tsx';
import AboutMe from './components/aboutme.tsx'
import {Tools} from './components/tech.tsx'
import LanguageSwitcher from './components/languageSwitcher.tsx';

createRoot(document.getElementById('root')!).render(

 <StrictMode>
    <Navbar />
    <LanguageSwitcher />
    <AboutMe />
    <Tools />
  </StrictMode>,
)
