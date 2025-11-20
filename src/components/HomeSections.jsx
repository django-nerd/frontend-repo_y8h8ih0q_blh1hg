import { Bot, PhoneCall, MessageSquareText, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Intro() {
  return (
    <section className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet CynteraTech</h2>
            <p className="mt-4 text-slate-300">
              We future-proof businesses with AI automation — turning outdated processes and ignored leads into predictable revenue.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-slate-300">
              {['Gyms','Roofers','Contractors','Local Services'].map((i)=> (
                <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-6">
            <p className="text-slate-300">Results-driven messaging:</p>
            <ul className="mt-3 space-y-2 text-slate-200">
              <li>• Increase conversions, reduce manual workload, operate 24/7.</li>
              <li>• Pay only when results are delivered — No risk.</li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-lg">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesPreview() {
  const services = [
    { icon: PhoneCall, title: 'AI Voice Agents', desc: '24/7 phone agents that book, qualify, and close.' , cta: 'Request a Voice Agent Demo', to: '/services#voice'},
    { icon: MessageSquareText, title: 'Lead Reactivation', desc: 'Turn cold leads into new revenue with multichannel outreach.', cta: 'Unlock New Revenue', to: '/services#reactivation'},
    { icon: Workflow, title: 'Business Automation', desc: 'Automate workflows to cut manual work and boost productivity.', cta: 'Automate My Business', to: '/services#automation'},
    { icon: Bot, title: 'AI Chat Bots', desc: 'Intelligent chat on web, SMS, and social to convert more.', cta: 'Add AI to My Website', to: '/services#chatbots'},
  ]
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Core Services</h2>
        <p className="text-slate-300 text-center mt-2">Built for performance, compliance, and scale.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({icon:Icon, title, desc, cta, to}) => (
            <div key={title} className="rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-6 hover:border-cyan-400/30 transition">
              <Icon className="text-cyan-400" />
              <h3 className="mt-3 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
              <Link to={to} className="mt-4 inline-flex text-cyan-300 hover:text-cyan-200">{cta} →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">What Clients Say</h2>
        <p className="text-slate-400 text-center mt-2">Placeholder testimonials — editable later.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <div key={i} className="rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-6 text-slate-300">“Amazing results — our bookings skyrocketed.”</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PricingCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white">Pay only when results are delivered — No risk.</h3>
        <p className="text-slate-300 mt-2">Aligned incentives. Transparent performance. Scale confidently.</p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-xl">Book a Free Strategy Call</Link>
          <Link to="/demo" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">See Demo</Link>
        </div>
      </div>
    </section>
  )
}
