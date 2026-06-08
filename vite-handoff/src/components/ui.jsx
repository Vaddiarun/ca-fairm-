import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon.jsx";

/* ---- scroll reveal (with failsafe so content never sticks invisible) ---- */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => { el.style.transitionDelay = delay + "ms"; el.classList.add("in"); };
    if (typeof IntersectionObserver === "undefined") { show(); return; }
    if (el.getBoundingClientRect().top < window.innerHeight) show();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { show(); io.unobserve(el); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    const failsafe = setTimeout(show, 1500);
    return () => { io.disconnect(); clearTimeout(failsafe); };
  }, [delay]);
  return <Tag ref={ref} className={"reveal " + className}>{children}</Tag>;
}

/* ---- count-up ---- */
export function Counter({ to, suffix = "", prefix = "", duration = 1600, className = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(eased * to));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref} className={className}>{prefix}{val.toLocaleString("en-IN")}{suffix}</span>;
}

/* ---- coupon pill ---- */
export function CouponPill({ tone = "dark" }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText("OFFERITR").catch(() => {});
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  };
  const base = tone === "light"
    ? "border-white/30 text-white bg-white/10"
    : "border-teal/40 text-teal-300 bg-teal/10";
  return (
    <button onClick={copy} className={`btn-press group inline-flex items-center gap-2 rounded-full border border-dashed ${base} px-3 py-1.5 text-xs font-semibold tracking-wide`}>
      <span className="opacity-70">Code</span>
      <span className="font-display">OFFERITR</span>
      <Icon name={copied ? "check" : "copy"} className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
      <span className="sr-only">copy coupon</span>
      {copied && <span className="text-[10px] text-teal-300">copied!</span>}
    </button>
  );
}

/* ---- magnetic CTA ---- */
export function CTA({ href, children, variant = "primary", className = "", icon = "arrow", onClick }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  const styles = {
    primary: "bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-700/30 hover:shadow-brand-600/50",
    teal: "bg-gradient-to-r from-teal-500 to-teal-400 text-navy-950 shadow-lg shadow-teal/30 hover:shadow-teal/50",
    gold: "bg-gradient-to-r from-gold-400 to-gold-300 text-navy-950 shadow-lg shadow-gold/30",
    ghost: "border border-white/20 text-white hover:bg-white/10 backdrop-blur",
  };
  return (
    <a
      ref={ref} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener" onClick={onClick}
      onMouseMove={onMove} onMouseLeave={reset}
      className={`btn-press inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${styles[variant]} ${className}`}>
      {children}
      {icon && <Icon name={icon} className="w-4 h-4" />}
    </a>
  );
}

/* ---- wordmark ---- */
export function Logo({ className = "" }) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 group ${className}`}>
      <img
        src="/jsk-logo.svg"
        alt="JSK Associates logo"
        className="w-11 h-11 rounded-xl shadow-lg shadow-brand-700/40 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-tight">
        <span className="block font-display font-extrabold tracking-tight text-white text-[15px]">JSK Associates</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-400">Consulting Pvt</span>
      </span>
    </a>
  );
}

export function SectionHead({ kicker, title, sub, light }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-400">
          <Icon name="sparkle" className="w-3.5 h-3.5" />{kicker}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className={`mt-5 font-display text-3xl md:text-5xl font-extrabold tracking-tight ${light ? "text-navy-950" : "text-white"}`}>{title}</h2>
      </Reveal>
      {sub && <Reveal delay={140}><p className={`mt-4 text-base md:text-lg ${light ? "text-navy-800/70" : "text-white/60"}`}>{sub}</p></Reveal>}
    </div>
  );
}

export const ACCENTS = {
  brand: { ring: "hover:border-brand-500/60", glow: "from-brand-600/20", chip: "text-brand-400", dot: "bg-brand-500" },
  teal:  { ring: "hover:border-teal-400/60", glow: "from-teal-500/20", chip: "text-teal-300", dot: "bg-teal-400" },
  gold:  { ring: "hover:border-gold-300/70", glow: "from-gold-400/25", chip: "text-gold-300", dot: "bg-gold-400" },
};
