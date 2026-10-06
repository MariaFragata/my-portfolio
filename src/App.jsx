import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Toolkit from './components/Toolkit'
import WorkTeaser from './components/WorkTeaser'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Toolkit />
        <WorkTeaser />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
