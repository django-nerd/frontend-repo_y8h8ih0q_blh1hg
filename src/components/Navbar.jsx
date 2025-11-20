import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}
    >
      {label}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur border-b border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(34,211,238,0.35)]"></div>
            <span className="text-white font-extrabold tracking-tight text-lg">CynteraTech</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/demo" label="Demo" />
            <NavItem to="/contact" label="Contact" />
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:scale-[1.02] transition"
            >
              Book a Free Strategy Call
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200 p-2">
            <Menu size={22} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <NavItem to="/" label="Home" />
              <NavItem to="/about" label="About" />
              <NavItem to="/services" label="Services" />
              <NavItem to="/demo" label="Demo" />
              <NavItem to="/contact" label="Contact" />
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-lg"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
