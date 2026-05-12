import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Asad Rasool Nagra",
    role: "Inchagre IT",
    company: "National Book Foundation",
    text: "Gulfam delivered our entire platform from scratch in 3 months — clean architecture, great documentation, and zero downtime since launch. The best engineering hire we've made. I'd work with him again without hesitation.",
    initials: "ARN",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-500/10",
    stars: 5,
  },
  {
    name: "Adnan Rajab",
    role: "Developer",
    company: "PakSmarHub",
    text: "We went from a broken MVP to a production-ready app that handled our Product Hunt launch (2,000+ users in 24 hours) without a single incident. Alex's backend work was genuinely exceptional.",
    initials: "AR",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    stars: 5,
  },
  {
    name: "Hajra Nawazish",
    role: "Ui/UX Designer",
    company: "Freelancer",
    text: "What stood out was Gulfam's ability to translate complex requirements into elegant solutions. The dashboard he built became our most-loved internal tool. He brings engineering discipline and product intuition in rare combination.",
    initials: "HN",
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-500/10",
    stars: 5,
  },
  {
    name: "Dua Batool",
    role: "Developer",
    company: "Freelancer",
    text: "Gulfam refactored our API layer and cut p99 latency by 60%. The code he wrote is so clean it's almost intimidating. He communicated clearly throughout and delivered ahead of schedule. 10/10.",
    initials: "DB",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      data-testid="section-testimonials"
      className="py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-2 block">// kind_words</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Testimonials</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
          />
          <p className="text-muted-foreground mt-4">What people say about working with me.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            {/* Animated bg gradient */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${t.bg} opacity-30`}
              />
            </AnimatePresence>

            <div className="relative z-10 p-8 md:p-12">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-5" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8 italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-base shadow-lg flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-base">{t.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.role} · <span className="text-primary font-medium">{t.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2 items-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  data-testid={`button-testimonial-dot-${i}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                    i === current ? "w-8 bg-primary" : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                data-testid="button-testimonial-prev"
                onClick={prev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="p-2.5 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                data-testid="button-testimonial-next"
                onClick={next}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="p-2.5 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mini testimonial badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.08 }}
              whileHover={{ scale: 1.04 }}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`flex items-center gap-2 p-2.5 rounded-xl border transition-all cursor-pointer text-left ${
                i === current ? "border-primary/50 bg-primary/10" : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground truncate">{t.name}</div>
                <div className="text-xs text-muted-foreground truncate">{t.company}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
