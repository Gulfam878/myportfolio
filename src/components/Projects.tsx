
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const PROJECTS = [
  {
    title: "Ecommerce Website ",
    description: "A full-featured e-commerce platform with real-time inventory, payment processing via Stripe, and an AI-driven product recommendation engine. Built for scale with microservices architecture. ",
    longDesc: "ShopSphere handles 50K+ daily active users with sub-100ms response times. The AI recommendation engine uses collaborative filtering and increased average cart value by 23%. Microservices are deployed on AWS ECS with auto-scaling. ",
    tags: ["React.js ", "JavaScript ", "MongoDB ", "Node.js ", "Express.js "],
    live: "https://gulfamashraf-folio.netlify.app/ ",
    github: "https://github.com ",
    featured: true,
    gradient: "from-blue-500/20 to-purple-500/20 ",
    borderGlow: "rgba(99,102,241,0.3) ",
    emoji: "🛍️ ",
  },
  {
    title: "National Book Foundation's website ",
    description: "A modern, responsive website for the National Book Foundation with a focus on user experience and accessibility. Features include a blog, event calendar, and resource library. ",
    longDesc: "The website was designed to showcase the foundation's mission and programs while providing an intuitive interface for users. Built with a focus on performance and SEO optimization. ",
    tags: ["Next.js ", "JavaScript ", "Tailwind ", "Node.js ", "Express.js ", "MongoDB ", "Framer Motion "],
    live: "https://frontend-six-beige-75.vercel.app/about ",
    github: "https://github.com ",
    featured: true,
    gradient: "from-green-500/20 to-teal-500/20 ",
    borderGlow: "rgba(16,185,129,0.3) ",
    emoji: "💬 ",
  },
  {
    title: "Author Portal (NBF) ",
    description: "An AI content generation dashboard integrating OpenAI, Anthropic, and Google Gemini APIs. Supports bulk content generation, brand voice training, and team collaboration. ",
    longDesc: "Luminary AI manages API rate limits across providers with a smart queuing system. The brand voice training uses fine-tuned embeddings to match output style. Processing 2M+ tokens/day across 500+ active teams. ",
    tags: ["Next.js ", "JavaScript ", "Tailwind ", "Node.js ", "Express.js ", "MongoDB ", "Framer Motion "],
    live: "https://frontend-six-beige-75.vercel.app/Publish ",
    github: "https://github.com ",
    featured: true,
    gradient: "from-orange-500/20 to-red-500/20 ",
    borderGlow: "rgba(245,158,11,0.3) ",
    emoji: "✨ ",
  },
  {
    title: "Metro Bus Tracking System (Fyp Student Project) ",
    description: "A project management SaaS with Kanban boards, Gantt charts, time tracking, and team analytics. Multi-tenant architecture with role-based access control and white-label support. ",
    longDesc: "TaskFlow serves 200+ companies. The multi-tenant database uses row-level security in PostgreSQL. Custom Gantt chart implementation handles 10,000+ tasks without UI lag via virtualized rendering. ",
    tags: ["Next.js ", "Prisma ", "PostgreSQL ", "TypeScript ", "GraphQL "],
    live: "https://taskflow.demo ",
    github: "https://github.com ",
    featured: false,
    gradient: "from-pink-500/20 to-rose-500/20 ",
    borderGlow: "rgba(236,72,153,0.3) ",
    emoji: "📋 ",
  },
  {
    title: "Live Books life cycle management system ",
    description: "A production-grade REST API gateway with rate limiting, authentication, request routing, analytics, and a self-service developer portal. Handles 5M+ requests per day. ",
    longDesc: "Built for a SaaS company with 300+ API partners. The gateway uses Redis for distributed rate limiting with sliding window algorithm. Real-time analytics are streamed via Server-Sent Events to the developer portal. ",
    tags: ["Node.js ", "Express ", "Next.js ", "Express.js ", "MongoDB ", "Socket.io "],
    live: "https://frontend-six-beige-75.vercel.app/books ",
    github: "https://github.com ",
    featured: false,
    gradient: "from-cyan-500/20 to-blue-500/20 ",
    borderGlow: "rgba(6,182,212,0.3) ",
    emoji: "🔗 ",
  },
  // {
  //   title: "Huzaifa Mart (POS System) ",
  //   description: "A headless CMS built for developers with a flexible content modeling system, rich text editor, asset management, webhooks, and auto-generated REST and GraphQL APIs. ",
  //   longDesc: "ContentCMS auto-generates strongly typed SDKs from the content schema. The rich text editor handles collaborative editing via OT (Operational Transformation). Used by 3 agencies managing 40+ client sites. ",
  //   tags: ["Next.js ", "Node.js ", "PostgreSQL ", "TypeScript ", "Prisma "],
  //   live: "https://contentcms.demo ",
  //   github: "https://github.com ",
  //   featured: false,
  //   gradient: "from-violet-500/20 to-purple-500/20 ",
  //   borderGlow: "rgba(139,92,246,0.3) ",
  //   emoji: "📝 ",
  // },
];

function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        initial={{ rotateY: -100, opacity: 0, scale: 0.85 }}
        animate={{ rotateY: 0, opacity: 1, scale: 1 }}
        exit={{ rotateY: 100, opacity: 0, scale: 0.85 }}
        transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.9 }}
        style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-border bg-card p-7 shadow-2xl relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-l from-black/30 to-transparent pointer-events-none"
        />
        
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="relative z-10">
          <div className="text-3xl mb-3">{project.emoji}</div>
          <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.longDesc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary font-mono border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              <Github className="w-4 h-4" /> Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null);
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="projects" data-testid="section-projects" className="py-28 px-4 relative overflow-hidden">
      {/* Ambient background blob with subtle floating animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary mb-2 block">// my_projects</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
          />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real-world projects I've designed, built, and shipped from scratch. Click any card to learn more.
          </p>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <StaggerItem key={project.title}>
              <motion.div
                data-testid={`card-project-${i}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02, rotateX: -2, rotateY: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                onClick={() => setSelected(project)}
                className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 cursor-pointer h-full"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                {/* Animated gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                {/* Glow border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 30px ${project.borderGlow}` }}
                />

                {project.featured && (
                  <motion.div
                    className="absolute top-3 right-3 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-mono">
                      <Star className="w-3 h-3 fill-current" /> Featured
                    </span>
                  </motion.div>
                )}

                {/* Screenshot Preview Section */}
                <div className="relative w-full aspect-video bg-muted overflow-hidden">
                  <a 
                    href={project.live.trim()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => {
                      e.stopPropagation();
                      // if the live link is the real NBF site, open preview modal instead of navigating
                      const url = project.live.trim();
                      if (url.includes("nbf.org.pk")) {
                        e.preventDefault();
                        setPreview({ url, title: project.title });
                      }
                    }}
                  >
                    <img
                      src={`https://api.microlink.io/?url=${encodeURIComponent(project.live.trim())}&screenshot=true&meta=false&embed=screenshot.url`}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </a>
                </div>

                <div className="relative z-10 flex flex-col flex-1 p-6">
                  <motion.div
                    className="text-2xl mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.emoji}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-mono px-2 py-0.5 bg-muted/60 border-border"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs font-mono px-2 py-0.5 bg-muted/60 border-border">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <a
                      data-testid={`link-project-live-${i}`}
                      href={project.live.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        const url = project.live.trim();
                        if (url.includes("nbf.org.pk")) {
                          e.preventDefault();
                          setPreview({ url, title: project.title });
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                      data-testid={`link-project-github-${i}`}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[210] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl h-[70vh] bg-card rounded-2xl border border-border overflow-hidden relative"
            >
              <div className="absolute top-3 right-3 flex gap-2 z-20">
                <a
                  href={preview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm font-semibold"
                >
                  Open Site
                </a>
                <button
                  onClick={() => setPreview(null)}
                  className="px-3 py-1 rounded-md bg-muted text-sm"
                >
                  Close
                </button>
              </div>
              <iframe src={preview.url} title={preview.title} className="w-full h-full border-0" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// export default function Projects() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });
//   const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null);
//   const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);

//   return (
    
//     <section id="projects" data-testid="section-projects" className="py-28 px-4 relative overflow-hidden">
//       {/* Ambient background blob with subtle floating animation */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
//         animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, y: 60, scale: 0.98 }}
//         animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//         className="max-w-6xl mx-auto relative"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm font-mono text-primary mb-2 block">// my_projects</span>
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: 64 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
//           />
//           <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
//             Real-world projects I've designed, built, and shipped from scratch. Click any card to learn more.
//           </p>
//         </motion.div>

//         <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {PROJECTS.map((project, i) => (
//             <StaggerItem key={project.title}>
//               <motion.div
//                 data-testid={`card-project-${i}`}
//                 // Entrance animation
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 // Hover & Tap interactions
//                 whileHover={{ y: -8, scale: 1.02, rotateX: -2, rotateY: 2 }}
//                 whileTap={{ scale: 0.98 }}
//                 // Smooth spring transitions for all states
//                 transition={{ type: "spring", stiffness: 350, damping: 20 }}
//                 onClick={() => setSelected(project)}
//                 className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 cursor-pointer h-full"
//                 style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
//               >
//                 {/* Animated gradient on hover */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//                 />
//                 {/* Glow border on hover */}
//                 <div
//                   className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   style={{ boxShadow: `inset 0 0 30px ${project.borderGlow}` }}
//                 />

//                 {project.featured && (
//                   <motion.div
//                     className="absolute top-3 right-3 z-10"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.4 + i * 0.05 }}
//                   >
//                     <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-mono">
//                       <Star className="w-3 h-3 fill-current" /> Featured
//                     </span>
//                   </motion.div>
//                 )}

//                 <div className="relative z-10 flex flex-col flex-1 p-6">
//                   <motion.div
//                     className="text-2xl mb-3"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     {project.emoji}
//                   </motion.div>
//                   <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-1.5 mb-5">
//                     {project.tags.slice(0, 4).map((tag) => (
//                       <Badge
//                         key={tag}
//                         variant="secondary"
//                         className="text-xs font-mono px-2 py-0.5 bg-muted/60 border-border"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                     {project.tags.length > 4 && (
//                       <Badge variant="secondary" className="text-xs font-mono px-2 py-0.5 bg-muted/60 border-border">
//                         +{project.tags.length - 4}
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="flex gap-4">
//                     <a
//                       data-testid={`link-project-live-${i}`}
//                       href={project.live.trim()}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         // if the live link is the real NBF site, open preview modal instead of navigating
//                         const url = project.live.trim();
//                         if (url.includes("nbf.org.pk")) {
//                           e.preventDefault();
//                           setPreview({ url, title: project.title });
//                         }
//                       }}
//                       className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
//                     >
//                       <ExternalLink className="w-4 h-4" /> Live Demo
//                     </a>
//                     <a
//                       data-testid={`link-project-github-${i}`}
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       onClick={(e) => e.stopPropagation()}
//                       className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors"
//                     >
//                       <Github className="w-4 h-4" /> Source Code
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </StaggerItem>
//           ))}
//         </StaggerContainer>
//       </motion.div>

//       <AnimatePresence>
//         {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
//         {preview && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setPreview(null)}
//             className="fixed inset-0 z-[210] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="w-full max-w-4xl h-[70vh] bg-card rounded-2xl border border-border overflow-hidden relative"
//             >
//               <div className="absolute top-3 right-3 flex gap-2 z-20">
//                 <a
//                   href={preview.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm font-semibold"
//                 >
//                   Open Site
//                 </a>
//                 <button
//                   onClick={() => setPreview(null)}
//                   className="px-3 py-1 rounded-md bg-muted text-sm"
//                 >
//                   Close
//                 </button>
//               </div>
//               <iframe src={preview.url} title={preview.title} className="w-full h-full border-0" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }