import React, { useState } from "react";
import Icon from "./Icon.jsx";
import { Reveal, Counter, CTA } from "./ui.jsx";
import { HERO_BADGES } from "../data.js";
import { wa, BRAND, BRAND_FULL, WA_NUMBER } from "../config.js";

function CallbackForm() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi ${BRAND}, please call me back.%0APhone: ${phone || "—"}%0AEmail: ${email || "—"}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };
  return (
    <form onSubmit={submit} className="relative rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-6 md:p-7 shadow-2xl shadow-navy-950/50">
      <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-3 py-1 text-[11px] font-extrabold text-navy-950">Free callback</div>
      <h3 className="font-display text-xl font-extrabold">Request a Callback</h3>
      <p className="mt-1 text-sm text-white/55">Leave your details — we'll reach out on WhatsApp.</p>
      <label className="block mt-5 text-xs font-bold uppercase tracking-wider text-white/50">Phone Number</label>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/15 bg-navy-950/50 px-3 focus-within:border-teal-400 transition-colors">
        <Icon name="phone" className="w-4 h-4 text-teal-400" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Your contact number" className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-white/30" />
      </div>
      <label className="block mt-4 text-xs font-bold uppercase tracking-wider text-white/50">Email ID</label>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/15 bg-navy-950/50 px-3 focus-within:border-teal-400 transition-colors">
        <Icon name="mail" className="w-4 h-4 text-teal-400" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email ID" className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-white/30" />
      </div>
      <button type="submit" className="btn-press mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 py-3.5 text-sm font-bold text-navy-950 shadow-lg shadow-teal/30 hover:shadow-teal/50 transition-shadow">
        <Icon name="whatsapp" className="w-4 h-4" /> Request a Callback
      </button>
      <p className="mt-3 text-center text-[11px] text-white/40">Instant response · No spam · 100% confidential</p>
    </form>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40 pb-20 px-5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mesh-blob w-[42rem] h-[42rem] bg-brand-600/30 -top-40 -left-32" />
        <div className="mesh-blob w-[34rem] h-[34rem] bg-teal-500/20 top-10 right-0" style={{ animationDelay: "-5s" }} />
        <div className="mesh-blob w-[28rem] h-[28rem] bg-gold-400/10 bottom-0 left-1/3" style={{ animationDelay: "-9s" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)", backgroundSize: "34px 34px" }} />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal-300">
              <span className="relative flex w-2 h-2"><span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" /><span className="relative inline-flex rounded-full w-2 h-2 bg-teal-400" /></span>
              Trusted partner · all year round
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Your trusted <span className="text-grad">tax &amp; financial</span> partner — all year round
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-5 max-w-xl text-base md:text-lg text-white/65">
              Expert-led ITR filing, advance-tax planning, notices & advisory — handled end-to-end by qualified professionals at <span className="text-white font-semibold">{BRAND_FULL}</span>. Start in one tap on WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <CTA href="#plans" icon="arrow" variant="primary" className="text-base px-6 py-3.5">View ITR Plans</CTA>
              <CTA href={wa(`Hi ${BRAND}, I'd like to file my ITR. Please help.`)} icon="whatsapp" variant="ghost" className="text-base px-6 py-3.5">File on WhatsApp</CTA>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {HERO_BADGES.map((b, i) => (
              <Reveal key={b.t} delay={300 + i * 80}>
                <div className="floaty flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3" style={{ animationDelay: `${i * 0.7}s` }}>
                  <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500/30 to-teal-500/30 text-teal-300"><Icon name={b.icon} className="w-5 h-5" /></span>
                  <span className="text-xs font-semibold leading-tight text-white/80">{b.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-600/20 to-teal-500/20 blur-2xl rounded-3xl" />
            <div className="relative"><CallbackForm /></div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[["Returns filed", 12000, "+"], ["Avg. rating", 49, "/50"], ["Cities served", 120, "+"], ["Years of expertise", 14, "+"]].map(([l, n, s], i) => (
          <Reveal key={l} delay={i * 90}>
            <div className="rounded-2xl border border-white/10 bg-navy-900/50 px-5 py-5 text-center">
              <div className="font-display text-3xl font-extrabold text-grad">
                {l === "Avg. rating" ? <span><Counter to={4} duration={900} />.<Counter to={9} duration={1400} />/5</span> : <Counter to={n} suffix={s} />}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/45">{l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Marquee() {
  const items = ["Salaried Returns", "Capital Gains", "Crypto & F&O", "NRI Taxation", "ESOPs & RSUs", "Business Income", "Notice Response", "Advance Tax", "ITR-U Filing", "HUF Setup", "Foreign Income", "Freelancers"];
  const row = [...items, ...items];
  return (
    <div className="marquee-wrap relative py-6 border-y border-white/10 bg-navy-950/60 overflow-hidden">
      <div className="marquee-track gap-4">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-semibold text-white/60">
            <Icon name="check" className="w-4 h-4 text-teal-400" />{t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-950 to-transparent" />
    </div>
  );
}
