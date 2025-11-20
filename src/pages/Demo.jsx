import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function DemoPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">See AI In Action</h1>
          <p className="mt-2">Experience how AI voice agents, chatbots, and automations book calls, close deals, and reactivate leads.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[1,2].map((i)=> (
              <div key={i} className="aspect-video rounded-2xl border border-cyan-400/10 bg-slate-900/60 flex items-center justify-center text-slate-400">Video Placeholder</div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-6">
            <h2 className="text-white font-semibold text-xl">Success Example</h2>
            <p className="mt-2">Automated lead reactivation campaign generated booked calls and closed deals within days — with zero upfront cost.</p>
          </div>

          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-lg">Schedule Your Live Demo</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
