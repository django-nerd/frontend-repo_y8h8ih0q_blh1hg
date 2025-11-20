import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Bot, PhoneCall, MessageSquareText, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'

function ServiceBlock({ id, Icon, title, description, bullets, cta }){
  return (
    <section id={id} className="scroll-mt-24">
      <div className="rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-6">
        <div className="flex items-start gap-4">
          <Icon className="text-cyan-400" />
          <div>
            <h3 className="text-white font-semibold text-xl">{title}</h3>
            <p className="mt-2 text-slate-300">{description}</p>
            <ul className="mt-3 space-y-1 text-slate-200">
              {bullets.map((b) => <li key={b}>• {b}</li>)}
            </ul>
            <Link to="/contact" className="mt-4 inline-flex text-cyan-300 hover:text-cyan-200">{cta} →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Services</h1>
          <p className="mt-2">Automation designed to increase conversions, reduce manual workload, and run 24/7.</p>

          <div className="mt-10 grid gap-6">
            <ServiceBlock
              id="voice"
              Icon={PhoneCall}
              title="AI Voice Agents"
              description="AI-powered phone agents that answer calls 24/7, book appointments, process payments, answer FAQs, and handle lead qualification automatically."
              bullets={["Never miss a call again","Automated scheduling & follow-ups","Consistent customer experience","Lower labor cost"]}
              cta="Request a Voice Agent Demo"
            />
            
            <ServiceBlock
              id="reactivation"
              Icon={MessageSquareText}
              title="Lead Reactivation"
              description="We turn old, stale, or unresponsive leads into paying customers through smart automation, personalized outreach, and multi-channel communication."
              bullets={["Increase revenue from existing database","Multi-channel outreach: voice + SMS + email","Zero upfront cost — you only pay when revenue is generated"]}
              cta="Unlock New Revenue"
            />

            <ServiceBlock
              id="automation"
              Icon={Workflow}
              title="Business Automation"
              description="Streamline operations with automated workflows that reduce manual tasks and improve productivity."
              bullets={["Replace repetitive work with AI","Integrate data across platforms","Improve response times & customer satisfaction"]}
              cta="Automate My Business"
            />

            <ServiceBlock
              id="chatbots"
              Icon={Bot}
              title="AI Chat Bots"
              description="Intelligent chat agents that handle support, bookings, quoting, and lead intake on websites, SMS, and social media."
              bullets={["Instant responses 24/7","Higher conversion rates","Conversational, human-like experiences"]}
              cta="Add AI to My Website"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
