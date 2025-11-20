import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">About CynteraTech</h1>
          <p className="mt-4 text-lg">We future-proof businesses using AI automation, turning outdated processes and ignored leads into predictable revenue.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-6">
              <h2 className="text-white font-semibold text-xl">Our Approach</h2>
              <ul className="mt-4 space-y-2">
                <li>• Ethical AI</li>
                <li>• Human-guided automation</li>
                <li>• Hands-off deployment + full support</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-cyan-400/10 bg-slate-900/60 p-6">
              <h2 className="text-white font-semibold text-xl">Founder Story</h2>
              <p className="mt-2">Built by business operators who understand real-world challenges — not just tech.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
