import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Plug, Palette, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web application development using modern frameworks. From React frontends to Node.js backends and PostgreSQL databases — built to scale, tested to ship.",
    features: ["React / Next.js frontends", "Node.js / Express APIs", "Database design & optimization", "Performance & SEO tuning"],
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.12)",
    borderHover: "hover:border-blue-500/40",
    iconBg: "from-blue-500/20 to-indigo-500/20",
    accent: "text-blue-400",
    number: "01",
  },
  {
    icon: Plug,
    title: "API Design & Integration",
    description:
      "Design of robust, well-documented REST and GraphQL APIs. Third-party integration with payment providers, CRMs, analytics, authentication, and communication services.",
    features: ["OpenAPI specification", "Stripe & payment APIs", "OAuth & SSO flows", "Webhook systems"],
    color: "from-green-500 to-emerald-600",
    glow: "rgba(16,185,129,0.12)",
    borderHover: "hover:border-green-500/40",
    iconBg: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-400",
    number: "02",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Engineering",
    description:
      "Pixel-perfect, accessible, and responsive user interfaces. Component library creation, design system implementation, and performance-first frontend engineering.",
    features: ["Design systems & tokens", "Component libraries", "Responsive & mobile-first", "WCAG accessibility"],
    color: "from-purple-500 to-violet-600",
    glow: "rgba(139,92,246,0.12)",
    borderHover: "hover:border-purple-500/40",
    iconBg: "from-purple-500/20 to-violet-500/20",
    accent: "text-purple-400",
    number: "03",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure setup and deployment pipelines on AWS, GCP, and Vercel. Containerization with Docker, CI/CD automation, monitoring, and performance optimization.",
    features: ["AWS / GCP / Vercel setup", "Docker & Kubernetes", "CI/CD pipelines (GitHub Actions)", "Observability & monitoring"],
    color: "from-orange-500 to-amber-600",
    glow: "rgba(245,158,11,0.12)",
    borderHover: "hover:border-orange-500/40",
    iconBg: "from-orange-500/20 to-amber-500/20",
    accent: "text-orange-400",
    number: "04",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" data-testid="section-services" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-2 block">// what_i_do</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Services</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
          />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From ideation to deployment — I deliver complete solutions that drive real business results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                data-testid={`card-service-${i}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6 }}
                className={`group relative p-7 rounded-2xl border border-border bg-card ${service.borderHover} transition-all duration-400 overflow-hidden`}
              >
                {/* Radial glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 20% 30%, ${service.glow}, transparent 65%)` }}
                />
                {/* Top border accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Service number */}
                  <div className="absolute top-0 right-0 text-5xl font-black text-border/40 font-mono select-none">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${service.iconBg} border border-white/5 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${service.accent}`} />
                  </div>

                  <h3 className={`text-xl font-bold mb-3 text-foreground group-hover:${service.accent} transition-colors`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${service.accent}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.accent} opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1`}
                  >
                    Let's build together <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
