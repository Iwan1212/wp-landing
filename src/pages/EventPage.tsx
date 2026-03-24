import { useState, useCallback, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight, X, Calendar, MapPin } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { galleryEvents } from "../data/gallery";

export function EventPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = galleryEvents.find((e) => e.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null || !event) return;
    setLightboxIndex((lightboxIndex + 1) % event.photos.length);
  }, [lightboxIndex, event]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null || !event) return;
    setLightboxIndex((lightboxIndex - 1 + event.photos.length) % event.photos.length);
  }, [lightboxIndex, event]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  if (!event) return <Navigate to="/galeria" replace />;

  return (
    <section className="pt-28 pb-20 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-2 text-sm text-foreground/60"
        >
          <Link to="/" className="hover:text-primary transition-colors">
            Strona główna
          </Link>
          <span>/</span>
          <Link to="/galeria" className="hover:text-primary transition-colors">
            Galeria
          </Link>
          <span>/</span>
          <span className="text-foreground/80">{event.name}</span>
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/galeria"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Wszystkie wydarzenia
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 mb-6"
        >
          <Badge variant="teal">WYDARZENIE</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 uppercase"
        >
          {event.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6 text-foreground/50 mb-12"
        >
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {event.date}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {event.location}
          </span>
          <span className="text-foreground/40">
            {event.photos.length} {event.photos.length === 1 ? "zdjęcie" : event.photos.length < 5 ? "zdjęcia" : "zdjęć"}
          </span>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {event.photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * idx, duration: 0.4 }}
              className="cursor-pointer group"
              onClick={() => openLightbox(idx)}
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-foreground/40 text-sm">
              {lightboxIndex + 1} / {event.photos.length}
            </div>

            {/* Prev button */}
            {event.photos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 text-foreground/40 hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={event.photos[lightboxIndex].src}
              alt={event.photos[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            {event.photos.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 text-foreground/40 hover:text-foreground transition-colors"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
