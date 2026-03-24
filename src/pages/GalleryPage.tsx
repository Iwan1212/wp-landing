import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, MapPin, Images } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { BlurText } from "../components/ui/BlurText";
import { galleryEvents } from "../data/gallery";

export function GalleryPage() {
  return (
    <section className="pt-28 pb-20 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Strona główna
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 mb-8"
        >
          <Badge variant="orange">GALERIA</Badge>
        </motion.div>

        <BlurText
          text="WYDARZENIA"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          delay={0.1}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-foreground/60 text-lg mb-16 max-w-2xl"
        >
          Przejrzyj zdjęcia z turniejów, treningów i życia naszej drużyny.
          Kliknij w wydarzenie, aby zobaczyć wszystkie zdjęcia.
        </motion.p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryEvents.map((event, idx) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
            >
              <Link to={`/galeria/${event.slug}`} className="block group">
                <div className="rounded-2xl overflow-hidden liquid-glass">
                  {/* Cover image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={event.cover}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    {/* Photo count badge */}
                    <div className="absolute top-4 right-4 bg-background/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 text-xs text-foreground/80">
                      <Images className="w-3.5 h-3.5" />
                      {event.photos.length}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
