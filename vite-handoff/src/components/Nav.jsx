import React, { useState, useEffect } from "react";
import Icon from "./Icon.jsx";
import { Logo, CTA } from "./ui.jsx";
import { wa, BRAND } from "../config.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["Plans", "#plans"], ["Advisory", "#advisory"], ["Why Us", "#why"], ["Contact", "#contact"]];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/10 py-3" : "py-5"}`}>
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-1">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="relative px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors group">
              {l}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <CTA href={wa(`Hi ${BRAND}, I'd like to file my ITR / get tax help.`)} variant="teal" icon="whatsapp" className="py-2.5">Chat on WhatsApp</CTA>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-white/15 text-white">
          <Icon name={open ? "close" : "menu"} className="w-5 h-5" />
        </button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-5 pt-3 pb-5 flex flex-col gap-1 bg-navy-950/95 backdrop-blur-xl border-t border-white/10">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg text-sm font-semibold text-white/80 hover:bg-white/5">{l}</a>
          ))}
          <CTA href={wa(`Hi ${BRAND}, I'd like to file my ITR / get tax help.`)} variant="teal" icon="whatsapp" className="mt-2 w-full">Chat on WhatsApp</CTA>
        </div>
      </div>
    </header>
  );
}
