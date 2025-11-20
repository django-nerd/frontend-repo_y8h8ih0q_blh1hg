import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function ContactPage(){
  const [form, setForm] = useState({ firstName:'', lastName:'', company:'', email:'', phone:'', message:'' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks! We will reach out shortly.')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-2">Business hours: Mon–Fri 9am–6pm. Email: support@cynteratech.com</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} className="w-full rounded-md bg-slate-900/60 border border-cyan-400/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
              <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} className="w-full rounded-md bg-slate-900/60 border border-cyan-400/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            </div>
            <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="w-full rounded-md bg-slate-900/60 border border-cyan-400/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full rounded-md bg-slate-900/60 border border-cyan-400/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
              <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full rounded-md bg-slate-900/60 border border-cyan-400/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <textarea name="message" placeholder="How can we help?" rows="5" value={form.message} onChange={handleChange} className="w-full rounded-md bg-slate-900/60 border border-cyan-400/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-900 font-semibold shadow-lg" type="submit">Submit</button>
              <a href="tel:+10000000000" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10">Click to Call</a>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
