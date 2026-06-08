import React from "react";
import Icon from "./Icon.jsx";
import { Reveal, CTA, Logo } from "./ui.jsx";
import { wa, BRAND, BRAND_FULL, WA_NUMBER } from "../config.js";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-700/40 via-navy-800 to-teal-500/20 p-8 md:p-14 text-center">
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-teal-500/10 blur-3xl rounded-full spin-slow" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">Ready to file? Let's start on WhatsApp.</h2>
              <p className="mt-4 max-w-xl mx-auto text-white/65">Tap below and a JSK tax expert will guide you — choose a plan, share documents, and get your return filed. 60% off with code <span className="font-bold text-teal-300">OFFERITR</span>.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <CTA href={wa(`Hi ${BRAND}, I'd like to get started with my tax filing.`)} variant="teal" icon="whatsapp" className="text-base px-7 py-4 pulse-ring">Chat with an Expert</CTA>
                <a href={`tel:+${WA_NUMBER}`} className="btn-press inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-base font-bold hover:bg-white/10 transition-colors">
                  <Icon name="phone" className="w-4 h-4" /> Call 90301 58713
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 px-5 pt-14 pb-8">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-white/55">Expert income-tax filing, advance-tax planning, notice management and year-round advisory — for salaried individuals, freelancers, traders, NRIs and businesses.</p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-white/70">
            <a href={`tel:+${WA_NUMBER}`} className="inline-flex items-center gap-2 hover:text-white"><Icon name="phone" className="w-4 h-4 text-teal-400" /> 90301 58713</a>
            <a href={wa(`Hi ${BRAND}, I have a query.`)} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-white"><Icon name="whatsapp" className="w-4 h-4 text-teal-400" /> Chat on WhatsApp</a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50">ITR Filing</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {["Basic", "Premium", "Elite", "Luxe", "Updated Return (ITR-U)"].map((x) => (
              <li key={x}><a href="#plans" className="hover:text-white transition-colors">{x}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/50">Advisory</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {["Advance Tax Planning", "Ask Our Expert", "Notice Management", "HUF Registration"].map((x) => (
              <li key={x}><a href="#advisory" className="hover:text-white transition-colors">{x}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} {BRAND_FULL}. All rights reserved.</span>
        <span>Prices inclusive of taxes · Coupon OFFERITR · For informational purposes only.</span>
      </div>
    </footer>
  );
}

export function FloatWA() {
  return (
    <a href={wa(`Hi ${BRAND}, I'd like help with my taxes.`)} target="_blank" rel="noopener"
       className="fixed bottom-5 right-5 z-50 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 pulse-ring btn-press hover:scale-105 transition-transform">
      <Icon name="whatsapp" className="w-7 h-7" />
      <span className="sr-only">WhatsApp us</span>
    </a>
  );
}
