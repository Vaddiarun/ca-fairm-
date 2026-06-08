# JSK Associates Consulting Pvt — Website

A high-animation, fully responsive tax & filing services landing page built with **React + Vite + Tailwind CSS**. Every call-to-action opens WhatsApp to **+91 90301 58713** with a pre-filled message naming the chosen plan, price and the `OFFERITR` coupon.

## Quick start

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> Requires Node 18+.

## Project structure

```
index.html                 # Vite entry, loads Google Fonts (Sora + Plus Jakarta Sans)
tailwind.config.js         # brand colors (navy/brand/teal/gold) + font families
postcss.config.js
vite.config.js
src/
  main.jsx                 # React root
  index.css                # Tailwind layers + all custom keyframe animations
  config.js                # WA_NUMBER, BRAND, wa()/buyMsg() helpers  ← edit your number/brand here
  data.js                  # ALL plan/advisory/why-us content  ← edit pricing & copy here
  App.jsx                  # page composition
  components/
    Icon.jsx               # inline SVG icon set
    ui.jsx                 # Reveal, Counter, CouponPill, CTA (magnetic), Logo, SectionHead
    Nav.jsx                # sticky nav + mobile drawer
    Hero.jsx               # animated mesh hero, callback form, stat counters, Marquee
    Plans.jsx              # 4 ITR plan cards + ITR-U / Expert wide cards
    Advisory.jsx           # advisory services grid
    WhyUs.jsx              # why-choose-us grid
    Contact.jsx            # CTA band + Footer + floating WhatsApp button
```

## How to customise

| Want to change… | Edit… |
|---|---|
| WhatsApp number / brand name | `src/config.js` |
| Plan names, prices, features, coupon | `src/data.js` |
| Colors & fonts | `tailwind.config.js` |
| Animations | `src/index.css` (keyframes) and the `<Reveal>` component in `src/components/ui.jsx` |

## Notes
- The `Reveal` scroll-animation component has a 1.5s failsafe so content can never get stuck invisible if the IntersectionObserver doesn't fire.
- Prefers-reduced-motion is respected (animations disabled).
- All WhatsApp links use `https://wa.me/919030158713?text=...`.
