import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Teams } from "./components/sections/Teams";
import { Achievements } from "./components/sections/Achievements";
import { Gallery } from "./components/sections/Gallery";
import { Training } from "./components/sections/Training";
import { Sponsors } from "./components/sections/Sponsors";
import { Blog } from "./components/sections/Blog";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <Navbar />
      <Hero />
      <About />
      <Teams />
      <Achievements />
      <Gallery />
      <Training />
      <Sponsors />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
