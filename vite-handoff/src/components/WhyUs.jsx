import React from "react";
import Icon from "./Icon.jsx";
import { Reveal, SectionHead } from "./ui.jsx";
import { WHY } from "../data.js";

export default function WhyUs() {
  return (
    <section id="why" className="relative py-20 md:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHead kicker="Why Choose Us" title="The JSK advantage"
          sub="Premium, transparent and genuinely expert tax service — built around how you actually live and work." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 80} className="h-full">
              <div className="card-hover group h-full rounded-3xl border border-white/10 bg-navy-900/60 p-7 hover:border-brand-500/50">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 text-navy-950 group-hover:rotate-6 transition-transform"><Icon name={w.icon} className="w-6 h-6" stroke={2} /></span>
                <h3 className="mt-5 font-display text-lg font-extrabold">{w.t}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
