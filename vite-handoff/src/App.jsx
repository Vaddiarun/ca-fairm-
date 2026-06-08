import React from "react";
import Nav from "./components/Nav.jsx";
import Hero, { Marquee } from "./components/Hero.jsx";
import Plans, { WideCards } from "./components/Plans.jsx";
import Advisory from "./components/Advisory.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Contact, { Footer, FloatWA } from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Plans />
        <WideCards />
        <Advisory />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatWA />
    </div>
  );
}
