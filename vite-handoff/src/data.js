export const ITR_PLANS = [
  {
    name: "Basic", tag: null, accent: "brand",
    title: "Tax filing + Computation Explanation",
    price: "₹2,299", strike: "₹5,748", off: "60% OFF",
    features: ["Direct Interaction with Expert", "Tax calculation walkthrough", "Filing done in 24 hours"],
    incomeTitle: "For Income Sources:",
    income: ["Salary income < ₹50 L", "Interest Income (Savings, Term deposits)"],
    excluded: "Excluded: Capital Gains, FnO, Business Income, Crypto",
  },
  {
    name: "Premium", tag: "Popular", accent: "gold",
    title: "Tax Filing with Interactive Video Call",
    price: "₹3,499", strike: "₹8,748", off: "60% OFF",
    features: ["Video Call with Expert *", "Tax calculation walkthrough", "Graphical Tax Reports"],
    incomeTitle: "For Income Sources:",
    income: ["Salary & Interest Income – any range", "Capital gains (Stocks, MF, FnO, Intraday, Crypto, Property)", "Freelance, Online gaming"],
    excluded: null,
  },
  {
    name: "Elite", tag: null, accent: "teal",
    title: "Tax Filing + Tax Planning for Next Year",
    price: "₹5,999", strike: "₹14,998", off: "60% OFF",
    features: ["Tax filing in direct video call *", "Tax calculation walkthrough", "Next year tax planning in video call"],
    incomeTitle: "For Income Sources:",
    income: ["All income sources covered", "Includes NRI, ESOPs, RSUs, Foreign income, Business income"],
    excluded: null,
  },
  {
    name: "Luxe", tag: "Best Value", accent: "brand",
    title: "Tax Filing + Advisory Assistance All Year-round",
    price: "₹21,999", strike: "₹54,998", off: "60% OFF",
    features: ["Tax calculation walkthrough", "Next year tax planning – 6 advisory sessions", "Dedicated priority support"],
    incomeTitle: "For Income Sources:",
    income: ["All income sources covered", "Includes NRI, ESOPs, RSUs, Foreign income, Business income"],
    excluded: null,
  },
];

export const WIDE_CARDS = [
  {
    name: "Updated Return (ITR-U)", icon: "doc",
    heading: "File Your Updated Return (ITR-U)",
    price: "₹7,499", strike: "₹18,749", off: "-60%",
    bullets: [
      "Dedicated CA to file your ITR-U accurately",
      "End-to-end handling of corrections, disclosures & compliance",
      "Support via chat, call & video consultation",
      "Ideal for missed filings or correcting past returns",
      "Includes guidance on tax dues, interest & penalties",
    ],
    cta: "Buy Now",
  },
  {
    name: "Expert Tax Call", icon: "headset",
    heading: "Expert Tax Help, One Call Away",
    price: "₹3,749", strike: "₹9,373", off: "-60%",
    bullets: [
      "Advisory for salaried individuals, freelancers & financial traders",
      "45-minute call session with a JSK tax expert",
      "Get answers to all your tax-related queries",
      "Dedicated relationship manager during service fulfilment",
    ],
    cta: "Book Now",
  },
];

export const ADVISORY = [
  {
    name: "Advance Tax Planning", icon: "chart",
    sub: "Estimate & manage advance tax payments",
    price: "₹3,499", strike: "₹8,748",
    features: ["Avoid interest under 234B / 234C with proactive planning", "Expert review of your tax calculation", "Guidance on quarterly payment schedules", "Calculation of advance taxes for one quarter"],
  },
  {
    name: "Ask Our Expert", icon: "sparkle",
    sub: "Personalised tax advice from experts",
    price: "₹3,749", strike: "₹9,373",
    features: ["Get answers to your tax-related queries", "Personalised tax planning", "One-on-one consultation with a senior tax expert", "Dedicated relationship manager"],
  },
  {
    name: "Notice Management", icon: "shield",
    sub: "End-to-end help for income tax notices",
    price: "₹4,499", strike: "₹11,248",
    features: ["Covers notices under Sections 139(9), 143(1)", "Notice response — drafted and filed", "Expert representation & follow-up"],
  },
  {
    name: "HUF Registration", icon: "seal",
    sub: "Complete HUF setup & registration",
    price: "₹6,499", strike: "₹16,248",
    features: ["HUF Deed & Draft filing", "PAN Application", "Stamp creation"],
  },
];

export const HERO_BADGES = [
  { icon: "shield", t: "No Notice Stress" },
  { icon: "video", t: "Live Video Sessions" },
  { icon: "star", t: "Top-Rated Tax Experts" },
  { icon: "headset", t: "24×7 Expert Support" },
];

export const WHY = [
  { icon: "seal", t: "Qualified professionals", d: "Returns reviewed and filed by experienced CAs and senior tax experts — not bots." },
  { icon: "clock", t: "Filing in 24 hours", d: "Share your documents and relax. Most returns are computed and filed within a day." },
  { icon: "video", t: "Live video walkthroughs", d: "Understand every number with an interactive video call and graphical tax reports." },
  { icon: "shield", t: "End-to-end notice cover", d: "From 139(9) to 143(1) — we draft, file and represent so notices never stress you." },
  { icon: "chart", t: "Year-round planning", d: "Advance-tax and next-year planning that legally optimises what you pay." },
  { icon: "whatsapp", t: "Everything on WhatsApp", d: "No app, no logins. Start, share docs and track your filing entirely on chat." },
];
