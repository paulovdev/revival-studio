"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { CgScrollV } from "react-icons/cg";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 700, damping: 40 });
  const smoothY = useSpring(y, { stiffness: 700, damping: 40 });

  const [mode, setMode] = useState("normal");

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX + 15);
      y.set(e.clientY + 19);

      const target = e.target;

      const isDrag = !!target.closest("[data-cursor='drag']");
      const isHover = !!target.closest("[data-cursor='hover']");
      const isAbout = !!target.closest("[data-cursor='about']");

      if (isDrag) {
        setMode("drag-hover");
      } else if (isHover) {
        setMode("hover");
      } else if (isAbout) {
        setMode("about");
      } else {
        setMode("normal");
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const size =
    mode === "drag" ? 150 : mode === "hover" ? 10 : mode === "about" ? 125 : 15;

  return (
    <motion.div
      className={`
        fixed top-0 left-0 pointer-events-none
        z-9999
        rounded-full bg-s mix-blend-exclusion
        
      `}
      style={{ translateX: smoothX, translateY: smoothY }}
    >
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`flex items-center justify-center ${
          mode === "drag-hover" && "p-5"
        }`}
      >
        {mode === "drag-hover" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="select-none flex items-center justify-center"
          >
            <CgScrollV className="text-[1.5em] text-p rotate-90" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
