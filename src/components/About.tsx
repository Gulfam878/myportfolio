// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { User, Briefcase, Star, Coffee, Code2 } from "lucide-react";
// import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

// const SKILLS = [
//   { name: "React / Next.js", level: 95, color: "from-blue-400 to-cyan-400" },
//   { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
//   { name: "Node.js / Express", level: 92, color: "from-green-400 to-emerald-500" },
//   { name: "PostgreSQL / MongoDB", level: 85, color: "from-indigo-400 to-purple-500" },
//   { name: "Docker / AWS", level: 80, color: "from-orange-400 to-amber-500" },
//   { name: "GraphQL", level: 78, color: "from-pink-400 to-rose-500" },
//   { name: "UI/UX Design", level: 75, color: "from-purple-400 to-violet-500" },
//   { name: "Python", level: 70, color: "from-yellow-400 to-orange-400" },
// ];

// const STATS = [
//   { icon: Briefcase, value: "1.5+", label: "Years Experience", color: "text-blue-400" },
//   { icon: Star, value: "60+", label: "Projects Shipped", color: "text-yellow-400" },
//   { icon: User, value: "30+", label: "Happy Clients", color: "text-green-400" },
//   { icon: Coffee, value: "∞", label: "Coffees Consumed", color: "text-orange-400" },
// ];

// function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-30px" });

//   return (
//     <div ref={ref} className="group">
//       <div className="flex justify-between items-center mb-1.5">
//         <span className="text-sm font-medium text-foreground">{name}</span>
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ delay: delay + 0.5 }}
//           className="text-xs font-mono text-primary"
//         >
//           {level}%
//         </motion.span>
//       </div>
//       <div className="h-2 rounded-full bg-muted overflow-hidden">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${level}%` } : { width: 0 }}
//           transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
//         >
//           <motion.div
//             animate={{ x: ["0%", "100%", "0%"] }}
//             transition={{ duration: 2, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default function About() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="about" data-testid="section-about" className="py-28 px-4 relative overflow-hidden">
//       {/* BG decoration */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.span
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.4 }}
//             className="text-sm font-mono text-primary mb-2 block"
//           >
//             // about_me
//           </motion.span>
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: 64 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
//           />
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Bio side */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.1 }}
//           >
//             {/* Avatar card */}
//             <div className="flex items-center gap-4 mb-8 p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
//               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 flex-shrink-0">
//                 <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
//                   <span className="text-2xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
//                     GA
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-bold text-foreground text-lg">Gulfam Ashraf</h3>
//                 <p className="text-sm text-muted-foreground font-mono">Full Stack Developer</p>
//                 <div className="flex items-center gap-1.5 mt-1">
//                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   <span className="text-xs text-green-500 font-medium">Available for hire</span>
//                 </div>
//               </div>
//             </div>

//             <p className="text-muted-foreground leading-relaxed mb-4">
//               I'm a full-stack web developer with 6+ years of experience building modern,
//               scalable web applications. I specialize in React and Node.js, but I'm equally
//               comfortable anywhere in the stack — from crafting pixel-perfect UIs to
//               designing resilient backend systems and cloud infrastructure.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-8">
//               I believe great software is built at the intersection of strong engineering and
//               thoughtful design. Every project I ship is clean, maintainable, and built to last.
//               When I'm not coding, I'm contributing to open source, writing technical articles,
//               or experimenting with new frameworks.
//             </p>

//             {/* Code snippet decoration */}
//             <div className="p-4 rounded-xl bg-muted/50 border border-border font-mono text-sm mb-8">
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="w-3 h-3 rounded-full bg-red-400" />
//                 <span className="w-3 h-3 rounded-full bg-yellow-400" />
//                 <span className="w-3 h-3 rounded-full bg-green-400" />
//                 <span className="ml-2 text-xs text-muted-foreground">about.ts</span>
//               </div>
//               <div className="text-xs leading-relaxed space-y-1">
//                 <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-foreground">= {"{"}</span></div>
//                 <div className="pl-4"><span className="text-green-400">name</span><span className="text-foreground">: </span><span className="text-yellow-400">"Gulfam Ashraf"</span><span className="text-foreground">,</span></div>
//                 <div className="pl-4"><span className="text-green-400">role</span><span className="text-foreground">: </span><span className="text-yellow-400">"Full Stack Dev"</span><span className="text-foreground">,</span></div>
//                 <div className="pl-4"><span className="text-green-400">yearsExp</span><span className="text-foreground">: </span><span className="text-orange-400">1.5</span><span className="text-foreground">,</span></div>
//                 <div className="pl-4"><span className="text-green-400">available</span><span className="text-foreground">: </span><span className="text-blue-400">true</span><span className="text-foreground">,</span></div>
//                 <div><span className="text-foreground">{"}"}</span></div>
//               </div>
//             </div>

//             <StaggerContainer className="grid grid-cols-2 gap-4">
//               {STATS.map(({ icon: Icon, value, label, color }) => (
//                 <StaggerItem key={label}>
//                   <motion.div
//                     whileHover={{ scale: 1.04, y: -3 }}
//                     className="p-4 rounded-xl border border-border bg-card/60 transition-colors hover:border-primary/40 cursor-default"
//                   >
//                     <Icon className={`w-5 h-5 ${color} mb-2`} />
//                     <div className="text-2xl font-bold text-foreground">{value}</div>
//                     <div className="text-xs text-muted-foreground">{label}</div>
//                   </motion.div>
//                 </StaggerItem>
//               ))}
//             </StaggerContainer>
//           </motion.div>

//           {/* Skills side */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             <div className="flex items-center gap-2 mb-6">
//               <Code2 className="w-5 h-5 text-primary" />
//               <h3 className="text-xl font-semibold">Technical Proficiency</h3>
//             </div>
//             <div className="space-y-5">
//               {SKILLS.map((skill, i) => (
//                 <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.08} />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   User, Briefcase, Star, Coffee, Code2,
//   MapPin, Mail, Phone, Globe, Award,
//   Heart, Zap, BookOpen, Layers, Terminal,
// } from "lucide-react";
// import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

// const SKILLS = [
//   { name: "React / Next.js",        level: 95, color: "from-blue-400 to-cyan-400" },
//   { name: "TypeScript",             level: 90, color: "from-blue-500 to-indigo-500" },
//   { name: "Node.js / Express",      level: 92, color: "from-green-400 to-emerald-500" },
//   { name: "PostgreSQL / MongoDB",   level: 85, color: "from-indigo-400 to-purple-500" },
//   { name: "Docker / AWS",           level: 80, color: "from-orange-400 to-amber-500" },
//   { name: "GraphQL",                level: 78, color: "from-pink-400 to-rose-500" },
//   { name: "UI/UX Design",           level: 75, color: "from-purple-400 to-violet-500" },
//   { name: "Python",                 level: 70, color: "from-yellow-400 to-orange-400" },
// ];

// const STATS = [
//   { icon: Briefcase, value: "1.5+", label: "Years Experience", color: "text-blue-400" },
//   { icon: Star,      value: "20+",  label: "Projects Shipped",  color: "text-yellow-400" },
//   { icon: User,      value: "15+",  label: "Happy Clients",     color: "text-green-400" },
//   { icon: Coffee,    value: "∞",    label: "Coffees Consumed",  color: "text-orange-400" },
// ];

// const INTERESTS = [
//   { icon: Terminal, label: "Open Source",    color: "text-green-400"  },
//   { icon: BookOpen, label: "Tech Writing",   color: "text-blue-400"   },
//   { icon: Zap,      label: "AI / ML",        color: "text-yellow-400" },
//   { icon: Layers,   label: "System Design",  color: "text-purple-400" },
//   { icon: Globe,    label: "Web3 / Crypto",  color: "text-cyan-400"   },
//   { icon: Heart,    label: "Clean Code",     color: "text-rose-400"   },
// ];

// const TIMELINE = [
//   { year: "2024", title: "Senior Full Stack Dev", place: "Freelance / Remote", desc: "Building SaaS products and leading end-to-end projects for international clients." },
//   { year: "2023", title: "Full Stack Developer",  place: "Tech Agency",        desc: "Delivered 10+ production apps using React, Node.js, and cloud infrastructure." },
//   { year: "2022", title: "Frontend Developer",    place: "Startup",            desc: "Built responsive UIs, component libraries, and integrated REST APIs." },
//   { year: "2021", title: "Started Coding Journey",place: "Self-taught",        desc: "Dived into web development — HTML, CSS, JavaScript, and never looked back." },
// ];

// // ── Animated skill bar ───────────────────────────────────────────────
// function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-30px" });
//   return (
//     <div ref={ref} className="group">
//       <div className="flex justify-between items-center mb-1.5">
//         <span className="text-sm font-medium text-foreground">{name}</span>
//         <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
//           transition={{ delay: delay + 0.5 }} className="text-xs font-mono text-primary">
//           {level}%
//         </motion.span>
//       </div>
//       <div className="h-2 rounded-full bg-muted overflow-hidden">
//         <motion.div initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : { width: 0 }}
//           transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className={`h-full rounded-full bg-gradient-to-r ${color} relative`}>
//           <motion.div animate={{ x: ["0%","100%","0%"] }}
//             transition={{ duration: 2, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// // ── Book-open page reveal ────────────────────────────────────────────
// function BookOpenReveal({ children }: { children: React.ReactNode }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <div ref={ref} className="relative" style={{ perspective: "1200px" }}>
//       {/* Left page (comes from left) */}
//       <motion.div
//         initial={{ rotateY: -90, opacity: 0, originX: "left" }}
//         animate={inView ? { rotateY: 0, opacity: 1 } : {}}
//         transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
//         style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
//         className="relative"
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

// // ── Right-side book page ─────────────────────────────────────────────
// function BookRightReveal({ children }: { children: React.ReactNode }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <div ref={ref} style={{ perspective: "1200px" }}>
//       <motion.div
//         initial={{ rotateY: 90, opacity: 0 }}
//         animate={inView ? { rotateY: 0, opacity: 1 } : {}}
//         transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
//         style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

// // ── Fade-up on scroll ────────────────────────────────────────────────
// function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <motion.div ref={ref} initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//       className={className}>
//       {children}
//     </motion.div>
//   );
// }

// // ── Timeline item ────────────────────────────────────────────────────
// function TimelineItem({ item, i }: { item: typeof TIMELINE[0]; i: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });
//   return (
//     <motion.div ref={ref} initial={{ opacity: 0, x: -40 }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
//       className="relative pl-10">
//       {/* dot */}
//       <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30 flex items-center justify-center">
//         <div className="w-1.5 h-1.5 rounded-full bg-white" />
//       </div>
//       <div className="p-4 rounded-xl border border-border bg-card/60 hover:border-primary/40 transition-colors group">
//         <div className="flex items-center gap-2 mb-1">
//           <span className="text-xs font-mono text-primary font-bold">{item.year}</span>
//           <span className="text-xs text-muted-foreground">· {item.place}</span>
//         </div>
//         <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1">{item.title}</h4>
//         <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
//       </div>
//     </motion.div>
//   );
// }

// export default function About() {
//   const headerRef = useRef(null);
//   const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

//   return (
//     <section id="about" data-testid="section-about" className="py-28 px-4 relative overflow-hidden">
//       {/* BG blobs */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative">

//         {/* ── Section header ── */}
//         <motion.div ref={headerRef} initial={{ opacity: 0, y: 40 }}
//           animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
//           className="text-center mb-16">
//           <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={headerInView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.4 }} className="text-sm font-mono text-primary mb-2 block">
//             // about_me
//           </motion.span>
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
//           <motion.div initial={{ width: 0 }} animate={headerInView ? { width: 64 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto" />
//         </motion.div>

//         {/* ── Row 1: Bio + Skills (book open) ── */}
//         <div className="grid lg:grid-cols-2 gap-10 mb-16 items-start">
//           <BookOpenReveal>
//             <div className="space-y-6">
//               {/* Avatar card */}
//               <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-lg">
//                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 flex-shrink-0">
//                   <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
//                     <span className="text-2xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">GA</span>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-foreground text-lg">Gulfam Ashraf</h3>
//                   <p className="text-sm text-muted-foreground font-mono">Full Stack Developer</p>
//                   <div className="flex items-center gap-1.5 mt-1">
//                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                     <span className="text-xs text-green-500 font-medium">Available for hire</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact quick info */}
//               <div className="grid grid-cols-2 gap-3">
//                 {[
//                   { icon: MapPin, label: "Pakistan",          color: "text-rose-400" },
//                   { icon: Mail,   label: "gulfam@email.com",  color: "text-blue-400" },
//                   { icon: Globe,  label: "Remote-friendly",   color: "text-green-400" },
//                   { icon: Phone,  label: "+92 XXX XXXXXXX",   color: "text-yellow-400" },
//                 ].map(({ icon: Icon, label, color }) => (
//                   <div key={label} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card/50 text-xs text-muted-foreground">
//                     <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${color}`} />
//                     <span className="truncate">{label}</span>
//                   </div>
//                 ))}
//               </div>

//               <p className="text-muted-foreground leading-relaxed text-sm">
//                 I'm a passionate full-stack developer who loves turning complex problems into clean,
//                 scalable solutions. With 1.5+ years of hands-on experience, I specialize in building
//                 modern web apps from scratch — handling everything from database schema to pixel-perfect UIs.
//               </p>
//               <p className="text-muted-foreground leading-relaxed text-sm">
//                 I believe great software lives at the intersection of strong engineering and thoughtful design.
//                 Every line of code I write is clean, tested, and built to last. Outside of work, I contribute
//                 to open source, write technical articles, and stay obsessed with emerging tech.
//               </p>

//               {/* Code snippet */}
//               <div className="p-4 rounded-xl bg-muted/50 border border-border font-mono text-xs">
//                 <div className="flex items-center gap-2 mb-3">
//                   <span className="w-3 h-3 rounded-full bg-red-400" />
//                   <span className="w-3 h-3 rounded-full bg-yellow-400" />
//                   <span className="w-3 h-3 rounded-full bg-green-400" />
//                   <span className="ml-2 text-muted-foreground">about.ts</span>
//                 </div>
//                 <div className="leading-relaxed space-y-1">
//                   <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-foreground">= {"{"}</span></div>
//                   <div className="pl-4"><span className="text-green-400">name</span><span>: </span><span className="text-yellow-400">"Gulfam Ashraf"</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">role</span><span>: </span><span className="text-yellow-400">"Full Stack Developer"</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">experience</span><span>: </span><span className="text-orange-400">1.5</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">location</span><span>: </span><span className="text-yellow-400">"Pakistan 🇵🇰"</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">remote</span><span>: </span><span className="text-blue-400">true</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">available</span><span>: </span><span className="text-blue-400">true</span><span>,</span></div>
//                   <div><span>{"}"}</span></div>
//                 </div>
//               </div>

//               {/* Stats */}
//               <StaggerContainer className="grid grid-cols-2 gap-3">
//                 {STATS.map(({ icon: Icon, value, label, color }) => (
//                   <StaggerItem key={label}>
//                     <motion.div whileHover={{ scale: 1.04, y: -3 }}
//                       className="p-4 rounded-xl border border-border bg-card/60 hover:border-primary/40 transition-colors cursor-default">
//                       <Icon className={`w-5 h-5 ${color} mb-2`} />
//                       <div className="text-2xl font-bold text-foreground">{value}</div>
//                       <div className="text-xs text-muted-foreground">{label}</div>
//                     </motion.div>
//                   </StaggerItem>
//                 ))}
//               </StaggerContainer>
//             </div>
//           </BookOpenReveal>

//           {/* Skills */}
//           <BookRightReveal>
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                 <Code2 className="w-5 h-5 text-primary" />
//                 <h3 className="text-xl font-semibold">Technical Proficiency</h3>
//               </div>
//               <div className="space-y-5">
//                 {SKILLS.map((skill, i) => (
//                   <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.08} />
//                 ))}
//               </div>

//               {/* Award badges */}
//               <div className="mt-8 pt-6 border-t border-border/50">
//                 <div className="flex items-center gap-2 mb-4">
//                   <Award className="w-4 h-4 text-yellow-400" />
//                   <span className="text-sm font-semibold">Certifications & Highlights</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {["AWS Cloud Practitioner","Meta React Dev","MongoDB Associate","Next.js Certified","Docker Essentials"].map(cert => (
//                     <span key={cert} className="text-xs px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary font-medium">
//                       {cert}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </BookRightReveal>
//         </div>

//         {/* ── Row 2: Timeline + Interests (book open, delayed) ── */}
//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* Timeline */}
//           <FadeUp delay={0.1}>
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                 <Briefcase className="w-5 h-5 text-primary" />
//                 <h3 className="text-xl font-semibold">My Journey</h3>
//               </div>
//               {/* Vertical line */}
//               <div className="relative">
//                 <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
//                 <div className="space-y-4">
//                   {TIMELINE.map((item, i) => <TimelineItem key={item.year} item={item} i={i} />)}
//                 </div>
//               </div>
//             </div>
//           </FadeUp>

//           {/* Interests + personal */}
//           <FadeUp delay={0.2}>
//             <div className="space-y-8">
//               <div>
//                 <div className="flex items-center gap-2 mb-5">
//                   <Heart className="w-5 h-5 text-rose-400" />
//                   <h3 className="text-xl font-semibold">Interests & Passions</h3>
//                 </div>
//                 <div className="grid grid-cols-3 gap-3">
//                   {INTERESTS.map(({ icon: Icon, label, color }) => (
//                     <motion.div key={label} whileHover={{ scale: 1.06, y: -3 }}
//                       className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card/60 hover:border-primary/40 transition-all cursor-default text-center">
//                       <Icon className={`w-5 h-5 ${color}`} />
//                       <span className="text-xs font-medium text-foreground leading-tight">{label}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Personal quote */}
//               <div className="relative p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
//                 <div className="absolute top-3 left-4 text-6xl text-primary/10 font-serif leading-none select-none">"</div>
//                 <p className="relative text-muted-foreground text-sm leading-relaxed italic">
//                   I don't just write code — I craft digital experiences that solve real problems.
//                   Every project is a chance to learn something new and push the boundaries of what's possible on the web.
//                 </p>
//                 <div className="mt-4 flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">GA</div>
//                   <div>
//                     <div className="text-xs font-bold text-foreground">Gulfam Ashraf</div>
//                     <div className="text-xs text-muted-foreground">Full Stack Developer</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Fun facts */}
//               <div className="p-5 rounded-2xl border border-border bg-card/50">
//                 <div className="text-xs font-mono text-primary mb-3 tracking-widest uppercase">// fun_facts</div>
//                 <ul className="space-y-2 text-sm text-muted-foreground">
//                   {[
//                     "☕ Powered by coffee — 3 cups minimum per day",
//                     "🌙 Most productive between 10pm – 2am",
//                     "🐛 Debugs by explaining code to a rubber duck",
//                     "📚 Reads 2–3 tech books per month",
//                     "🎯 Believes naming variables is the hardest problem in CS",
//                   ].map(fact => (
//                     <li key={fact} className="flex items-start gap-2 leading-relaxed">{fact}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </FadeUp>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   User, Briefcase, Star, Coffee, Code2,
//   MapPin, Mail, Phone, Globe, Award,
//   Heart, Zap, BookOpen, Layers, Terminal,
//   Sparkles, Rocket, Shield, Cpu,
//   Github, Linkedin, Twitter, Sun, Moon
// } from "lucide-react";
// import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
// import React from "react";

// // SKILLS - Keep in About ✅
// const SKILLS = [
//   { name: "React / Next.js", level: 95, color: "from-blue-400 to-cyan-400" },
//   { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
//   { name: "Node.js / Express", level: 92, color: "from-green-400 to-emerald-500" },
//   { name: "PostgreSQL / MongoDB", level: 85, color: "from-indigo-400 to-purple-500" },
//   { name: "Docker / AWS", level: 80, color: "from-orange-400 to-amber-500" },
//   { name: "GraphQL", level: 78, color: "from-pink-400 to-rose-500" },
//   { name: "UI/UX Design", level: 75, color: "from-purple-400 to-violet-500" },
//   { name: "Python", level: 70, color: "from-yellow-400 to-orange-400" },
// ];

// // STATS - Keep in About ✅
// const STATS = [
//   { icon: Briefcase, value: "1.5+", label: "Years Experience", color: "text-blue-400" },
//   { icon: Star, value: "20+", label: "Projects Shipped", color: "text-yellow-400" },
//   { icon: User, value: "15+", label: "Happy Clients", color: "text-green-400" },
//   { icon: Coffee, value: "∞", label: "Coffees Consumed", color: "text-orange-400" },
// ];

// // INTERESTS - Keep in About ✅
// const INTERESTS = [
//   { icon: Terminal, label: "Open Source", color: "text-green-400" },
//   { icon: BookOpen, label: "Development", color: "text-blue-400" },
//   { icon: Zap, label: "AI / ML", color: "text-yellow-400" },
//   { icon: Layers, label: "System Design", color: "text-purple-400" },
//   { icon: Globe, label: "Cybersecurity", color: "text-cyan-400" },
//   { icon: Heart, label: "Clean Code", color: "text-rose-400" },
// ];

// // SOCIAL LINKS - Added for About section
// const SOCIAL_LINKS = [
//   { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
//   { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
//   { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-sky-400" },
// ];

// // REMOVED TIMELINE - This belongs in Experience component! ❌

// // ── Animated skill bar with glow effect ──
// function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-30px" });

//   return (
//     <div ref={ref} className="group">
//       <div className="flex justify-between items-center mb-1.5">
//         <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
//           {name}
//         </span>
//         <motion.span
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: delay + 0.5, type: "spring" }}
//           className="text-xs font-mono text-primary"
//         >
//           {level}%
//         </motion.span>
//       </div>
//       <div className="h-2 rounded-full bg-muted overflow-hidden shadow-inner">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${level}%` } : { width: 0 }}
//           transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className={`h-full rounded-full bg-gradient-to-r ${color} relative shadow-lg`}
//         >
//           {/* Animated shine effect */}
//           <motion.div
//             animate={{ x: ["0%", "100%", "0%"] }}
//             transition={{ duration: 2.5, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// // ── Animated counter for stats ──
// function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: string; suffix?: string; delay?: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   const [count, setCount] = useState(0);

//   const numericValue = parseFloat(value);
//   const isInfinite = value === "∞";

//   React.useEffect(() => {
//     if (inView && !isInfinite) {
//       let start = 0;
//       const duration = 2000;
//       const increment = numericValue / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [inView, numericValue, isInfinite]);

//   return (
//     <span ref={ref} className="text-2xl font-bold text-foreground">
//       {isInfinite ? "∞" : count}{suffix}
//     </span>
//   );
// }

// // ── Book-open page reveal (enhanced) ──
// function BookOpenReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <div ref={ref} className="relative" style={{ perspective: "1200px" }}>
//       <motion.div
//         initial={{ rotateY: -90, opacity: 0, originX: "left" }}
//         animate={inView ? { rotateY: 0, opacity: 1 } : {}}
//         transition={{ duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//         style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

// // ── Right-side book page ──
// function BookRightReveal({ children, delay = 0.1 }: { children: React.ReactNode; delay?: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <div ref={ref} style={{ perspective: "1200px" }}>
//       <motion.div
//         initial={{ rotateY: 90, opacity: 0 }}
//         animate={inView ? { rotateY: 0, opacity: 1 } : {}}
//         transition={{ duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//         style={{ transformOrigin: "right center", transformStyle: "preserve-3d" }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }

// // ── Fade-up on scroll (enhanced) ──
// function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50, scale: 0.95 }}
//       animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//       transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ── Floating animation for icons ──
// function FloatingIcon({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
//   return (
//     <motion.div
//       animate={{ y: [0, -10, 0] }}
//       transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ── Glowing badge effect ──
// function GlowingBadge({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="relative"
//     >
//       <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
//       {children}
//     </motion.div>
//   );
// }

// export default function About() {
//   const headerRef = useRef(null);
//   const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
//   const [hoveredStat, setHoveredStat] = useState<number | null>(null);

//   return (
//     <section id="about" data-testid="section-about" className="py-28 px-4 relative overflow-hidden">
//       {/* Animated BG blobs */}
//       <motion.div
//         animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
//       />
//       <motion.div
//         animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 30, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
//       />
//       <motion.div
//         animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none"
//       />

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* ── Section header with enhanced animation ── */}
//         <motion.div
//           ref={headerRef}
//           initial={{ opacity: 0, y: 40 }}
//           animate={headerInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.span
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={headerInView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.4, type: "spring" }}
//             className="text-sm font-mono text-primary mb-2 block"
//           >
//             // about_me
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={headerInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2 }}
//             className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary/70 bg-clip-text text-transparent"
//           >
//             About Me
//           </motion.h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={headerInView ? { width: 80 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto"
//           />
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={headerInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.4 }}
//             className="text-muted-foreground mt-4 max-w-2xl mx-auto"
//           >
//             Get to know the developer behind the code
//           </motion.p>
//         </motion.div>

//         {/* ── Row 1: Bio + Skills ── */}
//         <div className="grid lg:grid-cols-2 gap-10 mb-16 items-start">
//           <BookOpenReveal delay={0}>
//             <div className="space-y-6">
//               {/* Avatar card with hover effects */}
//               <motion.div
//                 whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)" }}
//                 className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-lg"
//               >
//                 <FloatingIcon delay={0}>
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 flex-shrink-0">
//                     <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
//                       <motion.span
//                         animate={{ rotate: [0, 5, -5, 0] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                         className="text-2xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"
//                       >
//                         GA
//                       </motion.span>
//                     </div>
//                   </div>
//                 </FloatingIcon>
//                 <div>
//                   <h3 className="font-bold text-foreground text-lg">Gulfam Ashraf</h3>
//                   <p className="text-sm text-muted-foreground font-mono">Full Stack Developer</p>
//                   <div className="flex items-center gap-1.5 mt-1">
//                     <motion.span
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ duration: 1.5, repeat: Infinity }}
//                       className="w-2 h-2 rounded-full bg-green-500"
//                     />
//                     <span className="text-xs text-green-500 font-medium">Available for hire</span>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Contact quick info with stagger */}
//               <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.05}>
//                 {[
//                   { icon: MapPin, label: "Pakistan", color: "text-rose-400", value: "Lahore, PK" },
//                   { icon: Mail, label: "Email", color: "text-blue-400", value: "gulfam@email.com" },
//                   { icon: Globe, label: "Work", color: "text-green-400", value: "Remote-friendly" },
//                   { icon: Phone, label: "Phone", color: "text-yellow-400", value: "+92 XXX XXXXXXX" },
//                 ].map(({ icon: Icon, label, color, value }) => (
//                   <StaggerItem key={label}>
//                     <motion.div
//                       whileHover={{ scale: 1.02, x: 2 }}
//                       className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card/50"
//                     >
//                       <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${color}`} />
//                       <div className="text-xs">
//                         <div className="text-muted-foreground">{label}</div>
//                         <div className="text-foreground font-medium truncate">{value}</div>
//                       </div>
//                     </motion.div>
//                   </StaggerItem>
//                 ))}
//               </StaggerContainer>

//               {/* Bio text with subtle animation */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={headerInView ? { opacity: 1 } : {}}
//                 transition={{ delay: 0.5 }}
//                 className="text-muted-foreground leading-relaxed text-sm"
//               >
//                 I'm a passionate full-stack developer who loves turning complex problems into clean,
//                 scalable solutions. With 1.5+ years of hands-on experience, I specialize in building
//                 modern web apps from scratch — handling everything from database schema to pixel-perfect UIs.
//               </motion.p>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={headerInView ? { opacity: 1 } : {}}
//                 transition={{ delay: 0.6 }}
//                 className="text-muted-foreground leading-relaxed text-sm"
//               >
//                 I believe great software lives at the intersection of strong engineering and thoughtful design.
//                 Every line of code I write is clean, tested, and built to last. Outside of work, I contribute
//                 to open source, write technical articles, and stay obsessed with emerging tech.
//               </motion.p>

//               {/* Code snippet with typing animation */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={headerInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.7 }}
//                 className="p-4 rounded-xl bg-muted/50 border border-border font-mono text-xs relative overflow-hidden group"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                 <div className="flex items-center gap-2 mb-3">
//                   <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-3 h-3 rounded-full bg-red-400" />
//                   <span className="w-3 h-3 rounded-full bg-yellow-400" />
//                   <span className="w-3 h-3 rounded-full bg-green-400" />
//                   <span className="ml-2 text-muted-foreground">about.ts</span>
//                 </div>
//                 <div className="leading-relaxed space-y-1">
//                   <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-foreground">= {"{"}</span></div>
//                   <div className="pl-4"><span className="text-green-400">name</span><span>: </span><span className="text-yellow-400">"Gulfam Ashraf"</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">role</span><span>: </span><span className="text-yellow-400">"Full Stack Developer"</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">experience</span><span>: </span><span className="text-orange-400">1.5</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">location</span><span>: </span><span className="text-yellow-400">"Pakistan 🇵🇰"</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">remote</span><span>: </span><span className="text-blue-400">true</span><span>,</span></div>
//                   <div className="pl-4"><span className="text-green-400">available</span><span>: </span><motion.span
//                     animate={{ opacity: [1, 0.5, 1] }}
//                     transition={{ duration: 1, repeat: Infinity }}
//                     className="text-blue-400"
//                   >
//                     true
//                   </motion.span><span>,</span></div>
//                   <div><span>{"}"}</span></div>
//                 </div>

//               </motion.div>

//               {/* Stats with hover effects */}
//               <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.05}>
//                 {STATS.map(({ icon: Icon, value, label, color }, idx) => (
//                   <StaggerItem key={label}>
//                     <motion.div
//                       whileHover={{ scale: 1.05, y: -5 }}
//                       onHoverStart={() => setHoveredStat(idx)}
//                       onHoverEnd={() => setHoveredStat(null)}
//                       className="p-4 rounded-xl border border-border bg-card/60 cursor-default relative overflow-hidden group"
//                     >
//                       <motion.div
//                         animate={{
//                           rotate: hoveredStat === idx ? 360 : 0,
//                           scale: hoveredStat === idx ? 1.1 : 1
//                         }}
//                         transition={{ duration: 0.3 }}
//                         className={`${color} mb-2 relative z-10`}
//                       >
//                         <Icon className="w-5 h-5" />
//                       </motion.div>
//                       <AnimatedCounter value={value} delay={idx * 0.1} />
//                       <div className="text-xs text-muted-foreground mt-1">{label}</div>
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: hoveredStat === idx ? 1 : 0 }}
//                         className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl"
//                       />
//                     </motion.div>
//                   </StaggerItem>
//                 ))}
//               </StaggerContainer>

//             </div>
//           </BookOpenReveal>

//           {/* Skills Section */}
//           <BookRightReveal delay={0.1}>
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={headerInView ? { opacity: 1, x: 0 } : {}}
//                 className="flex items-center gap-2 mb-6"
//               >
//                 <div className="p-2 rounded-lg bg-primary/10">
//                   <Code2 className="w-5 h-5 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-semibold">Technical Proficiency</h3>
//               </motion.div>
//               <div className="space-y-5">
//                 {SKILLS.map((skill, i) => (
//                   <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.08} />
//                 ))}
//               </div>

//               {/* Certifications Section - Moved here from Experience */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={headerInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.8 }}
//                 className="mt-8 pt-6 border-t border-border/50"
//               >
//                 <div className="flex items-center gap-2 mb-4">
//                   <motion.div
//                     animate={{ rotate: [0, 10, -10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   >
//                     <Award className="w-4 h-4 text-yellow-400" />
//                   </motion.div>
//                   <span className="text-sm font-semibold">Certifications & Achievements</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {["AI Deep Learning (Navttc)", "Advanced Web Development (Navttc)", "Awarded with PM Youth Laptop 2023", "IT Support Specialist (Coursera)", "NetWorking (Coursera)"].map((cert, i) => (
//                     <motion.span
//                       key={cert}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={headerInView ? { opacity: 1, scale: 1 } : {}}
//                       transition={{ delay: 0.9 + i * 0.05 }}
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       className="text-xs px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary font-medium cursor-default"
//                     >
//                       {cert}
//                     </motion.span>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Social Links - New addition */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={headerInView ? { opacity: 1 } : {}}
//                 transition={{ delay: 1 }}
//                 className="mt-6 flex gap-3 justify-center lg:justify-start"
//               >
//                 {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
//                   <motion.a
//                     key={label}
//                     href={href}
//                     whileHover={{ y: -3, scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`p-2 rounded-full bg-card border border-border ${color} transition-all duration-300`}
//                   >
//                     <Icon className="w-4 h-4" />
//                   </motion.a>
//                 ))}
//               </motion.div>

//             </div>
//             <div className="grid lg:grid-cols-1 gap-10">
//               {/* Interests - Enhanced */}
//               <FadeUp delay={0.2}>
//                 <div>
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={headerInView ? { opacity: 1, x: 0 } : {}}
//                     className="flex items-center gap-2 mb-6"
//                   >
//                     <div className="p-2 rounded-lg bg-rose-400/10">
//                       <Heart className="w-5 h-5 text-rose-400" />
//                     </div>
//                     <h3 className="text-xl font-semibold">Interests & Passions</h3>
//                   </motion.div>
//                   <div className="grid grid-cols-3 gap-3">
//                     {INTERESTS.map(({ icon: Icon, label, color }, i) => (
//                       <motion.div
//                         key={label}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={headerInView ? { opacity: 1, scale: 1 } : {}}
//                         transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
//                         whileHover={{ scale: 1.08, y: -5 }}
//                         className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card/60 cursor-default group"
//                       >
//                         <motion.div
//                           animate={{ rotate: [0, 360] }}
//                           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                           className={`${color} group-hover:scale-110 transition-transform`}
//                         >
//                           <Icon className="w-5 h-5" />
//                         </motion.div>
//                         <span className="text-xs font-medium text-foreground leading-tight">{label}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </FadeUp>
//             </div>
//           </BookRightReveal>

//         </div>
//       </div>
//     </section>
//   );
// }






import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  User, Briefcase, Star, Coffee, Code2,
  MapPin, Mail, Phone, Globe, Award,
  Heart, Zap, BookOpen, Layers, Terminal,
  Sparkles, Rocket, Shield, Cpu,
  Github, Linkedin, Twitter, Sun, Moon
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import React from "react";

// SKILLS - Keep in About ✅
const SKILLS = [
  { name: "React / Next.js", level: 95, color: "from-blue-400 to-cyan-400" },
  { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
  { name: "Node.js / Express", level: 92, color: "from-green-400 to-emerald-500" },
  { name: "PostgreSQL / MongoDB", level: 85, color: "from-indigo-400 to-purple-500" },
  { name: "Docker / AWS", level: 80, color: "from-orange-400 to-amber-500" },
  { name: "GraphQL", level: 78, color: "from-pink-400 to-rose-500" },
  { name: "UI/UX Design", level: 75, color: "from-purple-400 to-violet-500" },
  { name: "Python", level: 70, color: "from-yellow-400 to-orange-400" },
];

// STATS - Keep in About ✅
const STATS = [
  { icon: Briefcase, value: "1.5+", label: "Years Experience", color: "text-blue-400" },
  { icon: Star, value: "20+", label: "Projects Shipped", color: "text-yellow-400" },
  { icon: User, value: "15+", label: "Happy Clients", color: "text-green-400" },
  { icon: Coffee, value: "∞", label: "Coffees Consumed", color: "text-orange-400" },
];

// INTERESTS - Keep in About ✅
const INTERESTS = [
  { icon: Terminal, label: "Open Source", color: "text-green-400" },
  { icon: BookOpen, label: "Development", color: "text-blue-400" },
  { icon: Zap, label: "AI / ML", color: "text-yellow-400" },
  { icon: Layers, label: "System Design", color: "text-purple-400" },
  { icon: Globe, label: "Cybersecurity", color: "text-cyan-400" },
  { icon: Heart, label: "Clean Code", color: "text-rose-400" },
];

// SOCIAL LINKS
const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-sky-400" },
];

// ── FIXED Book-open page reveal (Left side - opens like a door from left) ──
function BookOpenReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div 
      ref={ref} 
      className="relative w-full"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
        }}
        initial={{ rotateY: -90, opacity: 0 }}
        animate={inView ? { rotateY: 0, opacity: 1 } : {}}
        transition={{ 
          duration: 0.9, 
          delay, 
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ── FIXED Right-side book page (opens like a door from right) ──
function BookRightReveal({ children, delay = 0.1 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div 
      ref={ref} 
      className="relative w-full"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "right center",
        }}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={inView ? { rotateY: 0, opacity: 1 } : {}}
        transition={{ 
          duration: 0.9, 
          delay, 
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ── Fade-up on scroll ──
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Floating animation for icons ──
function FloatingIcon({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// ── Animated skill bar with glow effect ──
function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 0.5, type: "spring" }}
          className="text-xs font-mono text-primary"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`h-full rounded-full bg-gradient-to-r ${color} relative shadow-lg`}
        >
          <motion.div
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.5, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

// ── Animated counter for stats ──
function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: string; suffix?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numericValue = parseFloat(value);
  const isInfinite = value === "∞";

  React.useEffect(() => {
    if (inView && !isInfinite) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, numericValue, isInfinite]);

  return (
    <span ref={ref} className="text-2xl font-bold text-foreground">
      {isInfinite ? "∞" : count}{suffix}
    </span>
  );
}

export default function About() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section id="about" data-testid="section-about" className="py-28 px-4 relative overflow-hidden">
      {/* Animated BG blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, type: "spring" }}
            className="text-sm font-mono text-primary mb-2 block"
          >
            // about_me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary/70 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={headerInView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Get to know the developer behind the code
          </motion.p>
        </motion.div>

        {/* ── Row 1: Bio + Skills with BOOK OPENING ANIMATION ── */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-start">
          {/* LEFT SIDE - Opens like a door from LEFT edge */}
          <BookOpenReveal delay={0}>
            <div className="space-y-6">
              {/* Avatar card */}
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)" }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-lg"
              >
                <FloatingIcon delay={0}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                      <motion.span
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent"
                      >
                        GA
                      </motion.span>
                    </div>
                  </div>
                </FloatingIcon>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Gulfam Ashraf</h3>
                  <p className="text-sm text-muted-foreground font-mono">Full Stack Developer</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-green-500"
                    />
                    <span className="text-xs text-green-500 font-medium">Available for hire</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact quick info */}
              <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.05}>
                {[
                  { icon: MapPin, label: "Pakistan", color: "text-rose-400", value: "Islamabad, PK" },
                  { icon: Mail, label: "Email", color: "text-blue-400", value: "gulfam@email.com" },
                  { icon: Globe, label: "Work", color: "text-green-400", value: "Remote-friendly" },
                  { icon: Phone, label: "Phone", color: "text-yellow-400", value: "+92 XXX XXXXXXX" },
                ].map(({ icon: Icon, label, color, value }) => (
                  <StaggerItem key={label}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 2 }}
                      className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card/50"
                    >
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${color}`} />
                      <div className="text-xs">
                        <div className="text-muted-foreground">{label}</div>
                        <div className="text-foreground font-medium truncate">{value}</div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Bio text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground leading-relaxed text-sm"
              >
                I'm a passionate full-stack developer who loves turning complex problems into clean,
                scalable solutions. With 1.5+ years of hands-on experience, I specialize in building
                modern web apps from scratch — handling everything from database schema to pixel-perfect UIs.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground leading-relaxed text-sm"
              >
                I believe great software lives at the intersection of strong engineering and thoughtful design.
                Every line of code I write is clean, tested, and built to last. Outside of work, I contribute
                to open source, write technical articles, and stay obsessed with emerging tech.
              </motion.p>

              {/* Code snippet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="p-4 rounded-xl bg-muted/50 border border-border font-mono text-xs relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="flex items-center gap-2 mb-3">
                  <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-muted-foreground">about.ts</span>
                </div>
                <div className="leading-relaxed space-y-1">
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-foreground">= {"{"}</span></div>
                  <div className="pl-4"><span className="text-green-400">name</span><span>: </span><span className="text-yellow-400">"Gulfam Ashraf"</span><span>,</span></div>
                  <div className="pl-4"><span className="text-green-400">role</span><span>: </span><span className="text-yellow-400">"Full Stack Developer"</span><span>,</span></div>
                  <div className="pl-4"><span className="text-green-400">experience</span><span>: </span><span className="text-orange-400">1.5</span><span>,</span></div>
                  <div className="pl-4"><span className="text-green-400">location</span><span>: </span><span className="text-yellow-400">"Pakistan 🇵🇰"</span><span>,</span></div>
                  <div className="pl-4"><span className="text-green-400">remote</span><span>: </span><span className="text-blue-400">true</span><span>,</span></div>
                  <div className="pl-4"><span className="text-green-400">available</span><span>: </span><motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-blue-400"
                  >
                    true
                  </motion.span><span>,</span></div>
                  <div><span>{"}"}</span></div>
                </div>
              </motion.div>

              {/* Stats */}
              <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.05}>
                {STATS.map(({ icon: Icon, value, label, color }, idx) => (
                  <StaggerItem key={label}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      onHoverStart={() => setHoveredStat(idx)}
                      onHoverEnd={() => setHoveredStat(null)}
                      className="p-4 rounded-xl border border-border bg-card/60 cursor-default relative overflow-hidden group"
                    >
                      <motion.div
                        animate={{
                          rotate: hoveredStat === idx ? 360 : 0,
                          scale: hoveredStat === idx ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className={`${color} mb-2 relative z-10`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <AnimatedCounter value={value} delay={idx * 0.1} />
                      <div className="text-xs text-muted-foreground mt-1">{label}</div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredStat === idx ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl"
                      />
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </BookOpenReveal>

          {/* RIGHT SIDE - Opens like a door from RIGHT edge */}
          <BookRightReveal delay={0.1}>
            <div className="space-y-8">
              {/* Skills Section */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  className="flex items-center gap-2 mb-6"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Technical Proficiency</h3>
                </motion.div>
                <div className="space-y-5">
                  {SKILLS.map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.08} />
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-6 border-t border-border/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Award className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                  <span className="text-sm font-semibold">Certifications & Achievements</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["AI Deep Learning (Navttc)", "Advanced Web Development (Navttc)", "Awarded with PM Youth Laptop 2023", "IT Support Specialist (Coursera)", "NetWorking (Coursera)"].map((cert, i) => (
                    <motion.span
                      key={cert}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={headerInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.9 + i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-primary font-medium cursor-default"
                    >
                      {cert}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="flex gap-3 justify-start"
              >
                {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-full bg-card border border-border ${color} transition-all duration-300`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Interests Section */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  className="flex items-center gap-2 mb-6"
                >
                  <div className="p-2 rounded-lg bg-rose-400/10">
                    <Heart className="w-5 h-5 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Interests & Passions</h3>
                </motion.div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {INTERESTS.map(({ icon: Icon, label, color }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={headerInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.08, y: -5 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card/60 cursor-default group"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`${color} group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <span className="text-xs font-medium text-foreground leading-tight text-center">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </BookRightReveal>
        </div>
      </div>
    </section>
  );
}