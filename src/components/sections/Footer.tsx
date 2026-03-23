import { motion } from "motion/react";
import { Share2, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-20 pb-8 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "rgba(3, 3, 64, 0.7)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-accent">WP.</span>
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Wrocław Południe to klub ultimate frisbee łączący pasjonatów
              sportu. Trenujemy regularnie i bierzemy udział w turniejach na
              całej Polsce.
            </p>
          </motion.div>

          {/* Column 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-foreground font-bold uppercase tracking-wider mb-6">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {["O nas", "Drużyny", "Treningi", "Galeria", "Kontakt"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 3 - Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-foreground font-bold uppercase tracking-wider mb-6">
              Kontakt
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact@wroclawpoluidnie.pl"
                  className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                >
                  contact@wp.pl
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                <motion.a
                  href="#facebook"
                  whileHover={{ scale: 1.2 }}
                  className="text-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  <Share2 className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#instagram"
                  whileHover={{ scale: 1.2 }}
                  className="text-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  <Share2 className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-foreground/60 text-xs uppercase tracking-wider">
            © {currentYear} Wrocław Południe. Wszystkie prawa zastrzeżone.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
