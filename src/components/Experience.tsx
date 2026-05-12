// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Briefcase, GraduationCap, MapPin, Calendar, TrendingUp } from "lucide-react";

// const WORK = [
//   {
//     title: "Senior Full Stack Engineer",
//     company: "Stripe",
//     companyColor: "text-indigo-400",
//     dotColor: "bg-indigo-500",
//     ringColor: "border-indigo-500",
//     location: "San Francisco, CA (Remote)",
//     period: "2022 — Present",
//     current: true,
//     description:
//       "Led development of merchant-facing dashboard features serving 4M+ businesses. Architected a real-time notification system processing 100M events/day. Mentored 3 junior engineers and defined frontend coding standards across the team.",
//     tags: ["React", "TypeScript", "Go", "PostgreSQL", "Kafka"],
//     achievement: "+40% dashboard performance",
//   },
//   {
//     title: "Full Stack Developer",
//     company: "Vercel",
//     companyColor: "text-blue-400",
//     dotColor: "bg-blue-500",
//     ringColor: "border-blue-500",
//     location: "Remote",
//     period: "2020 — 2022",
//     current: false,
//     description:
//       "Built internal tooling and customer-facing features for the deployment platform. Improved build pipeline performance by 40% through parallelization and caching strategies. Contributed to open-source Next.js ecosystem.",
//     tags: ["Next.js", "Node.js", "Redis", "Docker", "AWS"],
//     achievement: "40% faster build pipelines",
//   },
//   {
//     title: "Frontend Engineer",
//     company: "Shopify",
//     companyColor: "text-green-400",
//     dotColor: "bg-green-500",
//     ringColor: "border-green-500",
//     location: "Toronto, ON (Hybrid)",
//     period: "2018 — 2020",
//     current: false,
//     description:
//       "Developed Polaris component library features used by 100K+ merchants globally. Improved checkout conversion rates by 12% through A/B testing and performance optimization. Built accessibility-first UI components.",
//     tags: ["React", "GraphQL", "Ruby on Rails", "Tailwind"],
//     achievement: "+12% checkout conversion",
//   },
// ];

// const EDUCATION = [
//   {
//     title: "M.S. Computer Science",
//     institution: "Stanford University",
//     period: "2016 — 2018",
//     description: "Specialization in Distributed Systems and Human-Computer Interaction. GPA: 3.9/4.0.",
//     color: "text-purple-400",
//     dotColor: "bg-purple-500",
//     ringColor: "border-purple-500",
//     icon: "🎓",
//   },
//   {
//     title: "B.S. Computer Science",
//     institution: "UC Berkeley",
//     period: "2012 — 2016",
//     description: "Dean's List. Senior thesis on real-time collaborative editing algorithms. GPA: 3.8/4.0.",
//     color: "text-yellow-400",
//     dotColor: "bg-yellow-500",
//     ringColor: "border-yellow-500",
//     icon: "🏛️",
//   },
// ];

// function TimelineDot({
//   dotColor,
//   ringColor,
//   current,
// }: {
//   dotColor: string;
//   ringColor: string;
//   current?: boolean;
// }) {
//   return (
//     <div
//       className={`absolute left-0 top-2 w-9 h-9 rounded-full border-2 ${ringColor} bg-background flex items-center justify-center z-10 shadow-lg`}
//     >
//       <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
//       {current && (
//         <span
//           className={`absolute inset-0 rounded-full ${dotColor} opacity-30 animate-ping`}
//         />
//       )}
//     </div>
//   );
// }

// export default function Experience() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="experience" data-testid="section-experience" className="py-28 px-4 relative overflow-hidden">
//       <div className="absolute inset-0 bg-card/30" />
//       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
//       <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
//       <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-5xl mx-auto relative">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm font-mono text-primary mb-2 block">// career_path</span>
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience & Education</h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: 64 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
//           />
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           {/* Work */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="flex items-center gap-2 mb-8"
//             >
//               <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
//                 <Briefcase className="w-5 h-5 text-primary" />
//               </div>
//               <h3 className="text-xl font-semibold">Work Experience</h3>
//             </motion.div>

//             <div className="relative">
//               {/* Timeline line */}
//               <motion.div
//                 initial={{ scaleY: 0 }}
//                 animate={inView ? { scaleY: 1 } : {}}
//                 transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
//                 className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-green-500 origin-top"
//               />

//               <div className="space-y-8">
//                 {WORK.map((item, i) => (
//                   <motion.div
//                     key={item.title}
//                     initial={{ opacity: 0, x: -40 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
//                     className="relative pl-14"
//                   >
//                     <TimelineDot
//                       dotColor={item.dotColor}
//                       ringColor={item.ringColor}
//                       current={item.current}
//                     />

//                     <motion.div
//                       whileHover={{ x: 4 }}
//                       className="p-5 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group"
//                     >
//                       <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
//                         <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
//                           {item.title}
//                         </h4>
//                         {item.current && (
//                           <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30 font-mono">
//                             Current
//                           </span>
//                         )}
//                       </div>
//                       <div className={`${item.companyColor} text-sm font-bold mb-2`}>{item.company}</div>
//                       <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
//                         <span className="flex items-center gap-1">
//                           <Calendar className="w-3 h-3" /> {item.period}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <MapPin className="w-3 h-3" /> {item.location}
//                         </span>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed mb-3">
//                         {item.description}
//                       </p>
//                       {/* Achievement badge */}
//                       <div className="flex items-center gap-1.5 text-xs text-green-400 font-mono mb-3">
//                         <TrendingUp className="w-3.5 h-3.5" />
//                         {item.achievement}
//                       </div>
//                       <div className="flex flex-wrap gap-1.5">
//                         {item.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-mono border border-primary/20"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Education */}
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.15 }}
//               className="flex items-center gap-2 mb-8"
//             >
//               <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20">
//                 <GraduationCap className="w-5 h-5 text-secondary" />
//               </div>
//               <h3 className="text-xl font-semibold">Education</h3>
//             </motion.div>

//             <div className="relative">
//               <motion.div
//                 initial={{ scaleY: 0 }}
//                 animate={inView ? { scaleY: 1 } : {}}
//                 transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//                 className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-yellow-500 origin-top"
//               />

//               <div className="space-y-8">
//                 {EDUCATION.map((item, i) => (
//                   <motion.div
//                     key={item.title}
//                     initial={{ opacity: 0, x: 40 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
//                     className="relative pl-14"
//                   >
//                     <div
//                       className={`absolute left-0 top-2 w-9 h-9 rounded-full border-2 ${item.ringColor} bg-background flex items-center justify-center z-10 shadow-lg`}
//                     >
//                       <span className="text-sm">{item.icon}</span>
//                     </div>

//                     <motion.div
//                       whileHover={{ x: 4 }}
//                       className="p-5 rounded-2xl border border-border bg-card hover:border-secondary/40 transition-all duration-300"
//                     >
//                       <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
//                       <div className={`${item.color} text-sm font-bold mb-2`}>{item.institution}</div>
//                       <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
//                         <Calendar className="w-3 h-3" /> {item.period}
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
//                     </motion.div>
//                   </motion.div>
//                 ))}

//                 {/* Skills gained section */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.5, delay: 0.7 }}
//                   className="pl-14 relative"
//                 >
//                   <div className="absolute left-0 top-2 w-9 h-9 rounded-full border-2 border-border bg-background flex items-center justify-center z-10">
//                     <span className="text-sm">📚</span>
//                   </div>
//                   <div className="p-5 rounded-2xl border border-dashed border-border/60 bg-muted/20">
//                     <h4 className="font-semibold text-muted-foreground text-sm mb-3">Continuous Learning</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {["System Design", "Distributed Systems", "Cloud Architecture", "WebAssembly", "AI/ML Integration"].map((item) => (
//                         <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">
//                           {item}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, TrendingUp, Sparkles, Rocket, Zap } from "lucide-react";

const WORK = [
  {
    title: "Full Stack Developer",
    company: "National Book Foundation",
    companyColor: "text-indigo-400",
    dotColor: "bg-indigo-500",
    ringColor: "border-indigo-500",
    location: "G-8/4 Islamabad, PK (Onsite)",
    period: "2025 — Present",
    current: true,
    description:
      "Led development of merchant-facing dashboard features serving 4M+ businesses. Architected a real-time notification system processing 100M events/day. Mentored 3 junior engineers and defined frontend coding standards across the team.",
    tags: ["JavaScript", "React", "TypeScript", "Next.js", "Node.js", "Express.js", "PostgreSQL", "MongoDb"],
    achievement: "+40% dashboard performance",
  },
  // {
  //   title: "Full Stack Developer",
  //   company: "Vercel",
  //   companyColor: "text-blue-400",
  //   dotColor: "bg-blue-500",
  //   ringColor: "border-blue-500",
  //   location: "Remote",
  //   period: "2020 — 2022",
  //   current: false,
  //   description:
  //     "Built internal tooling and customer-facing features for the deployment platform. Improved build pipeline performance by 40% through parallelization and caching strategies. Contributed to open-source Next.js ecosystem.",
  //   tags: ["Next.js", "Node.js", "Redis", "Docker", "AWS"],
  //   achievement: "40% faster build pipelines",
  // },
  // {
  //   title: "Frontend Engineer",
  //   company: "Shopify",
  //   companyColor: "text-green-400",
  //   dotColor: "bg-green-500",
  //   ringColor: "border-green-500",
  //   location: "Toronto, ON (Hybrid)",
  //   period: "2018 — 2020",
  //   current: false,
  //   description:
  //     "Developed Polaris component library features used by 100K+ merchants globally. Improved checkout conversion rates by 12% through A/B testing and performance optimization. Built accessibility-first UI components.",
  //   tags: ["React", "GraphQL", "Ruby on Rails", "Tailwind"],
  //   achievement: "+12% checkout conversion",
  // },
];

const EDUCATION = [
  // {
  //   title: "M.S. Computer Science",
  //   institution: "Stanford University",
  //   period: "2016 — 2018",
  //   description: "Specialization in Distributed Systems and Human-Computer Interaction. GPA: 3.9/4.0.",
  //   color: "text-purple-400",
  //   dotColor: "bg-purple-500",
  //   ringColor: "border-purple-500",
  //   icon: "🎓",
  // },
  {
    title: "BSc.IET (Information Engineering and Technology)",
    institution: "National Skills University Islamabad",
    period: "2022 — 2026",
    description: "Dean's List. Senior thesis on real-time collaborative editing algorithms. CGPA: 3.79/4.0.",
    color: "text-yellow-400",
    dotColor: "bg-yellow-500",
    ringColor: "border-yellow-500",
    icon: "🏛️",
  },
];

// Enhanced TimelineDot with pulse animation
function TimelineDot({
  dotColor,
  ringColor,
  current,
  delay = 0,
}: {
  dotColor: string;
  ringColor: string;
  current?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        delay 
      }}
      className={`absolute left-0 top-2 w-9 h-9 rounded-full border-2 ${ringColor} bg-background flex items-center justify-center z-10 shadow-lg`}
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.1, type: "spring" }}
        className={`w-2.5 h-2.5 rounded-full ${dotColor}`}
      />
      {current && (
        <>
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute inset-0 rounded-full ${dotColor} opacity-30`}
          />
          <motion.span
            animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className={`absolute inset-0 rounded-full ${dotColor} opacity-20`}
          />
        </>
      )}
    </motion.div>
  );
}

// Staggered card container
function StaggeredCards({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay,
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Individual card animation variants
const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.95,
    rotateY: -10,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.6,
    }
  }
};

const educationCardVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    scale: 0.95,
    rotateY: 10,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.6,
    }
  }
};

// Glow effect on hover
function GlowCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 400 }
      }}
      className={`relative group ${className}`}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      {children}
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="experience" data-testid="section-experience" className="py-28 px-4 relative overflow-hidden">
      {/* Animated gradient backgrounds */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-card/30"
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Animated blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Header with enhanced animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-sm font-mono text-primary mb-2 block"
          >
            // career_path
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary/70 bg-clip-text text-transparent"
          >
            Experience & Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="flex items-center gap-2 mb-8"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="p-2 rounded-lg bg-primary/10 border border-primary/20"
              >
                <Briefcase className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>

            <div className="relative">
              {/* Animated timeline line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-green-500 origin-top"
              />
              
              {/* Add glow to timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-500/30 via-blue-500/30 to-green-500/30 blur-sm origin-top"
              />

              <StaggeredCards delay={0.3}>
                {WORK.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    className="relative pl-14 mb-8"
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <TimelineDot
                      dotColor={item.dotColor}
                      ringColor={item.ringColor}
                      current={item.current}
                      delay={0.4 + i * 0.1}
                    />

                    <GlowCard>
                      <motion.div
                        whileHover={{ x: 6 }}
                        animate={{
                          borderColor: hoveredCard === i ? "rgba(99, 102, 241, 0.4)" : "rgba(255, 255, 255, 0.1)",
                        }}
                        className="p-5 rounded-2xl border border-border bg-card transition-all duration-300 group relative overflow-hidden"
                      >
                        {/* Shine effect on hover */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        />
                        
                        <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
                          <motion.h4 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="font-bold text-foreground group-hover:text-primary transition-colors"
                          >
                            {item.title}
                          </motion.h4>
                          {item.current && (
                            <motion.span 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                              className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/30 font-mono"
                            >
                              <motion.span
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1"
                              />
                              Current
                            </motion.span>
                          )}
                        </div>
                        
                        <div className={`${item.companyColor} text-sm font-bold mb-2`}>{item.company}</div>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.55 + i * 0.1 }}
                            className="flex items-center gap-1"
                          >
                            <Calendar className="w-3 h-3" /> {item.period}
                          </motion.span>
                          <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="flex items-center gap-1"
                          >
                            <MapPin className="w-3 h-3" /> {item.location}
                          </motion.span>
                        </div>
                        
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.65 + i * 0.1 }}
                          className="text-sm text-muted-foreground leading-relaxed mb-3"
                        >
                          {item.description}
                        </motion.p>
                        
                        {/* Achievement badge with animation */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                          className="flex items-center gap-1.5 text-xs text-green-400 font-mono mb-3"
                        >
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <TrendingUp className="w-3.5 h-3.5" />
                          </motion.div>
                          {item.achievement}
                        </motion.div>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tagIdx) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.75 + i * 0.1 + tagIdx * 0.03 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-mono border border-primary/20 cursor-default"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </GlowCard>
                  </motion.div>
                ))}
              </StaggeredCards>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25, type: "spring" }}
              className="flex items-center gap-2 mb-8"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="p-2 rounded-lg bg-secondary/10 border border-secondary/20"
              >
                <GraduationCap className="w-5 h-5 text-secondary" />
              </motion.div>
              <h3 className="text-xl font-semibold">Education</h3>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-yellow-500 origin-top"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500/30 to-yellow-500/30 blur-sm origin-top"
              />

              <StaggeredCards delay={0.4}>
                {EDUCATION.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={educationCardVariants}
                    className="relative pl-14 mb-8"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                      className={`absolute left-0 top-2 w-9 h-9 rounded-full border-2 ${item.ringColor} bg-background flex items-center justify-center z-10 shadow-lg`}
                    >
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.15 }}
                        className="text-sm"
                      >
                        {item.icon}
                      </motion.span>
                    </motion.div>

                    <GlowCard>
                      <motion.div
                        whileHover={{ x: 6 }}
                        className="p-5 rounded-2xl border border-border bg-card hover:border-secondary/40 transition-all duration-300 relative overflow-hidden group"
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        />
                        
                        <motion.h4 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.55 + i * 0.15 }}
                          className="font-bold text-foreground mb-1"
                        >
                          {item.title}
                        </motion.h4>
                        
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 + i * 0.15 }}
                          className={`${item.color} text-sm font-bold mb-2`}
                        >
                          {item.institution}
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.65 + i * 0.15 }}
                          className="flex items-center gap-1 text-xs text-muted-foreground mb-3"
                        >
                          <Calendar className="w-3 h-3" /> {item.period}
                        </motion.div>
                        
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + i * 0.15 }}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                    </GlowCard>
                  </motion.div>
                ))}

                {/* Continuous Learning Section with enhanced animation */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                  className="pl-14 relative"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    className="absolute left-0 top-2 w-9 h-9 rounded-full border-2 border-border bg-background flex items-center justify-center z-10 shadow-lg"
                  >
                    <motion.span 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-sm"
                    >
                      📚
                    </motion.span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-2xl border border-dashed border-border/60 bg-muted/20 relative overflow-hidden group"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                    
                    <motion.h4 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="font-semibold text-muted-foreground text-sm mb-3 flex items-center gap-2"
                    >
                      <Sparkles className="w-3 h-3 text-primary" />
                      Continuous Learning
                    </motion.h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {["System Design", "Distributed Systems", "Cloud Architecture", "WebAssembly", "AI/ML Integration"].map((item, idx) => (
                        <motion.span 
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.1 + idx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="text-xs px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground cursor-default"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </StaggeredCards>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}