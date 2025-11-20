import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-cyan-400/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600"></div>
              <span className="text-white font-bold">CynteraTech</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              AI Automation Solutions built to convert leads and scale revenue with a modern, trustworthy approach.
            </p>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-cyan-300">About</Link></li>
              <li><Link to="/services" className="hover:text-cyan-300">Services</Link></li>
              <li><Link to="/demo" className="hover:text-cyan-300">Demo</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/privacy" className="hover:text-cyan-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-cyan-300">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="mailto:support@cynteratech.com" className="hover:text-cyan-300">support@cynteratech.com</a></li>
              <li><span>United States • Wyoming</span></li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-lg">Book a Free Strategy Call</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cyan-400/10 text-slate-500 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} CynteraTech. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-cyan-300">Privacy</Link>
            <Link to="/terms" className="hover:text-cyan-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
