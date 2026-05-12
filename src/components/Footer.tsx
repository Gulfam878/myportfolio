import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Code2, Heart } from "lucide-react";

const NAV = ["About", "Tech Stack", "Projects", "Experience", "Services", "Contact"];
const SOCIAL = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:gulfam.ashraf@developer.io", label: "Email" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-mono font-bold text-xl text-primary cursor-pointer"
          >
            <Code2 className="w-5 h-5" />
            <span>&lt;Gulfam Ashraf /&gt;</span>
          </button>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <button
                key={item}
                data-testid={`footer-nav-${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => scrollTo(item.toLowerCase().replace(" ", ""))}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                data-testid={`footer-social-${label.toLowerCase()}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Gulfam Ashraf. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
