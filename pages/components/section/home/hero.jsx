"use client";
import { useMousePosition } from "@/pages/hooks/useMousePosition";
import { motion, useTransform } from "motion/react";

const HomeSection = () => {
  const { x, y } = useMousePosition();

  const rotateY = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const rotateX = useTransform(y, [-0.5, 0.5], [20, -20]);

  return (
    <section className="bg-bg-light h-screen p-10 overflow-hidden ">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: 1400 }}
        initial={{ opacity: 0, scale: 0.5, filter: "blur(12px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.25 },
        }}
      >
        <motion.div
          className="relative w-75 h-75"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.img
            src="/logo-dark.svg"
            className="w-full h-full"
            style={{ transform: "translateZ(50px)" }}
          />

          <div
            className="absolute -bottom-2 right-4"
            style={{ transform: "translateZ(30px)" }}
          >
            <p className="text-p text-[38px]">®</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
