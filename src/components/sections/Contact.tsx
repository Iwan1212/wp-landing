import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle } from "lucide-react";
import { Badge } from "../ui/Badge";
import { BlurText } from "../ui/BlurText";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Badge variant="teal">KONTAKT</Badge>
        </motion.div>

        <BlurText
          text="NAPISZ DO NAS"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          delay={0.1}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg mb-12 max-w-2xl"
        >
          Masz pytania o treningi, drużynę lub chcesz do nas dołączyć?
          Wypełnij formularz, a odezwiemy się jak najszybciej.
        </motion.p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="liquid-glass rounded-2xl p-8 md:p-10 space-y-6"
            >
              {/* Netlify hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  <input name="bot-field" />
                </label>
              </p>

              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="jan@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                  Temat
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                >
                  <option value="">Wybierz temat...</option>
                  <option value="trening">Chcę przyjść na trening</option>
                  <option value="dolaczenie">Chcę dołączyć do drużyny</option>
                  <option value="wspolpraca">Współpraca / Sponsoring</option>
                  <option value="inne">Inne pytanie</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  placeholder="Twoja wiadomość..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--background)",
                }}
              >
                <Send className="w-4 h-4" />
                Wyślij wiadomość
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="liquid-glass rounded-2xl p-12 md:p-16 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: "var(--primary)" }} />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 uppercase">
                Wiadomość wysłana!
              </h3>
              <p className="text-foreground/60 text-lg max-w-md mx-auto">
                Dziękujemy za kontakt. Odpowiemy tak szybko jak to możliwe.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
