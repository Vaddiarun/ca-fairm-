import React from "react";
import Icon from "./Icon.jsx";
import { Reveal, CTA, SectionHead } from "./ui.jsx";
import { ADVISORY } from "../data.js";
import { wa, buyMsg, BRAND } from "../config.js";

export default function Advisory() {
  return (
    <section id="advisory" className="relative py-20 md:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHead kicker="Advisory Services" title="Beyond filing — plan, defend & comply"
          sub="Year-round advisory from senior tax experts. Every engagement starts on WhatsApp." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ADVISORY.map((s, i) => (
            <Reveal key={s.name} delay={i * 90} className="h-full">
              <div className="card-hover group relative h-full rounded-3xl border border-white/10 bg-navy-900/70 backdrop-blur p-6 flex flex-col hover:border-teal-400/50">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-teal/10 text-teal-300 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold">{s.name}</h3>
                <p className="mt-1 text-sm text-white/55">{s.sub}</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-xs text-white/45">Just at</span>
                  <span className="font-display text-2xl font-extrabold">{s.price}</span>
                  <span className="mb-0.5 text-xs text-white/40 line-through">{s.strike}</span>
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  {s.features.map((f, k) => (
                    <li key={k} className="flex items-start gap-2 text-xs text-white/70">
                      <Icon name="check" className="w-3.5 h-3.5 mt-0.5 text-teal-400 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-col gap-2">
                  <CTA href={wa(buyMsg(s.name, s.sub, s.price))} variant="primary" icon="whatsapp" className="w-full text-xs py-2.5">Buy Now</CTA>
                  <a href={wa(`Hi ${BRAND}, tell me more about ${s.name}.`)} target="_blank" rel="noopener"
                     className="text-center text-xs font-semibold text-white/45 hover:text-white transition-colors">Know more →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
