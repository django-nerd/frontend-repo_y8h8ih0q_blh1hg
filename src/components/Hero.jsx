import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">AI Automation Solutions</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              AI Automation That Converts Old Leads Into New Revenue — With Zero Upfront Cost
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              CynteraTech builds intelligent automation systems that streamline business operations, boost conversions, and scale revenue — without adding staff.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/40 transition">
                Book a Free Strategy Call
              </Link>
              <Link to="/demo" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition">
                See Demo
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-400">
              {['Gyms','Roofers','Contractors','Local Services'].map((i) => (
                <div key={i} className="rounded-lg border border-cyan-400/10 bg-slate-900/50 px-4 py-3 text-center">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
    </section>
  )
}
