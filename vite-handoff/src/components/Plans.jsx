import React from "react";
import Icon from "./Icon.jsx";
import { Reveal, CTA, CouponPill, SectionHead, ACCENTS } from "./ui.jsx";
import { ITR_PLANS, WIDE_CARDS } from "../data.js";
import { wa, buyMsg, BRAND } from "../config.js";

function PlanCard({ p, i }) {
  const a = ACCENTS[p.accent];
  const popular = p.tag === "Popular";
  return (
    <Reveal delay={i * 90} className="h-full">
      <div className={`card-hover group relative h-full rounded-3xl border bg-navy-900/70 backdrop-blur p-6 flex flex-col
        ${popular ? "border-gold-400/60 shadow-2xl shadow-gold-400/10 lg:-translate-y-3" : "border-white/10"} ${a.ring}`}>
        <div className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b ${a.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
        {p.tag && (
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded-full px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider
            ${popular ? "bg-gradient-to-r from-gold-400 to-gold-300 text-navy-950 shine" : "bg-navy-700 text-white border border-white/15"}`}>
            {p.tag}
          </div>
        )}
        <div className="relative">
          <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
          <p className="mt-1.5 text-sm text-white/55 min-h-[40px]">{p.title}</p>
          <div className="mt-5">
            <span className="text-xs text-white/50">Just at</span>
            <div className="flex items-end gap-2.5">
              <span className="font-display text-4xl font-extrabold tracking-tight">{p.price}</span>
              <span className="mb-1 text-sm text-white/40 line-through">{p.strike}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center rounded-md bg-teal/15 px-2 py-0.5 text-xs font-bold text-teal-300">Get {p.off}</span>
              <CouponPill />
            </div>
          </div>
          <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
            {p.features.map((f, k) => (
              <li key={k} className="flex items-start gap-2.5 text-sm text-white/80">
                <span className={`mt-0.5 grid place-items-center w-5 h-5 rounded-full ${a.dot}/15 ${a.chip}`}><Icon name="check" className="w-3.5 h-3.5" /></span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-2xl bg-navy-950/60 border border-white/5 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">{p.incomeTitle}</p>
            <ul className="mt-2 space-y-1.5">
              {p.income.map((t, k) => (
                <li key={k} className="flex items-start gap-2 text-xs text-white/65"><span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${a.dot}`} />{t}</li>
              ))}
            </ul>
            {p.excluded && <p className="mt-2.5 text-[11px] text-rose-300/70">{p.excluded}</p>}
          </div>
        </div>
        <div className="relative mt-6 pt-2 flex flex-col gap-2.5">
          <CTA href={wa(buyMsg(p.name, p.title, p.price))} variant={popular ? "gold" : "primary"} icon="whatsapp" className="w-full">Buy Now</CTA>
          <a href={wa(`Hi ${BRAND}, I'd like to know more about the ${p.name} ITR plan.`)} target="_blank" rel="noopener"
             className="text-center text-xs font-semibold text-white/50 hover:text-white transition-colors">Know more →</a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Plans() {
  return (
    <section id="plans" className="relative py-20 md:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHead kicker="ITR Filing Plans" title="Pick the plan that fits your income"
          sub="Expert-led income-tax return filing with transparent, all-inclusive pricing. Limited-time 60% off with code OFFERITR." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITR_PLANS.map((p, i) => <PlanCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

export function WideCards() {
  return (
    <section className="relative py-6 md:py-10 px-5">
      <div className="max-w-7xl mx-auto grid gap-5 lg:grid-cols-2">
        {WIDE_CARDS.map((c, i) => (
          <Reveal key={c.name} delay={i * 120}>
            <div className="card-hover group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-7 md:p-8 h-full">
              <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-brand-600/20 blur-3xl group-hover:bg-teal-500/20 transition-colors duration-700" />
              <div className="relative flex items-start gap-4">
                <span className="shrink-0 grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-teal-500 text-navy-950 shadow-lg">
                  <Icon name={c.icon} className="w-7 h-7" stroke={2} />
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold leading-tight">{c.heading}</h3>
                  <div className="mt-2 flex items-center gap-2.5">
                    <span className="font-display text-2xl font-extrabold text-teal-300">{c.price}</span>
                    <span className="text-sm text-white/40 line-through">{c.strike}</span>
                    <span className="rounded-md bg-teal/15 px-2 py-0.5 text-xs font-bold text-teal-300">{c.off}</span>
                  </div>
                </div>
              </div>
              <ul className="relative mt-5 grid gap-2">
                {c.bullets.map((b, k) => (
                  <li key={k} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Icon name="check" className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />{b}
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 flex items-center gap-3 flex-wrap">
                <CTA href={wa(buyMsg(c.name, c.heading, c.price))} variant="teal" icon="whatsapp">{c.cta}</CTA>
                <CouponPill tone="light" />
                <a href={wa(`Hi ${BRAND}, tell me more about ${c.name}.`)} target="_blank" rel="noopener"
                   className="text-xs font-semibold text-white/50 hover:text-white transition-colors">Know more →</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
