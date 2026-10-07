import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Toolkit from './components/Toolkit'
import Education from './components/Education'
import Projects from './components/Projects'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import './theme.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Toolkit />
        <Education />
        <Projects />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
