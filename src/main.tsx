import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar.tsx'
import './index.css'
import './i18n.tsx';
import AboutMe from './components/aboutme.tsx'
import {Tools} from './components/tech.tsx'
import SettingsPopup from './components/settingPopup.tsx';
import ContactForm from './components/contactForm.tsx';
import { Projects } from './components/projects.tsx';
import Footer from './components/footer.tsx';

createRoot(document.getElementById('root')!).render(

 <StrictMode>
    <Navbar />
    <SettingsPopup />
    <AboutMe />
    <Tools />
    <Projects />
    <ContactForm />
    <Footer />
  </StrictMode>,
)
