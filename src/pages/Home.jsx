import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Intro, ServicesPreview, Testimonials, PricingCTA } from '../components/HomeSections'
import Footer from '../components/Footer'

export default function HomePage(){
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <ServicesPreview />
        <Testimonials />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  )
}
