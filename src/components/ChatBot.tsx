// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

// type Message = { role: "bot" | "user"; text: string; id: number };

// const BOT_RESPONSES: { keywords: string[]; response: string }[] = [
//   {
//     keywords: ["who", "about", "yourself", "introduce", "name"],
//     response: "Hi! I'm Gulfam Ashraf — a full-stack web developer with 6+ years of experience. I build high-performance web apps from database to deployment, specializing in React, Node.js, and cloud infrastructure. I'm currently open to new opportunities!",
//   },
//   {
//     keywords: ["skill", "tech", "technology", "know", "use", "stack", "language"],
//     response: "My core stack is React/Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, and Redis. I'm also strong with Docker, AWS, GraphQL, Python, and Tailwind CSS. Basically, I'm comfortable anywhere in the web stack.",
//   },
//   {
//     keywords: ["project", "built", "work", "portfolio", "app", "made"],
//     response: "Some highlights: ShopSphere (e-commerce platform with AI recommendations), Nexus Chat (real-time messaging for 10k+ users), Luminary AI (multi-LLM content dashboard), TaskFlow SaaS (project management with Kanban & Gantt charts), and an API Gateway handling 5M+ requests/day.",
//   },
//   {
//     keywords: ["experience", "job", "work", "company", "employer", "career", "position"],
//     response: "As a full Stack Developer at National Book Foundation (2022–Present), Vercel (Full Stack Developer, 2020–2022), and Shopify (Frontend Engineer, 2018–2020). Each role pushed my skills further — from real-time systems to open-source contributions.",
//   },
//   {
//     keywords: ["education", "degree", "study", "university", "school", "college"],
//     response: "I hold an M.S. in Computer Science from Stanford (2018), specializing in Distributed Systems, and a B.S. from UC Berkeley (2016). My senior thesis was on real-time collaborative editing algorithms.",
//   },
//   {
//     keywords: ["contact", "hire", "reach", "email", "message", "available", "freelance"],
//     response: "You can reach me at gulfamashraf878@gmail.com or use the Contact section on this page. I'm open to freelance projects and full-time roles. Based in San Francisco but fully remote-friendly!",
//   },
//   {
//     keywords: ["service", "offer", "do", "provide", "help"],
//     response: "I offer: Full Stack Development (React + Node.js), API Design & Integration, UI/UX Engineering, and Cloud/DevOps setup (AWS, Docker, CI/CD). Whether it's greenfield or legacy modernization — I've done both.",
//   },
//   {
//     keywords: ["salary", "rate", "cost", "price", "charge"],
//     response: "My rates vary by project scope and duration. For freelance work, I typically charge hourly or on a project basis. Reach out via the Contact form and I'll send a detailed proposal!",
//   },
//   {
//     keywords: ["fun", "hobby", "outside", "free time", "interest", "personal"],
//     response: "Outside of coding, I contribute to open source, write technical articles, and experiment with new frameworks. I also love hiking and am an avid espresso nerd — single-origin pour-overs only.",
//   },
//   {
//     keywords: ["stripe", "vercel", "shopify"],
//     response: "Yes! I've worked at all three. At Stripe I built merchant-facing dashboard features. At Vercel I optimized build pipelines and contributed to Next.js. At Shopify I built Polaris component library features used by 100K+ merchants. Each role was formative.",
//   },
// ];

// const QUICK_QUESTIONS = [
//   "Tell me about yourself",
//   "What skills do you have?",
//   "Show me your projects",
//   "How can I hire you?",
// ];

// let msgId = 0;

// function getBotReply(input: string): string {
//   const lower = input.toLowerCase();
//   for (const { keywords, response } of BOT_RESPONSES) {
//     if (keywords.some((kw) => lower.includes(kw))) return response;
//   }
//   return "Great question! I can tell you about Gulfam's skills, projects, work experience, education, or how to get in touch. What would you like to know?";
// }

// export default function ChatBot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: "bot",
//       text: "Hey there! I'm Gulfam's AI assistant. Ask me anything about his skills, projects, experience, or how to work together!",
//       id: ++msgId,
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, typing]);

//   const sendMessage = (text: string) => {
//     if (!text.trim()) return;
//     const userMsg: Message = { role: "user", text: text.trim(), id: ++msgId };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");
//     setTyping(true);
//     setTimeout(() => {
//       const reply = getBotReply(text);
//       setTyping(false);
//       setMessages((prev) => [...prev, { role: "bot", text: reply, id: ++msgId }]);
//     }, 900 + Math.random() * 600);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     sendMessage(input);
//   };

//   return (
//     <>
//       {/* Floating button */}
//       <motion.button
//         data-testid="button-chatbot-toggle"
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-8 left-8 z-[60] w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/40 flex items-center justify-center cursor-pointer border border-primary/30"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         animate={open ? { rotate: 0 } : { rotate: 0 }}
//       >
//         <AnimatePresence mode="wait">
//           {open ? (
//             <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
//               <X className="w-6 h-6" />
//             </motion.div>
//           ) : (
//             <motion.div key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
//               <MessageCircle className="w-6 h-6" />
//             </motion.div>
//           )}
//         </AnimatePresence>
//         {/* Pulse ring */}
//         {!open && (
//           <span className="absolute w-full h-full rounded-full bg-primary/40 animate-ping" />
//         )}
//       </motion.button>

//       {/* Chat panel */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             data-testid="chatbot-panel"
//             initial={{ opacity: 0, y: 30, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 30, scale: 0.9 }}
//             transition={{ type: "spring", stiffness: 400, damping: 30 }}
//             className="fixed bottom-28 left-8 z-[60] w-[340px] sm:w-[380px] rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden flex flex-col"
//             style={{ maxHeight: "500px" }}
//           >
//             {/* Header */}
//             <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-gradient-to-r from-primary/10 to-secondary/10">
//               <div className="relative">
//                 <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
//                   <Bot className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-card" />
//               </div>
//               <div>
//                 <div className="text-sm font-bold text-foreground flex items-center gap-1.5">
//                   Gulfam's Assistant <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
//                 </div>
//                 <div className="text-xs text-muted-foreground">Ask me anything</div>
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 0 }}>
//               {messages.map((msg) => (
//                 <motion.div
//                   key={msg.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
//                 >
//                   <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs ${msg.role === "bot" ? "bg-gradient-to-br from-primary to-secondary text-white" : "bg-muted text-muted-foreground"}`}>
//                     {msg.role === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
//                   </div>
//                   <div
//                     className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
//                       msg.role === "bot"
//                         ? "bg-muted text-foreground rounded-tl-sm"
//                         : "bg-primary text-primary-foreground rounded-tr-sm"
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                 </motion.div>
//               ))}

//               {typing && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex gap-2 items-center"
//                 >
//                   <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
//                     <Bot className="w-4 h-4 text-white" />
//                   </div>
//                   <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5">
//                     {[0, 1, 2].map((i) => (
//                       <motion.div
//                         key={i}
//                         className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
//                         animate={{ y: [0, -4, 0] }}
//                         transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Quick questions */}
//             {messages.length <= 1 && (
//               <div className="px-4 pb-2 flex flex-wrap gap-1.5">
//                 {QUICK_QUESTIONS.map((q) => (
//                   <button
//                     key={q}
//                     data-testid={`button-quick-question`}
//                     onClick={() => sendMessage(q)}
//                     className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer"
//                   >
//                     {q}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* Input */}
//             <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-border">
//               <input
//                 data-testid="input-chatbot-message"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask me anything..."
//                 className="flex-1 bg-muted rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-primary/50 transition-colors"
//               />
//               <button
//                 data-testid="button-chatbot-send"
//                 type="submit"
//                 disabled={!input.trim() || typing}
//                 className="p-2 rounded-xl bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors cursor-pointer"
//                 aria-label="Send"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, X, Send, Bot, User, Sparkles, 
  Mic, MicOff, Volume2, VolumeX, Minimize2, ChevronDown,
  Settings, Check,
  School
} from "lucide-react";

type Message = { 
  role: "bot" | "user"; 
  text: string; 
  id: number;
  timestamp?: Date;
};

// Portfolio data that the bot can read from
const PORTFOLIO_DATA = {
  personal: {
    name: "Gulfam Ashraf",
    title: "Full-Stack Web Developer",
    experience: "6+ years",
    location: "G-8/4, Islamabad, Pakistan (Onsite) ",
    email: "gulfamashraf878@gmail.com",
    phone: "not provided for privacy",
    availability: "Open for freelance & full-time positions",
    bio: "Full-stack developer specializing in high-performance web applications with expertise in React, Node.js, and cloud infrastructure."
  },
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    devops: ["Docker", "AWS", "Vercel", "CI/CD", "Kubernetes"],
    other: ["Git", "Jest", "WebSocket", "Stripe API", "OpenAI API"]
  },
  projects: [
    {
      title: "Ecommerce Website ",
    description: "A full-featured e-commerce platform with real-time inventory, payment processing via Stripe, and an AI-driven product recommendation engine. Built for scale with microservices architecture. ",
    longDesc: "ShopSphere handles 50K+ daily active users with sub-100ms response times. The AI recommendation engine uses collaborative filtering and increased average cart value by 23%. Microservices are deployed on AWS ECS with auto-scaling. ",
    tags: ["React.js ", "JavaScript ", "MongoDB ", "Node.js ", "Express.js "],
    live: "https://shopsphere.demo ",
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
    live: "https://nationalbookfoundation.demo ",
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
    live: "https://luminary.demo ",
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
    live: "https://apigateway.demo ",
    github: "https://github.com ",
    featured: false,
    gradient: "from-cyan-500/20 to-blue-500/20 ",
    borderGlow: "rgba(6,182,212,0.3) ",
    emoji: "🔗 ",
    },
    {
       title: "Huzaifa Mart (POS System) ",
    description: "A headless CMS built for developers with a flexible content modeling system, rich text editor, asset management, webhooks, and auto-generated REST and GraphQL APIs. ",
    longDesc: "ContentCMS auto-generates strongly typed SDKs from the content schema. The rich text editor handles collaborative editing via OT (Operational Transformation). Used by 3 agencies managing 40+ client sites. ",
    tags: ["Next.js ", "Node.js ", "PostgreSQL ", "TypeScript ", "Prisma "],
    live: "https://contentcms.demo ",
    github: "https://github.com ",
    featured: false,
    gradient: "from-violet-500/20 to-purple-500/20 ",
    borderGlow: "rgba(139,92,246,0.3) ",
    emoji: "📝 ",
    },
  
  ],
  experience: [
    {
      company: "National Book Foundation",
      position: "Senior Full Stack Developer",
      period: "2025-Present",
      achievements: [
        "Led development of 5+ major features",
        "Improved performance by 40%",
        "Mentored 3 junior developers"
      ]
    }
  ],
  education: {
    bachelors: {
    degree: "BSc.IET (Information Engineering and Technology)",
    school: "National Skills University Islamabad",
    year: "2022 — 2026",
    cgpa: "3.79/4.0",
    description: "Dean's List. Senior thesis on real-time collaborative editing algorithms. CGPA: 3.79/4.0.",
    color: "text-yellow-400",
    dotColor: "bg-yellow-500",
    ringColor: "border-yellow-500",
    icon: "🏛️",
  },
  },
  services: [
    "Full-Stack Web Development",
    "API Design & Integration",
    "Cloud Architecture (AWS, Docker)",
    "Performance Optimization",
    "Technical Consulting",
    "Code Reviews & Mentoring"
  ],
  contact: {
    email: "gulfamashraf878@gmail.com",
    github: "https://github.com/gulfamashraf",
    linkedin: "https://linkedin.com/in/gulfam-ashraf",
    twitter: "https://twitter.com/gulfamashraf"
  }
};

// Smart response generation using portfolio data
// Smart response generation using portfolio data
// Smart response generation using portfolio data
function getSmartResponse(input: string): string {
  const lower = input.toLowerCase();
  
  // HIRE - MUST come FIRST to avoid "hi" in "hire" triggering greetings
  if (/(how can i hire|hire you|hire him|hiring process|how to hire|can i hire|want to hire|looking to hire)/i.test(lower)) {
    return `📋 How to Hire ${PORTFOLIO_DATA.personal.name}:\n\n` +
      `1️⃣ Send an Email📧\n` +
      `   → ${PORTFOLIO_DATA.contact.email}\n` +
      `   → Include: Project details, timeline, and budget\n\n` +
      `2️⃣ Connect on LinkedIn 💼\n` +
      `   → ${PORTFOLIO_DATA.contact.linkedin}\n\n` +
      `3️⃣ Project Kickoff 🚀\n` +
      `💰 Pricing: Project-based (negotiable based on scope)\n` +
      `🌍 Location: Remote worldwide\n\n` +
      `Ready to start? Send an email right now! 🎯`;
  }
  
  // Greetings
  if (/^(hi|hello|hey|greetings|sup)$/i.test(lower) || /^\s*(hi|hello|hey|greetings|sup)\s*$/i.test(lower)) {
    return `Hey there! 👋 I'm ${PORTFOLIO_DATA.personal.name}'s AI assistant. Ask me about his skills, projects, experience, or anything you'd like to know!`;
  }
  
  // Personal info
  if (/(who|about|yourself|introduce|name|tell me about you)/i.test(lower)) {
    return `${PORTFOLIO_DATA.personal.name} is a ${PORTFOLIO_DATA.personal.title} with ${PORTFOLIO_DATA.personal.experience} of experience. ${PORTFOLIO_DATA.personal.bio} He's currently ${PORTFOLIO_DATA.personal.availability}.`;
  }
  
  // Skills
  if (/(skill|tech|technology|know|use|stack|language|technologies)/i.test(lower)) {
    return `💻 Technical Skills:\n\nFrontend: ${PORTFOLIO_DATA.skills.frontend.join(", ")}\nBackend: ${PORTFOLIO_DATA.skills.backend.join(", ")}\nDatabases: ${PORTFOLIO_DATA.skills.databases.join(", ")}\nDevOps: ${PORTFOLIO_DATA.skills.devops.join(", ")}`;
  }
  
  // Projects
  if (/(project|built|work|portfolio|app|made|create|develop|build)/i.test(lower)) {
    return `🏆 Featured Projects:\n\n${PORTFOLIO_DATA.projects.map(p => `• ${p.title}: ${p.description}\n  Tech: ${p.tags.join(", ")}`).join("\n\n")}`;
  }
  
  // Experience
  if (/(experience|job|work|company|employer|career|position|worked)/i.test(lower)) {
    return `💼 Work Experience:\n\n${PORTFOLIO_DATA.experience.map(e => `• ${e.position} at ${e.company} (${e.period})\n  Achievements: ${e.achievements.join(", ")}`).join("\n\n")}`;
  }
  
  // Education
  if (/(education|degree|study|university|school|college|learn)/i.test(lower)) {
    return `🎓 Education:\n\n•${PORTFOLIO_DATA.education.bachelors.degree} - ${PORTFOLIO_DATA.education.bachelors.school} (${PORTFOLIO_DATA.education.bachelors.year})  (${PORTFOLIO_DATA.education.bachelors.cgpa})`;
  }
  
  // Services
  if (/(service|offer|provide|help|do|can you)/i.test(lower)) {
    return `💼 Services Offered:\n\n${PORTFOLIO_DATA.services.map(s => `• ${s}`).join("\n")}`;
  }
  
  // Contact (general)
  if (/(contact|reach|email|message|connect)/i.test(lower)) {
    return `📫 **How to reach ${PORTFOLIO_DATA.personal.name}:**\n\n• Email: ${PORTFOLIO_DATA.contact.email}\n• GitHub: ${PORTFOLIO_DATA.contact.github}\n• LinkedIn: ${PORTFOLIO_DATA.contact.linkedin}`;
  }
  
  // Freelance/Availability
  if (/(available|freelance|work with)/i.test(lower)) {
    return `✅ **Availability:** ${PORTFOLIO_DATA.personal.availability}\n\n` +
      `💼 **Services offered:**\n${PORTFOLIO_DATA.services.map(s => `   • ${s}`).join("\n")}\n\n` +
      `📧 **Hire him:** ${PORTFOLIO_DATA.contact.email}`;
  }
  
  // Location
  if (/(location|where|based|city)/i.test(lower)) {
    return `📍 ${PORTFOLIO_DATA.personal.name} is currently based in ${PORTFOLIO_DATA.personal.location}. He works remotely with clients worldwide!`;
  }
  
  // Thanks
  if (/(thank|thanks|appreciate)/i.test(lower)) {
    return `You're welcome! 😊 Is there anything else you'd like to know about ${PORTFOLIO_DATA.personal.name}'s work or expertise?`;
  }
  
  // Default response
  return `I can tell you about:\n\n• ${PORTFOLIO_DATA.personal.name}'s skills & technologies\n• His featured projects\n• Work experience\n• Education background\n• Services offered\n• How to contact/hire him\n\nWhat would you like to know? 🤔`;
}
const QUICK_QUESTIONS = [
  "Tell me about yourself",
  "What skills do you have?",
  "Show me your projects",
  "How can I hire you?",
  "What's your experience?",
  "Where are you based?"
];

let msgId = 0;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: `👋 Hi! I'm ${PORTFOLIO_DATA.personal.name}'s AI assistant. Ask me anything about his work!`,
      id: ++msgId,
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [speechRate, setSpeechRate] = useState(0.9);
  const [speechPitch, setSpeechPitch] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
      
      // Set default voice (prefer English female voice)
      const defaultVoice = voices.find(voice => 
        voice.lang.startsWith('en') && voice.name.includes('Google') || 
        voice.name.includes('Samantha') || voice.name.includes('Female')
      ) || voices.find(voice => voice.lang.startsWith('en'));
      
      if (defaultVoice) {
        setSelectedVoice(defaultVoice.name);
      }
    };
    
    loadVoices();
    
    // Chrome requires this event listener
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Function to speak text with selected voice
  const speakText = (text: string) => {
    if (isMuted || !('speechSynthesis' in window)) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Apply voice settings
    if (selectedVoice) {
      const voice = availableVoices.find(v => v.name === selectedVoice);
      if (voice) utterance.voice = voice;
    }
    
    utterance.rate = speechRate;
    utterance.pitch = speechPitch;
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
  };

  // Speech recognition
  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        sendMessage(transcript);
      };
      recognition.start();
    } else {
      alert("Voice input not supported in your browser");
    }
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = { 
      role: "user", 
      text: text.trim(), 
      id: ++msgId,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    
    setTimeout(() => {
      const response = getSmartResponse(text);
      setTyping(false);
      setMessages((prev) => [...prev, { 
        role: "bot", 
        text: response, 
        id: ++msgId,
        timestamp: new Date()
      }]);
      
      // Speak response with selected voice
      speakText(response);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickQuestion = (question: string) => {
    sendMessage(question);
  };

  const clearChat = () => {
    setMessages([{
      role: "bot",
      text: `Chat cleared! 👋 I'm back. Ask me about ${PORTFOLIO_DATA.personal.name}'s work!`,
      id: ++msgId,
      timestamp: new Date()
    }]);
  };

  // Test voice
  const testVoice = () => {
    speakText("Hello! This is how my voice sounds now.");
  };

  return (
    <>
      {/* Floating button - LEFT side */}
      <motion.button
        data-testid="button-chatbot-toggle"
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 left-4 z-[60] w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/40 flex items-center justify-center cursor-pointer border border-primary/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <MessageCircle className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute w-full h-full rounded-full bg-primary/40 animate-ping" />
        )}
      </motion.button>

      {/* Chat panel - LEFT side */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="chatbot-panel"
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -30, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-20 left-4 z-[60] w-[320px] h-[500px] rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-border bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-card" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground flex items-center gap-1">
                    Gulfam's Assistant
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">For your convenience</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <button
                  onClick={() => setShowVoiceSettings(!showVoiceSettings)}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  title="Voice settings"
                >
                  <Settings className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={clearChat}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  title="Clear chat"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Voice Settings Panel */}
            {showVoiceSettings && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-border p-3 space-y-3 bg-muted/30"
              >
                <div className="space-y-1.5">
                  <label className="text-[10px] font-medium text-muted-foreground">Select Voice</label>
                  <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                    className="w-full text-xs p-1.5 rounded-lg border border-border bg-background"
                  >
                    {availableVoices
                      .filter(voice => voice.lang.startsWith('en'))
                      .map((voice) => (
                        <option key={voice.name} value={voice.name}>
                          {voice.name} ({voice.lang})
                        </option>
                      ))}
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-medium text-muted-foreground">
                    Speed: {speechRate.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={speechRate}
                    onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-medium text-muted-foreground">
                    Pitch: {speechPitch.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={speechPitch}
                    onChange={(e) => setSpeechPitch(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <button
                  onClick={testVoice}
                  className="w-full text-xs py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  Test Voice
                </button>
              </motion.div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2.5" style={{ minHeight: 0 }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${msg.role === "bot" ? "bg-gradient-to-br from-primary to-secondary text-white" : "bg-muted text-muted-foreground"}`}>
                    {msg.role === "bot" ? <Bot className="w-3 h-3" /> : <User className="w-3 h-3" />}
                  </div>
                  <div className={`max-w-[85%] px-2.5 py-1.5 rounded-2xl text-xs leading-relaxed ${
                    msg.role === "bot"
                      ? "bg-muted/80 text-foreground rounded-tl-sm"
                      : "bg-primary text-primary-foreground rounded-tr-sm"
                  }`}>
                    <div className="whitespace-pre-wrap break-words">{msg.text}</div>
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 items-center"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-3 py-2 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 rounded-full bg-muted-foreground"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="px-3 pb-2">
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-[10px] px-2 py-1 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors whitespace-nowrap"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2 p-2.5 border-t border-border">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything... 🎤"
                className="flex-1 bg-muted rounded-xl px-2.5 py-1.5 text-xs text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-primary/50 transition-colors"
              />
              {'webkitSpeechRecognition' in window || 'SpeechRecognition' in window ? (
                <button
                  type="button"
                  onClick={startListening}
                  className={`p-1.5 rounded-xl transition-colors ${isListening ? 'bg-red-500 text-white' : 'bg-primary text-primary-foreground'} hover:opacity-90`}
                  title="Voice input"
                >
                  {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                </button>
              ) : null}
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="p-1.5 rounded-xl bg-primary text-primary-foreground disabled:opacity-40 hover:bg-primary/90 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}