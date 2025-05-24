import ContactForm from './components/contactForm.tsx'
import { Projects } from './components/projects.tsx'
import { Tools } from './components/tech.tsx'
import AboutMe from './components/aboutme.tsx'

export default function Home() {
  return (
    <>
      <AboutMe />
      <Tools />
      <Projects />
      <ContactForm />
    </>
  )
}