import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export function PrivacyPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-4">This Privacy Policy explains how CynteraTech ("we", "us", "our") collects, uses, and safeguards personal information in compliance with GDPR and CCPA. This is placeholder text and can be updated later.</p>
          <h2 className="mt-6 text-white font-semibold text-xl">Information We Collect</h2>
          <p className="mt-2">We may collect identifiers (name, email, phone), commercial information, internet activity, and professional data for business purposes.</p>
          <h2 className="mt-6 text-white font-semibold text-xl">How We Use Information</h2>
          <p className="mt-2">To provide and improve services, process requests, conduct outreach, and ensure security and compliance.</p>
          <h2 className="mt-6 text-white font-semibold text-xl">Your Rights</h2>
          <p className="mt-2">Depending on your location, you may have rights to access, correct, delete, or restrict processing of your data, and to opt out of sale or sharing.</p>
          <h2 className="mt-6 text-white font-semibold text-xl">Contact</h2>
          <p className="mt-2">For privacy inquiries, email support@cynteratech.com.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export function TermsPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          <p className="mt-4">These Terms govern your access to and use of CynteraTech services. This is placeholder legal text and can be edited later.</p>
          <h2 className="mt-6 text-white font-semibold text-xl">Use of Services</h2>
          <p className="mt-2">You agree to use services in compliance with applicable laws and not to misuse or attempt to disrupt our systems.</p>
          <h2 className="mt-6 text-white font-semibold text-xl">Payments</h2>
          <p className="mt-2">Certain services may be offered with performance-based pricing where fees are due only when results are delivered.</p>
          <h2 className="mt-6 text-white font-semibold text-xl">Disclaimers</h2>
          <p className="mt-2">Services are provided "as is" to the fullest extent permitted by law. We disclaim warranties of merchantability and fitness for a particular purpose.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
