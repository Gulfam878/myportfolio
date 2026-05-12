// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
//   SiExpress, SiPostgresql, SiMongodb, SiRedis,
//   SiDocker, SiGithub, SiGit, SiTailwindcss,
//   SiPython, SiGraphql, SiLinux, SiVercel,
// } from "react-icons/si";

// const TECHS = [
//   { icon: SiReact, name: "React", color: "#61DAFB", category: "Frontend" },
//   { icon: SiNextdotjs, name: "Next.js", color: "#ffffff", category: "Frontend" },
//   { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "Language" },
//   { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", category: "Frontend" },
//   { icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "Backend" },
//   { icon: SiExpress, name: "Express", color: "#ffffff", category: "Backend" },
//   { icon: SiGraphql, name: "GraphQL", color: "#E10098", category: "Backend" },
//   { icon: SiPython, name: "Python", color: "#3776AB", category: "Language" },
//   { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", category: "Database" },
//   { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "Database" },
//   { icon: SiRedis, name: "Redis", color: "#DC382D", category: "Database" },
//   { icon: SiDocker, name: "Docker", color: "#2496ED", category: "DevOps" },
//   { icon: SiLinux, name: "Linux", color: "#FCC624", category: "DevOps" },
//   { icon: SiGit, name: "Git", color: "#F05032", category: "DevOps" },
//   { icon: SiGithub, name: "GitHub", color: "#ffffff", category: "DevOps" },
//   { icon: SiVercel, name: "Vercel", color: "#ffffff", category: "DevOps" },
// ];

// const CATEGORY_COLORS: Record<string, string> = {
//   Frontend: "text-blue-400 border-blue-400/30 bg-blue-400/10",
//   Backend: "text-green-400 border-green-400/30 bg-green-400/10",
//   Language: "text-purple-400 border-purple-400/30 bg-purple-400/10",
//   Database: "text-orange-400 border-orange-400/30 bg-orange-400/10",
//   DevOps: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
// };

// export default function TechStack() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="tech" data-testid="section-tech" className="py-28 px-4 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-card/30" />
//       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
//       <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
//       <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm font-mono text-primary mb-2 block">// tech_stack</span>
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technologies I Use</h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: 64 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"
//           />
//           <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
//             My go-to toolkit for building production-ready applications from front to back.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {TECHS.map((tech, i) => {
//             const Icon = tech.icon;
//             return (
//               <motion.div
//                 key={tech.name}
//                 data-testid={`card-tech-${tech.name.toLowerCase()}`}
//                 initial={{ opacity: 0, y: 40, scale: 0.85 }}
//                 animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//                 transition={{
//                   duration: 0.5,
//                   delay: i * 0.05,
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                 }}
//                 whileHover={{ y: -6, scale: 1.06 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative group p-5 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 cursor-default overflow-hidden"
//               >
//                 {/* Animated glow on hover */}
//                 <motion.div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{
//                     background: `radial-gradient(circle at 50% 50%, ${tech.color}18 0%, transparent 70%)`,
//                   }}
//                 />
//                 {/* Shimmer sweep on hover */}
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

//                 <div className="relative z-10 flex flex-col items-center gap-3">
//                   <div
//                     className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
//                     style={{ backgroundColor: `${tech.color}15` }}
//                   >
//                     <Icon className="w-8 h-8" style={{ color: tech.color }} />
//                   </div>
//                   <span className="text-sm font-semibold text-foreground">{tech.name}</span>
//                   <span
//                     className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${CATEGORY_COLORS[tech.category]}`}
//                   >
//                     {tech.category}
//                   </span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Floating tech count */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.9 }}
//           className="mt-12 text-center"
//         >
//           <span className="text-muted-foreground text-sm font-mono">
//             + many more tools depending on project needs
//           </span>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// import { useRef, useState, useEffect } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
//   SiExpress, SiPostgresql, SiMongodb, SiRedis,
//   SiDocker, SiGithub, SiGit, SiTailwindcss,
//   SiPython, SiGraphql, SiLinux, SiVercel,
//   SiJavascript, SiHtml5, SiCss, SiFigma,
// } from "react-icons/si";
// import { ChevronLeft, ChevronRight, Sparkles, Code2, Cpu, Database, Cloud } from "lucide-react";

// const TECHS = [
//   { icon: SiReact, name: "React", color: "#61DAFB", category: "Frontend" },
//   { icon: SiNextdotjs, name: "Next.js", color: "#ffffff", category: "Frontend" },
//   { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "Language" },
//   { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", category: "Language" },
//   { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", category: "Frontend" },
//   { icon: SiHtml5, name: "HTML5", color: "#E34F26", category: "Frontend" },
//   { icon: SiCss, name: "CSS3", color: "#1572B6", category: "Frontend" },
//   { icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "Backend" },
//   { icon: SiExpress, name: "Express", color: "#ffffff", category: "Backend" },
//   { icon: SiGraphql, name: "GraphQL", color: "#E10098", category: "Backend" },
//   { icon: SiPython, name: "Python", color: "#3776AB", category: "Language" },
//   { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", category: "Database" },
//   { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "Database" },
//   { icon: SiRedis, name: "Redis", color: "#DC382D", category: "Database" },
//   { icon: SiDocker, name: "Docker", color: "#2496ED", category: "DevOps" },
//   { icon: SiLinux, name: "Linux", color: "#FCC624", category: "DevOps" },
//   { icon: SiGit, name: "Git", color: "#F05032", category: "DevOps" },
//   { icon: SiGithub, name: "GitHub", color: "#ffffff", category: "DevOps" },
//   { icon: SiVercel, name: "Vercel", color: "#ffffff", category: "DevOps" },
//   { icon: SiFigma, name: "Figma", color: "#F24E1E", category: "Design" },
// ];

// const CATEGORIES = ["All", "Frontend", "Backend", "Language", "Database", "DevOps", "Design"];
// const CATEGORY_COLORS: Record<string, string> = {
//   Frontend: "text-blue-400 border-blue-400/30 bg-blue-400/10",
//   Backend: "text-green-400 border-green-400/30 bg-green-400/10",
//   Language: "text-purple-400 border-purple-400/30 bg-purple-400/10",
//   Database: "text-orange-400 border-orange-400/30 bg-orange-400/10",
//   DevOps: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
//   Design: "text-pink-400 border-pink-400/30 bg-pink-400/10",
// };

// // Category filter button component
// function CategoryButton({ category, active, onClick, index }: { category: string; active: boolean; onClick: () => void; index: number }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-50px" });
  
//   return (
//     <motion.button
//       ref={ref}
//       initial={{ opacity: 0, y: 20, scale: 0.8 }}
//       animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//       transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
//       whileHover={{ y: -2, scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onClick}
//       className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
//         active
//           ? "bg-primary text-white shadow-lg shadow-primary/30"
//           : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
//       }`}
//     >
//       {category}
//     </motion.button>
//   );
// }

// // Animated tech card component
// function TechCard({ tech, index, inView }: { tech: typeof TECHS[0]; index: number; inView: boolean }) {
//   const Icon = tech.icon;
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <motion.div
//       custom={index}
//       initial={{ opacity: 0, y: 50, rotateX: -15 }}
//       animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.03,
//         type: "spring",
//         stiffness: 200,
//         damping: 20,
//       }}
//       whileHover={{ 
//         y: -8, 
//         scale: 1.05,
//         transition: { type: "spring", stiffness: 400 }
//       }}
//       whileTap={{ scale: 0.98 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="relative group p-5 rounded-2xl border border-border bg-card cursor-default overflow-hidden"
//       style={{
//         boxShadow: isHovered ? `0 10px 30px -10px ${tech.color}40` : "none",
//       }}
//     >
//       {/* Animated gradient background on hover */}
//       <motion.div
//         className="absolute inset-0 opacity-0 transition-opacity duration-500"
//         animate={{ opacity: isHovered ? 1 : 0 }}
//         style={{
//           background: `radial-gradient(circle at 50% 50%, ${tech.color}15 0%, transparent 80%)`,
//         }}
//       />
      
//       {/* Shimmer line that sweeps across on hover */}
//       <motion.div
//         className="absolute inset-0 -translate-x-full"
//         animate={{ x: isHovered ? "100%" : "-100%" }}
//         transition={{ duration: 0.6, ease: "easeInOut" }}
//         style={{
//           background: `linear-gradient(90deg, transparent, ${tech.color}30, transparent)`,
//         }}
//       />
      
//       {/* Rotating border glow */}
//       <motion.div
//         className="absolute inset-0 rounded-2xl opacity-0"
//         animate={{ opacity: isHovered ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         style={{
//           boxShadow: `0 0 20px ${tech.color}`,
//         }}
//       />
      
//       <div className="relative z-10 flex flex-col items-center gap-3">
//         {/* Icon container with floating animation on hover */}
//         <motion.div
//           animate={{ 
//             y: isHovered ? [-2, -6, -2] : 0,
//             rotate: isHovered ? [0, 5, -5, 0] : 0,
//           }}
//           transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
//           className="p-3 rounded-xl transition-all duration-300"
//           style={{ backgroundColor: `${tech.color}15` }}
//         >
//           <motion.div
//             animate={{ rotate: isHovered ? 360 : 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Icon className="w-8 h-8" style={{ color: tech.color }} />
//           </motion.div>
//         </motion.div>
        
//         {/* Tech name with glow on hover */}
//         <motion.span 
//           className="text-sm font-semibold text-foreground"
//           animate={{ 
//             textShadow: isHovered ? `0 0 8px ${tech.color}` : "none",
//             color: isHovered ? tech.color : undefined,
//           }}
//         >
//           {tech.name}
//         </motion.span>
        
//         {/* Category badge with pulse on hover */}
//         <motion.span
//           animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
//           transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
//           className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${CATEGORY_COLORS[tech.category]}`}
//         >
//           {tech.category}
//         </motion.span>
//       </div>
//     </motion.div>
//   );
// }

// // Slider component for mobile
// function TechSlider({ techs, inView }: { techs: typeof TECHS; inView: boolean }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const itemsPerPage = 3;
//   const totalPages = Math.ceil(techs.length / itemsPerPage);
  
//   const nextSlide = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % totalPages);
//   };
  
//   const prevSlide = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
//   };
  
//   const currentTechs = techs.slice(
//     currentIndex * itemsPerPage,
//     (currentIndex + 1) * itemsPerPage
//   );
  
//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.4, type: "spring", stiffness: 300 }
//     },
//     exit: (direction: number) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };
  
//   return (
//     <div className="lg:hidden mt-8">
//       <div className="relative overflow-hidden">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             className="grid grid-cols-3 gap-3"
//           >
//             {currentTechs.map((tech, idx) => (
//               <TechCard key={tech.name} tech={tech} index={idx} inView={inView} />
//             ))}
//           </motion.div>
//         </AnimatePresence>
        
//         {/* Navigation buttons */}
//         <motion.button
//           initial={{ opacity: 0, scale: 0 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.8 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-all"
//         >
//           <ChevronLeft className="w-4 h-4" />
//         </motion.button>
        
//         <motion.button
//           initial={{ opacity: 0, scale: 0 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.9 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-all"
//         >
//           <ChevronRight className="w-4 h-4" />
//         </motion.button>
//       </div>
      
//       {/* Dot indicators */}
//       <div className="flex justify-center gap-2 mt-6">
//         {Array.from({ length: totalPages }).map((_, idx) => (
//           <motion.button
//             key={idx}
//             initial={{ scale: 0 }}
//             animate={inView ? { scale: 1 } : {}}
//             transition={{ delay: 1 + idx * 0.05 }}
//             whileHover={{ scale: 1.2 }}
//             onClick={() => setCurrentIndex(idx)}
//             className={`transition-all duration-300 ${
//               idx === currentIndex
//                 ? "w-6 h-2 bg-primary rounded-full"
//                 : "w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/60"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function TechStack() {
//   const ref = useRef(null);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sliderPosition, setSliderPosition] = useState(0);
  
//   const filteredTechs = selectedCategory === "All"
//     ? TECHS
//     : TECHS.filter(tech => tech.category === selectedCategory);
  
//   // Counter for tech stats
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (inView) {
//       let start = 0;
//       const duration = 2000;
//       const increment = filteredTechs.length / (duration / 16);
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= filteredTechs.length) {
//           setCount(filteredTechs.length);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);
//       return () => clearInterval(timer);
//     }
//   }, [inView, filteredTechs.length]);

//   return (
//     <section id="tech" data-testid="section-tech" className="py-28 px-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.1, 1],
//           rotate: [0, 180, 360],
//         }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//         className="absolute inset-0 bg-card/30"
//       />
      
//       {/* Floating tech particles */}
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0 }}
//           animate={{ 
//             opacity: [0, 0.5, 0],
//             y: [0, -100, -200],
//             x: [0, (i % 2 === 0 ? 50 : -50)],
//           }}
//           transition={{ 
//             duration: 8 + i * 0.5,
//             delay: i * 0.3,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute w-1 h-1 rounded-full bg-primary/30"
//           style={{ left: `${(i * 37) % 100}%`, top: "100%" }}
//         />
//       ))}
      
//       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
//       <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
//       {/* Animated gradient orbs */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.3, 1],
//           x: [0, 50, 0],
//           y: [0, -30, 0],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
//       />
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.4, 1],
//           x: [0, -50, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
//       />

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header with enhanced animations */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <motion.span 
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="text-sm font-mono text-primary mb-2 block inline-flex items-center gap-2 justify-center"
//           >
//             <Code2 className="w-3 h-3" />
//             // tech_stack
//             <Sparkles className="w-3 h-3" />
//           </motion.span>
          
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.3 }}
//             className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
//           >
//             Technologies I Use
//           </motion.h2>
          
//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: 100 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto"
//           />
          
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.5 }}
//             className="text-muted-foreground mt-4 max-w-xl mx-auto"
//           >
//             My go-to toolkit for building production-ready applications from front to back.
//           </motion.p>
//         </motion.div>

//         {/* Category filters */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-2 mb-10"
//         >
//           {CATEGORIES.map((category, idx) => (
//             <CategoryButton
//               key={category}
//               category={category}
//               active={selectedCategory === category}
//               onClick={() => setSelectedCategory(category)}
//               index={idx}
//             />
//           ))}
//         </motion.div>

//         {/* Stats counter */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={inView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ delay: 0.4, type: "spring" }}
//           className="flex justify-center gap-8 mb-10"
//         >
//           <div className="text-center">
//             <div className="flex items-center gap-2 text-2xl font-bold text-primary">
//               <Database className="w-5 h-5" />
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 {count}
//               </motion.span>
//             </div>
//             <div className="text-xs text-muted-foreground">Technologies</div>
//           </div>
//           <div className="text-center">
//             <div className="flex items-center gap-2 text-2xl font-bold text-secondary">
//               <Cpu className="w-5 h-5" />
//               <span>{CATEGORIES.length - 1}</span>
//             </div>
//             <div className="text-xs text-muted-foreground">Categories</div>
//           </div>
//           <div className="text-center">
//             <div className="flex items-center gap-2 text-2xl font-bold text-green-400">
//               <Cloud className="w-5 h-5" />
//               <span>∞</span>
//             </div>
//             <div className="text-xs text-muted-foreground">Possibilities</div>
//           </div>
//         </motion.div>

//         {/* Desktop grid view */}
//         <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           <AnimatePresence mode="wait">
//             {filteredTechs.map((tech, i) => (
//               <TechCard key={tech.name} tech={tech} index={i} inView={inView} />
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Mobile slider view */}
//         <TechSlider techs={filteredTechs} inView={inView} />

//         {/* Floating tech count with animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 1, type: "spring" }}
//           className="mt-12 text-center"
//         >
//           <motion.span 
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="text-muted-foreground text-sm font-mono inline-flex items-center gap-2"
//           >
//             <Sparkles className="w-3 h-3" />
//             + many more tools depending on project needs
//             <Sparkles className="w-3 h-3" />
//           </motion.span>
//         </motion.div>
        
//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ delay: 1.2 }}
//           className="mt-8 flex justify-center"
//         >
//           <motion.div
//             animate={{ y: [0, 5, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-6 h-10 rounded-full border-2 border-border flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [2, 12, 2] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1 h-2 rounded-full bg-primary mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }






import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiExpress, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiGithub, SiGit, SiTailwindcss,
  SiPython, SiGraphql, SiLinux, SiVercel,
  SiJavascript, SiHtml5, SiCss, SiFigma,
} from "react-icons/si";
import { ChevronLeft, ChevronRight, Sparkles, Code2, Cpu, Database, Cloud } from "lucide-react";

const TECHS = [
  { icon: SiReact, name: "React", color: "#61DAFB", category: "Frontend" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff", category: "Frontend" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "Language" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", category: "Language" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", category: "Frontend" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26", category: "Frontend" },
  { icon: SiCss, name: "CSS3", color: "#1572B6", category: "Frontend" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "Backend" },
  { icon: SiExpress, name: "Express", color: "#ffffff", category: "Backend" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098", category: "Backend" },
  { icon: SiPython, name: "Python", color: "#3776AB", category: "Language" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", category: "Database" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "Database" },
  { icon: SiRedis, name: "Redis", color: "#DC382D", category: "Database" },
  { icon: SiDocker, name: "Docker", color: "#2496ED", category: "DevOps" },
  { icon: SiLinux, name: "Linux", color: "#FCC624", category: "DevOps" },
  { icon: SiGit, name: "Git", color: "#F05032", category: "DevOps" },
  { icon: SiGithub, name: "GitHub", color: "#ffffff", category: "DevOps" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff", category: "DevOps" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E", category: "Design" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Language", "Database", "DevOps", "Design"];
const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  Backend: "text-green-400 border-green-400/30 bg-green-400/10",
  Language: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  Database: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  DevOps: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  Design: "text-pink-400 border-pink-400/30 bg-pink-400/10",
};

// Category filter button component
function CategoryButton({ category, active, onClick, index }: { category: string; active: boolean; onClick: () => void; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
        active
          ? "bg-primary text-white shadow-lg shadow-primary/30"
          : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
      }`}
    >
      {category}
    </motion.button>
  );
}

// Animated tech card component
function TechCard({ tech, index, inView }: { tech: typeof TECHS[0]; index: number; inView: boolean }) {
  const Icon = tech.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.03,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.05,
        transition: { type: "spring", stiffness: 400 }
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group p-5 rounded-2xl border border-border bg-card cursor-default overflow-hidden"
      style={{
        boxShadow: isHovered ? `0 10px 30px -10px ${tech.color}40` : "none",
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${tech.color}15 0%, transparent 80%)`,
        }}
      />
      
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          background: `linear-gradient(90deg, transparent, ${tech.color}30, transparent)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        <motion.div
          animate={{ 
            y: isHovered ? [-2, -6, -2] : 0,
            rotate: isHovered ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
          className="p-3 rounded-xl transition-all duration-300"
          style={{ backgroundColor: `${tech.color}15` }}
        >
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8" style={{ color: tech.color }} />
          </motion.div>
        </motion.div>
        
        <motion.span 
          className="text-sm font-semibold text-foreground"
          animate={{ 
            textShadow: isHovered ? `0 0 8px ${tech.color}` : "none",
            color: isHovered ? tech.color : undefined,
          }}
        >
          {tech.name}
        </motion.span>
        
        <motion.span
          animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
          className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${CATEGORY_COLORS[tech.category]}`}
        >
          {tech.category}
        </motion.span>
      </div>
    </motion.div>
  );
}

// MARQUEE / TICKER STYLE SLIDER (like the one you showed)
function TechMarquee({ techs, inView }: { techs: typeof TECHS; inView: boolean }) {
  // Get all tech names for the marquee
  const allTechNames = techs.map(t => t.name);
  // Duplicate for seamless loop
  const marqueeItems = [...allTechNames, ...allTechNames, ...allTechNames];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.8 }}
      className="mt-16 overflow-hidden py-4 border-y border-[rgba(139,92,246,0.1)]"
    >
      <div className="marquee-track flex gap-8 whitespace-nowrap animate-marquee">
        {marqueeItems.map((tech, idx) => (
          <span
            key={`${tech}-${idx}`}
            className="text-sm font-mono text-[#475569] whitespace-nowrap hover:text-primary transition-colors duration-300"
          >
            {tech} <span className="text-[#2d2d3d] mx-2">✦</span>
          </span>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 70s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredTechs = selectedCategory === "All"
    ? TECHS
    : TECHS.filter(tech => tech.category === selectedCategory);
  
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = filteredTechs.length / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= filteredTechs.length) {
          setCount(filteredTechs.length);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, filteredTechs.length]);

  return (
    <section id="tech" data-testid="section-tech" className="py-28 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-card/30"
      />
      
      {/* Floating tech particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            y: [0, -100, -200],
            x: [0, (i % 2 === 0 ? 50 : -50)],
          }}
          transition={{ 
            duration: 8 + i * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{ left: `${(i * 37) % 100}%`, top: "100%" }}
        />
      ))}
      
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-sm font-mono text-primary mb-2 block inline-flex items-center gap-2 justify-center"
          >
            <Code2 className="w-3 h-3" />
            // tech_stack
            <Sparkles className="w-3 h-3" />
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent"
          >
            Technologies I Use
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            My go-to toolkit for building production-ready applications from front to back.
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((category, idx) => (
            <CategoryButton
              key={category}
              category={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              index={idx}
            />
          ))}
        </motion.div>

        {/* Stats counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, type: "spring" }}
          className="flex justify-center gap-8 mb-10"
        >
          <div className="text-center">
            <div className="flex items-center gap-2 text-2xl font-bold text-primary">
              <Database className="w-5 h-5" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {count}
              </motion.span>
            </div>
            <div className="text-xs text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 text-2xl font-bold text-secondary">
              <Cpu className="w-5 h-5" />
              <span>{CATEGORIES.length - 1}</span>
            </div>
            <div className="text-xs text-muted-foreground">Categories</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 text-2xl font-bold text-green-400">
              <Cloud className="w-5 h-5" />
              <span>∞</span>
            </div>
            <div className="text-xs text-muted-foreground">Possibilities</div>
          </div>
        </motion.div>

        {/* Desktop grid view */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <AnimatePresence mode="wait">
            {filteredTechs.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} inView={inView} />
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile grid view */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredTechs.slice(0, 6).map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* MARQUEE / TICKER STYLE SLIDER - Like your example */}
        <TechMarquee techs={filteredTechs} inView={inView} />

        {/* Floating tech count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, type: "spring" }}
          className="mt-12 text-center"
        >
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground text-sm font-mono inline-flex items-center gap-2"
          >
            <Sparkles className="w-3 h-3" />
            + many more tools depending on project needs
            <Sparkles className="w-3 h-3" />
          </motion.span>
        </motion.div>
        
        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-8 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-border flex justify-center"
          >
            <motion.div
              animate={{ y: [2, 12, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary mt-2"
            />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}