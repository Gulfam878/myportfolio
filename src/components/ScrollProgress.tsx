import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      data-testid="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 h-[3px] z-[200] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(221,83%,60%), hsl(262,70%,65%), hsl(221,83%,60%))",
      }}
    />
  );
}
