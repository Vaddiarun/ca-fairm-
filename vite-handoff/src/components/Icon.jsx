import React from "react";

export default function Icon({ name, className = "w-5 h-5", stroke = 1.8 }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    check: <polyline points="20 6 9 17 4 12" {...p} />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" {...p} />,
    video: <g {...p}><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3" /></g>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" {...p} />,
    clock: <g {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></g>,
    star: <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2Z" {...p} />,
    headset: <g {...p}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M20 15a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2v1ZM4 15a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2v1Z" /><path d="M18 17a4 4 0 0 1-4 4h-2" /></g>,
    chart: <g {...p}><path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="6" /><rect x="13" y="7" width="3" height="10" /></g>,
    calc: <g {...p}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 10h2m4 0h2M8 14h2m4 0h2M8 18h2m4 0h2" /></g>,
    doc: <g {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></g>,
    sparkle: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" {...p} />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" {...p} />,
    arrow: <g {...p}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></g>,
    copy: <g {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></g>,
    whatsapp: <path d="M12.05 2a9.9 9.9 0 0 0-8.4 15.15L2 22l4.95-1.3A9.9 9.9 0 1 0 12.05 2Zm5.8 14.05c-.25.7-1.45 1.34-2 1.4-.5.07-1.16.1-1.87-.12-.43-.13-.99-.32-1.7-.63a10.5 10.5 0 0 1-4.06-3.6c-.3-.4-1.1-1.47-1.1-2.8 0-1.33.7-1.98.94-2.25.25-.27.55-.34.73-.34l.53.01c.17 0 .4-.06.62.48.25.6.83 2.05.9 2.2.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.17-.3.38-.43.5-.14.15-.29.3-.12.6.16.3.73 1.2 1.57 1.95 1.08.96 1.98 1.26 2.28 1.4.3.16.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.13.07.75-.18 1.45Z" fill="currentColor" />,
    menu: <g {...p}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></g>,
    close: <g {...p}><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></g>,
    mail: <g {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></g>,
    pin: <g {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></g>,
    seal: <g {...p}><path d="m9 12 2 2 4-4" /><path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z" /></g>,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>
  );
}
