"use client";
import { motion, useAnimate } from "motion/react";
import { useEffect, useRef } from "react";
const textSlide = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25,
    },
  },
};

export default function Loader({ onFinish }) {
  const [scope, animate] = useAnimate();
  const imgRef = useRef(null);
  const starRef = useRef(null);

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    async function runAnim() {
      const img = imgRef.current;
      const star = starRef.current;

      animate(
        img,
        { filter: "blur(0px)" },
        { duration: 1, ease: [0.215, 0.61, 0.355, 1] }
      );
      await wait(800);

      await animate(
        star,
        { rotate: 360 },
        { duration: 2, ease: [0.76, 0, 0.24, 1] }
      );

      await animate(
        star,
        { scale: 60 },
        { duration: 1, ease: [0.8, 0.38, 0.02, 0.68] }
      );

      onFinish?.();
    }

    runAnim();
  }, []);

  return (
    <div
      ref={scope}
      className="fixed inset-0 w-screen h-screen z-100 overflow-hidden"
    >
      <div className="loader-bg absolute inset-0 bg-bg-dark flex items-center justify-center">
        <motion.div
          ref={starRef}
          className="fixed size-full flex items-center justify-center z-90"
          initial={{ opacity: 0, bottom: 25 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            ref={imgRef}
            initial={{ filter: "blur(10px)" }}
            src="/logo-light.svg"
            className="w-62.5 h-62.5"
          />
        </motion.div>
        <div className="absolute size-full p-5 flex items-center justify-between max-lg:flex-col">
          <div className="h-fit overflow-hidden flex items-center">
            <motion.p
              className="text-s text-[14px] tracking-[-0.60px] uppercase"
              {...textSlide}
            >
              Revival®
            </motion.p>
          </div>
          <div className="h-fit overflow-hidden flex items-center">
            <motion.p
              className="text-s text-[14px] tracking-[-0.60px] uppercase"
              {...textSlide}
            >
              Smart solutions for a connected world.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
