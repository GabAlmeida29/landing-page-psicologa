import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import SkipLink from './components/layout/SkipLink'
import WhatsAppFab from './components/layout/WhatsAppFab'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Faq from './components/sections/Faq'
import Hero from './components/sections/Hero'
import HowItWorks from './components/sections/HowItWorks'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import { SECTION_IDS } from './constants'

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id={SECTION_IDS.content}>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
