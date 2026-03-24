import { Routes, Route } from "react-router-dom";
import { FloatingDisc } from "./components/ui/FloatingDisc";
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
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { GalleryPage } from "./pages/GalleryPage";
import { EventPage } from "./pages/EventPage";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Teams />
      <Achievements />
      <Gallery />
      <Training />
      <Sponsors />
      <Blog />
      <CTA />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <FloatingDisc />
      <div className="min-h-screen relative overflow-clip" style={{ backgroundColor: "var(--background)" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/galeria/:slug" element={<EventPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
