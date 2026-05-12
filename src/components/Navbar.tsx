// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
// import { useTheme } from "@/components/ThemeProvider";

// const NAV_LINKS = [
//   { label: "About", href: "#about" },
//   { label: "Tech Stack", href: "#tech" },
//   { label: "Projects", href: "#projects" },
//   { label: "Experience", href: "#experience" },
//   { label: "Services", href: "#services" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const { theme, setTheme } = useTheme();
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState("");
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     const sections = NAV_LINKS.map((l) => l.href.slice(1));
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) setActive(`#${e.target.id}`);
//         });
//       },
//       { rootMargin: "-40% 0px -55% 0px" }
//     );
//     sections.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });
//     return () => observer.disconnect();
//   }, []);

//   const scrollTo = (href: string) => {
//     setMobileOpen(false);
//     const el = document.querySelector(href);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

//   return (
//     <>
//       <motion.header
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className={`fixed top-3 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl rounded-2xl transition-all duration-300 ${
//           scrolled
//             ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg shadow-black/20"
//             : "bg-transparent"
//         }`}
//       >
//         <nav className="flex items-center justify-between px-5 py-3">
//           <button
//             data-testid="nav-logo"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="flex items-center gap-2 font-mono font-bold text-lg text-primary cursor-pointer"
//           >
//             <Code2 className="w-5 h-5" />
//             <span>&lt;DevPortfolio /&gt;</span>
//           </button>

//           <ul className="hidden md:flex items-center gap-1">
//             {NAV_LINKS.map((link) => (
//               <li key={link.href}>
//                 <button
//                   data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
//                   onClick={() => scrollTo(link.href)}
//                   className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
//                     active === link.href
//                       ? "text-primary"
//                       : "text-muted-foreground hover:text-foreground"
//                   }`}
//                 >
//                   {active === link.href && (
//                     <motion.span
//                       layoutId="nav-pill"
//                       className="absolute inset-0 rounded-lg bg-primary/10"
//                     />
//                   )}
//                   <span className="relative z-10">{link.label}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-2">
//             <button
//               data-testid="button-theme-toggle"
//               onClick={toggleTheme}
//               className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
//               aria-label="Toggle theme"
//             >
//               {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//             </button>
//             <button
//               data-testid="button-mobile-menu"
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
//               aria-label="Toggle menu"
//             >
//               {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
//             </button>
//           </div>
//         </nav>
//       </motion.header>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed top-[4.5rem] left-3 right-3 z-[99] rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl p-4"
//           >
//             <ul className="flex flex-col gap-1">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.href}>
//                   <button
//                     data-testid={`nav-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
//                     onClick={() => scrollTo(link.href)}
//                     className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }





import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "About", href: "#about" },
   { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
            : "bg-background/50 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              data-testid="nav-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 font-mono font-bold text-lg text-primary cursor-pointer whitespace-nowrap"
            >
              <Code2 className="w-5 h-5 flex-shrink-0" />
              <span className="hidden sm:inline">&lt;GulfamAshraf /&gt;</span>
              <span className="sm:hidden">GA</span>
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-3 py-1.5 text-sm lg:text-base font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      active === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active === link.href && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-primary/10"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                data-testid="button-theme-toggle"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 lg:w-5 lg:h-5" /> : <Moon className="w-4 h-4 lg:w-5 lg:h-5" />}
              </button>
              <button
                data-testid="button-mobile-menu"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] z-[99] bg-background/95 backdrop-blur-xl shadow-2xl border-l border-border md:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-6">
              {/* Close button at top */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <ul className="flex flex-col gap-2 px-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      data-testid={`nav-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
                      onClick={() => scrollTo(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                        active === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/50 z-[98] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}