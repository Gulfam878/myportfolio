// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Github, Linkedin, Twitter, Download, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const TYPING_WORDS = [
//   "Full Stack Developer",
//   "React Expert",
//   "Node.js Engineer",
//   "API Architect",
//   "UI/UX Engineer",
//   "Problem Solver",
// ];

// function useTypewriter(
//   words: string[],
//   typingSpeed = 300,
//   deletingSpeed = 40,
//   pause = 2000
// ) {
//   const [text, setText] = useState("");
//   const [wordIdx, setWordIdx] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   useEffect(() => {
//     const currentWord = words[wordIdx];

//     timeoutRef.current = setTimeout(() => {
//       if (!deleting) {
//         const nextText = currentWord.slice(0, text.length + 1);
//         setText(nextText);

//         if (nextText === currentWord) {
//           timeoutRef.current = setTimeout(() => {
//             setDeleting(true);
//           }, pause);

//           return;
//         }
//       } else {
//         const nextText = currentWord.slice(0, text.length - 1);
//         setText(nextText);

//         if (nextText === "") {
//           setDeleting(false);
//           setWordIdx((prev) => (prev + 1) % words.length);
//         }
//       }
//     }, deleting ? deletingSpeed : typingSpeed);

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [text, deleting, wordIdx, words, typingSpeed, deletingSpeed, pause]);

//   return { text, wordIdx };
// }

// // Responsive particles - fewer on mobile
// const useParticles = () => {
//   const [particles, setParticles] = useState(() => {
//     const count = typeof window !== 'undefined' && window.innerWidth < 640 ? 30 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 50 : 70;
//     return Array.from({ length: count }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 3 + 0.5,
//       duration: Math.random() * 6 + 4,
//       delay: Math.random() * 3,
//       opacity: Math.random() * 0.4 + 0.1,
//     }));
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       const count = window.innerWidth < 640 ? 30 : window.innerWidth < 1024 ? 50 : 70;
//       setParticles(
//         Array.from({ length: count }, (_, i) => ({
//           id: i,
//           x: Math.random() * 100,
//           y: Math.random() * 100,
//           size: Math.random() * 3 + 0.5,
//           duration: Math.random() * 6 + 4,
//           delay: Math.random() * 3,
//           opacity: Math.random() * 0.4 + 0.1,
//         }))
//       );
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return particles;
// };

// // Flip Card Component
// const FlipCard = ({ frontImage, backImage }: { frontImage: string; backImage: string }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div
//       className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 cursor-pointer"
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       <motion.div
//         className="relative w-full h-full preserve-3d"
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//         transition={{ duration: 0.6, ease: "easeInOut" }}
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Front of card */}
//         <div
//           className="absolute w-full h-full rounded-full overflow-hidden backface-hidden"
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-purple-500 p-1 shadow-2xl shadow-primary/40">
//             <div className="w-full h-full rounded-full bg-background overflow-hidden">
//               <img
//                 src={frontImage}
//                 alt="Profile Front"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Back of card */}
//         <div
//           className="absolute w-full h-full rounded-full overflow-hidden backface-hidden"
//           style={{
//             backfaceVisibility: "hidden",
//             transform: "rotateY(180deg)"
//           }}
//         >
//           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary via-purple-500 to-primary p-1 shadow-2xl shadow-secondary/40">
//             <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden flex flex-col items-center justify-center">
//               <img
//                 src={backImage}
//                 alt="Profile Back"
//                 className="w-full h-full object-cover"
//               />
//               {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                 <div className="text-center text-white p-4">
//                   <h3 className="text-lg sm:text-xl font-bold mb-2">Gulfam Ashraf</h3>
//                   <p className="text-xs sm:text-sm">Full Stack Developer</p>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default function Hero() {
//   const { text: typedText, wordIdx } = useTypewriter(TYPING_WORDS);
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 600], [0, 80]);
//   const opacity = useTransform(scrollY, [0, 400], [1, 0]);
//   const particles = useParticles();

//   const scrollToProjects = () =>
//     document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
//   const scrollToContact = () =>
//     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

//   const WORD_COLORS = [
//     "from-blue-400 to-indigo-500",
//     "from-purple-400 to-pink-500",
//     "from-green-400 to-emerald-500",
//     "from-orange-400 to-amber-500",
//     "from-cyan-400 to-blue-500",
//     "from-rose-400 to-pink-500",
//   ];

//   // Replace with your actual image paths
//   const FRONT_IMAGE = "/myimg.png"; // Front image
//   const BACK_IMAGE = "/IMG_3327.JPG"; // Back image (shows on hover)

//   return (
//     <section
//       id="hero"
//       data-testid="section-hero"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-24 md:py-32"
//     >
//       {/* Layered gradient background */}
//       <div className="absolute inset-0 bg-background">
//         <motion.div
//           animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(99,102,241,0.3),transparent)]"
//         />
//         <motion.div
//           animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//           className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_60%,rgba(139,92,246,0.2),transparent)]"
//         />
//         <motion.div
//           animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.15, 0.08] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//           className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_20%_70%,rgba(59,130,246,0.15),transparent)]"
//         />
//       </div>

//       {/* Animated particles */}
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute rounded-full bg-primary"
//           style={{
//             left: `${p.x}%`,
//             top: `${p.y}%`,
//             width: p.size,
//             height: p.size,
//             opacity: p.opacity,
//           }}
//           animate={{
//             y: [-15, 15, -15],
//             x: [-5, 5, -5],
//             opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
//           }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.025] hidden lg:block"
//         style={{
//           backgroundImage:
//             "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
//           {/* Left: Text content */}
//           <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="inline-flex items-center gap-2 mb-4 sm:mb-5 px-3 sm:px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs sm:text-sm font-mono font-medium"
//             >
//               <motion.span
//                 animate={{ rotate: [0, 15, -15, 0] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//               </motion.span>
//               <span className="hidden xs:inline">Available for new opportunities</span>
//               <span className="xs:hidden">Open to work</span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight tracking-tight"
//             >
//               Hi, I'm{" "}
//               <span className="relative inline-block">
//                 <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
//                   Gulfam Ashraf
//                 </span>
//                 <motion.span
//                   className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary hidden sm:block"
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 0.8, delay: 1 }}
//                 />
//               </span>
//             </motion.h1>

//             {/* Typing line */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.35 }}
//               className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-4 sm:mb-5"
//             >
//               <span className="text-base sm:text-xl md:text-2xl font-mono text-muted-foreground">
//                 {"<"}
//                 <span
//                   className={`font-bold bg-gradient-to-r ${WORD_COLORS[wordIdx % WORD_COLORS.length]} bg-clip-text text-transparent`}
//                 >
//                   {typedText}
//                 </span>
//                 <motion.span
//                   animate={{ opacity: [1, 0, 1] }}
//                   transition={{ duration: 0.8, repeat: Infinity }}
//                   className="text-primary"
//                 >
//                   |
//                 </motion.span>
//                 {" />"}
//               </span>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
//             >
//               I craft high-performance web applications from database to deployment.
//               Specializing in React, Node.js, and cloud infrastructure — turning complex
//               problems into elegant, scalable solutions.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
//             >
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   data-testid="button-view-projects"
//                   size="lg"
//                   onClick={scrollToProjects}
//                   className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 sm:px-7 py-2 sm:py-3 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 text-sm sm:text-base"
//                 >
//                   View Projects
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button
//                   data-testid="button-download-cv"
//                   variant="outline"
//                   size="lg"
//                   onClick={scrollToContact}
//                   className="px-5 sm:px-7 py-2 sm:py-3 rounded-xl font-semibold border-border hover:border-primary/60 hover:bg-primary/5 text-sm sm:text-base"
//                 >
//                   <Download className="w-4 h-4 mr-2" />
//                   Download CV
//                 </Button>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.7 }}
//               className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3"
//             >
//               {[
//                 { icon: Github, href: "https://github.com", label: "GitHub" },
//                 { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
//                 { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
//               ].map(({ icon: Icon, href, label }, i) => (
//                 <motion.a
//                   key={label}
//                   data-testid={`link-social-${label.toLowerCase()}`}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.15, y: -3 }}
//                   whileTap={{ scale: 0.9 }}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8 + i * 0.1 }}
//                   className="p-2 sm:p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/10 transition-colors"
//                   aria-label={label}
//                 >
//                   <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
//                 </motion.a>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right: Flip Card with Rotating Outer Circles */}
//           {/* Right: Flip Card with Rotating Outer Circles - Updated sizes */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
//             className="order-1 lg:order-2 flex-shrink-0 mb-6 lg:mb-0"
//           >
//             <div className="relative">
//               {/* Outer rotating ring - DECREASED: smaller outermost ring */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                 className="absolute -inset-4 sm:-inset-6 rounded-full"
//                 style={{
//                   background: "conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent, hsl(var(--secondary)), transparent)",
//                   mask: "radial-gradient(circle, transparent 68%, black 69%)",
//                   WebkitMask: "radial-gradient(circle, transparent 68%, black 69%)",
//                 }}
//               />

//               {/* Inner rotating ring - kept proportional */}
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//                 className="absolute -inset-2 sm:-inset-3 rounded-full border border-primary/20"
//                 style={{
//                   borderTopColor: "hsl(var(--primary))",
//                   borderRightColor: "hsl(var(--secondary))",
//                   borderBottomColor: "hsl(var(--primary)/0.3)",
//                   borderLeftColor: "hsl(var(--secondary)/0.3)",
//                 }}
//               />

//               {/* Dashed rotating ring - kept proportional */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-primary/30"
//               />

//               {/* Counter-rotating dashed ring - outer decorative ring */}
//               <motion.div
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                 className="absolute -inset-6 sm:-inset-8 rounded-full border border-dashed border-secondary/20 hidden md:block"
//               />

//               {/* Flip Card Component - INCREASED: larger inner profile photo */}
//               <FlipCard frontImage={FRONT_IMAGE} backImage={BACK_IMAGE} />

//               {/* Status badge - adjusted positioning */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
//                 className="absolute -bottom-1 -right-1 sm:-bottom-1 sm:-right-2 px-2 py-1 sm:px-2.5 sm:py-1 rounded-full bg-green-500 text-white text-[10px] sm:text-[10px] font-bold shadow-lg shadow-green-500/40 flex items-center gap-1 z-40"
//               >
//                 <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
//                 <span className="hidden xs:inline">Open to work</span>
//                 <span className="xs:hidden">Open</span>
//               </motion.div>

//               {/* Experience badge - adjusted positioning */}
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
//                 className="absolute -top-1 -left-1 sm:-top-1 sm:-left-2 px-2 py-1 sm:px-2.5 sm:py-1 rounded-full bg-card border border-border text-[10px] sm:text-[10px] font-bold shadow-lg flex items-center gap-1 sm:gap-1 z-40"
//               >
//                 <span className="text-primary">1.5+</span>
//                 <span className="text-muted-foreground hidden xs:inline">yrs exp</span>
//                 <span className="text-muted-foreground xs:hidden">exp</span>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.8, duration: 0.6 }}
//           className="flex justify-center mt-12 sm:mt-16"
//         >
//           <motion.button
//             onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
//             className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
//             whileHover={{ y: 3 }}
//           >
//             <span className="text-[10px] sm:text-xs font-mono hidden xs:block">scroll down</span>
//             <span className="text-[10px] sm:text-xs font-mono xs:hidden">↓</span>
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//               className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-muted-foreground/40 group-hover:border-primary/60 flex items-start justify-center pt-1.5 sm:pt-2 transition-colors"
//             >
//               <motion.div
//                 animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-current"
//               />
//             </motion.div>
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }



import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Typing words ──────────────────────────────────────────────────
const TYPING_WORDS = [
  "Full Stack Developer",
  "React Expert",
  "Node.js Engineer",
  "API Architect",
  "UI/UX Engineer",
  "Problem Solver",
];

const WORD_COLORS = [
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-green-400 to-emerald-500",
  "from-orange-400 to-amber-500",
  "from-cyan-400 to-blue-500",
  "from-rose-400 to-pink-500",
];

// ─── Typewriter hook ───────────────────────────────────────────────
function useTypewriter(words: string[], typingSpeed = 90, deletingSpeed = 40, pause = 2200) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIdx];
    timeoutRef.current = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          timeoutRef.current = setTimeout(() => setDeleting(true), pause);
          return;
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((p) => (p + 1) % words.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [text, deleting, wordIdx, words, typingSpeed, deletingSpeed, pause]);

  return { text, wordIdx };
}

// ─── Responsive particles ──────────────────────────────────────────
function useParticles() {
  const make = () => {
    const count = typeof window !== "undefined"
      ? window.innerWidth < 640 ? 30 : window.innerWidth < 1024 ? 50 : 80
      : 80;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 0.5,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.45 + 0.1,
    }));
  };
  const [particles, setParticles] = useState(make);
  useEffect(() => {
    const onResize = () => setParticles(make());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return particles;
}

// ─── Custom cursor ─────────────────────────────────────────────────
function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const pos  = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf  = useRef<number>();
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // trail positions
  const TRAIL = 8;
  const trailPos = useRef(Array.from({ length: TRAIL }, () => ({ x: -100, y: -100 })));

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.matches?.("a,button,[data-hover]")) setHovering(true);
    };
    const onOut  = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.matches?.("a,button,[data-hover]")) setHovering(false);
    };

    const tick = () => {
      // smooth ring
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1);
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top  = ring.current.y + "px";
      }
      // trail
      trailPos.current[0] = { ...pos.current };
      for (let i = 1; i < TRAIL; i++) {
        trailPos.current[i].x = lerp(trailPos.current[i].x, trailPos.current[i - 1].x, 0.35);
        trailPos.current[i].y = lerp(trailPos.current[i].y, trailPos.current[i - 1].y, 0.35);
        const el = trailsRef.current[i];
        if (el) {
          el.style.left    = trailPos.current[i].x + "px";
          el.style.top     = trailPos.current[i].y + "px";
          el.style.opacity = String((1 - i / TRAIL) * 0.3);
        }
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: TRAIL }, (_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailsRef.current[i] = el; }}
          style={{
            position: "fixed",
            width: Math.max(3, 8 - i),
            height: Math.max(3, 8 - i),
            borderRadius: "50%",
            background: "hsl(var(--primary))",
            pointerEvents: "none",
            zIndex: 99996,
            transform: "translate(-50%,-50%)",
            opacity: 0,
            transition: "background 0.2s",
          }}
        />
      ))}
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: clicking ? 5 : 8,
          height: clicking ? 5 : 8,
          borderRadius: "50%",
          background: hovering
            ? "hsl(var(--secondary))"
            : "hsl(var(--primary))",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%,-50%)",
          transition: "width 0.15s, height 0.15s, background 0.2s",
          boxShadow: "0 0 10px hsl(var(--primary)/0.6)",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: clicking ? 24 : hovering ? 52 : 36,
          height: clicking ? 24 : hovering ? 52 : 36,
          borderRadius: "50%",
          border: `1.5px solid hsl(var(--primary)/${hovering ? "0.85" : "0.45"})`,
          background: hovering ? "hsl(var(--primary)/0.06)" : "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-50%,-50%)",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.2s, background 0.2s",
        }}
      />
    </>
  );
}

// ─── Mouse glow that follows cursor ───────────────────────────────
function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, hsl(var(--primary)/0.07) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        transform: "translate(-50%,-50%)",
        transition: "left 0.07s linear, top 0.07s linear",
      }}
    />
  );
}

// ─── Anti-gravity particle field ──────────────────────────────────
function AntiGravityParticles({ particles }: {
  particles: ReturnType<typeof useParticles>;
}) {
  const mouse = useRef({ x: -9999, y: -9999 });
  const refs  = useRef<(HTMLDivElement | null)[]>([]);
  const anim  = useRef<number>();
  // store current positions
  const positions = useRef(particles.map((p) => ({
    x: (p.x / 100) * (typeof window !== "undefined" ? window.innerWidth : 1200),
    y: (p.y / 100) * (typeof window !== "undefined" ? window.innerHeight : 800),
    vx: 0,
    vy: 0,
    ox: p.x,
    oy: p.y,
  })));

  useEffect(() => {
    positions.current = particles.map((p) => ({
      x: (p.x / 100) * window.innerWidth,
      y: (p.y / 100) * window.innerHeight,
      vx: 0,
      vy: 0,
      ox: p.x,
      oy: p.y,
    }));
  }, [particles]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    const REPEL  = 120;   // repel radius px
    const FORCE  = 3500;  // force strength
    const SPRING = 0.035; // return spring
    const DAMP   = 0.88;  // damping

    const tick = () => {
      positions.current.forEach((p, i) => {
        const originX = (p.ox / 100) * window.innerWidth;
        const originY = (p.oy / 100) * window.innerHeight;
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel from mouse
        if (dist < REPEL && dist > 0) {
          const factor = (REPEL - dist) / REPEL;
          p.vx += (dx / dist) * factor * factor * FORCE * 0.016;
          p.vy += (dy / dist) * factor * factor * FORCE * 0.016;
        }

        // Spring back to origin
        p.vx += (originX - p.x) * SPRING;
        p.vy += (originY - p.y) * SPRING;

        // Damping
        p.vx *= DAMP;
        p.vy *= DAMP;

        p.x += p.vx;
        p.y += p.vy;

        const el = refs.current[i];
        if (el) {
          el.style.left = p.x + "px";
          el.style.top  = p.y + "px";
        }
      });
      anim.current = requestAnimationFrame(tick);
    };
    anim.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (anim.current) cancelAnimationFrame(anim.current);
    };
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={p.id}
          ref={(el) => { refs.current[i] = el; }}
          style={{
            position: "absolute",
            borderRadius: "50%",
            width: p.size,
            height: p.size,
            background: i % 3 === 0
              ? "hsl(var(--primary))"
              : i % 3 === 1
              ? "hsl(var(--secondary))"
              : "hsl(var(--primary)/0.5)",
            opacity: p.opacity,
            pointerEvents: "none",
            transform: "translate(-50%,-50%)",
            boxShadow: p.size > 2
              ? `0 0 ${p.size * 2}px hsl(var(--primary)/0.4)`
              : "none",
            transition: "opacity 0.3s",
          }}
        />
      ))}
    </>
  );
}

// ─── Light beam ────────────────────────────────────────────────────
function Beam({ top, delay, duration }: { top: string; delay: number; duration: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left: 0,
        height: "1.5px",
        width: "140px",
        background:
          "linear-gradient(90deg, transparent, hsl(var(--primary)/0.75), transparent)",
        pointerEvents: "none",
        zIndex: 2,
      }}
      animate={{ x: ["-5%", "110vw"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: Math.random() * 4 + 3,
      }}
    />
  );
}

// ─── Scroll hint arrow ─────────────────────────────────────────────
function ScrollHint({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <motion.button
            onClick={onClick}
            className="flex flex-col items-center gap-2 group cursor-pointer"
            whileHover={{ y: 4 }}
          >
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors tracking-widest uppercase">
              scroll down
            </span>
            {/* Pill */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 group-hover:border-primary/70 flex items-start justify-center pt-2 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors"
              />
            </motion.div>
            {/* Chevrons cascade */}
            <div className="flex flex-col items-center -mt-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2], y: [0, 4, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronDown className="w-4 h-4 text-primary -mt-1.5" />
                </motion.div>
              ))}
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Flip Card ─────────────────────────────────────────────────────
function FlipCard({ frontImage, backImage }: { frontImage: string; backImage: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute w-full h-full rounded-full overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-purple-500 p-1 shadow-2xl shadow-primary/40">
            <div className="w-full h-full rounded-full bg-background overflow-hidden">
              <img src={frontImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* Back */}
        <div
          className="absolute w-full h-full rounded-full overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary via-purple-500 to-primary p-1 shadow-2xl shadow-secondary/40">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src={backImage} alt="Profile back" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main Hero ─────────────────────────────────────────────────────
export default function Hero() {
  const { text: typedText, wordIdx } = useTypewriter(TYPING_WORDS);
  const { scrollY } = useScroll();
  const y       = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const particles = useParticles();

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  const FRONT_IMAGE = "/myimg.png";
  const BACK_IMAGE  = "/IMG_3327.JPG";

  return (
    <>
      <CustomCursor />

      <section
        id="hero"
        data-testid="section-hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-24 md:py-32"
        style={{ cursor: "none" }}
      >
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-background">
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(99,102,241,0.35),transparent)]"
          />
          <motion.div
            animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_60%,rgba(139,92,246,0.22),transparent)]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_20%_70%,rgba(59,130,246,0.18),transparent)]"
          />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.026] hidden lg:block"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Anti-gravity particles */}
        <AntiGravityParticles particles={particles} />

        {/* Light beams */}
        <Beam top="18%"  delay={0}   duration={5.5} />
        <Beam top="42%"  delay={2.2} duration={7}   />
        <Beam top="68%"  delay={4.5} duration={6.2} />

        {/* Mouse glow */}
        <MouseGlow />

        {/* Main content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

            {/* ── Left: text ── */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-4 sm:mb-5 px-3 sm:px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs sm:text-sm font-mono font-medium"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </motion.span>
                Available for new opportunities
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight tracking-tight"
              >
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
                    Gulfam Ashraf
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.9, delay: 1 }}
                  />
                </span>
              </motion.h1>

              {/* Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-4 sm:mb-5"
              >
                <span className="text-base sm:text-xl md:text-2xl font-mono text-muted-foreground">
                  {"<"}
                  <span className={`font-bold bg-gradient-to-r ${WORD_COLORS[wordIdx % WORD_COLORS.length]} bg-clip-text text-transparent`}>
                    {typedText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-primary"
                  >|</motion.span>
                  {" />"}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
              >
                I craft high-performance web applications from database to deployment.
                Specializing in React, Node.js, and cloud infrastructure — turning complex
                problems into elegant, scalable solutions.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={scrollToProjects}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 sm:px-7 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 relative overflow-hidden group text-sm sm:text-base"
                  >
                    <span className="relative z-10">View Projects</span>
                    <motion.span
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%", skewX: -15 }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToContact}
                    className="px-5 sm:px-7 rounded-xl font-semibold border-border hover:border-primary/60 hover:bg-primary/5 text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3"
              >
                {[
                  { icon: Github,   href: "https://github.com",   label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Twitter,  href: "https://twitter.com",  label: "Twitter" },
                ].map(({ icon: Icon, href, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.18, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="p-2 sm:p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/10 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex justify-center lg:justify-start gap-8 mt-8 pt-7 border-t border-border/40"
              >
                {[
                  { num: "1.5+", label: "Years Exp" },
                  { num: "20+",  label: "Projects" },
                  { num: "15+",  label: "Clients" },
                ].map((s) => (
                  <motion.div key={s.label} whileHover={{ y: -3 }} className="text-center lg:text-left">
                    <div className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {s.num}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono mt-0.5">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Flip card ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="order-1 lg:order-2 flex-shrink-0 mb-6 lg:mb-0"
            >
              <div className="relative">
                {/* Conic spinner ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 sm:-inset-6 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent, hsl(var(--secondary)), transparent)",
                    mask: "radial-gradient(circle, transparent 68%, black 69%)",
                    WebkitMask: "radial-gradient(circle, transparent 68%, black 69%)",
                  }}
                />
                {/* Inner spinner */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 sm:-inset-3 rounded-full border border-primary/20"
                  style={{
                    borderTopColor: "hsl(var(--primary))",
                    borderRightColor: "hsl(var(--secondary))",
                    borderBottomColor: "hsl(var(--primary)/0.3)",
                    borderLeftColor: "hsl(var(--secondary)/0.3)",
                  }}
                />
                {/* Dashed rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-primary/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 sm:-inset-8 rounded-full border border-dashed border-secondary/20 hidden md:block"
                />
                {/* Pulse glow */}
                <motion.div
                  animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-6 rounded-full bg-primary/10 blur-xl pointer-events-none"
                />

                <FlipCard frontImage={FRONT_IMAGE} backImage={BACK_IMAGE} />

                {/* Status badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-1 -right-1 sm:-bottom-1 sm:-right-2 px-2 py-1 sm:px-2.5 sm:py-1 rounded-full bg-green-500 text-white text-[10px] font-bold shadow-lg shadow-green-500/40 flex items-center gap-1 z-40"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Open to work
                </motion.div>
                {/* Exp badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  className="absolute -top-1 -left-1 sm:-top-1 sm:-left-2 px-2 py-1 sm:px-2.5 sm:py-1 rounded-full bg-card border border-border text-[10px] font-bold shadow-lg flex items-center gap-1 z-40"
                >
                  <span className="text-primary">1.5+</span>
                  <span className="text-muted-foreground">yrs exp</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── Scroll hint ── */}
          <ScrollHint onClick={scrollToAbout} />
        </motion.div>
      </section>
    </>
  );
}