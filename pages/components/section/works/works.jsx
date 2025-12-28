"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Lenis from "lenis";
import Link from "next/link";

const textSlideAnim = {
  initial: { y: "100%", opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25 + 0.025 * i,
    },
  }),
};

const Cards = ({ card }) => {
  const container = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <Link
      ref={container}
      href={`/works/${card.id}`}
      className={`w-screen h-screen overflow-hidden relative ${
        inView ? "brightness-100" : "brightness-10"
      } transition-all duration-500 cursor-default`}
      data-cursor="hover"
    >
      <motion.div
        style={{ y }}
        className="relative w-screen h-screen flex items-center justify-center"
        ref={ref}
      >
        <motion.figure
          className="relative size-full overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <Image
            src={card.cover}
            width={4000}
            height={2000}
            className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
            alt={card.title}
          />
        </motion.figure>
        <div className="absolute w-full h-[50vh] grid grid-cols-12 p-10 max-lg:p-5">
          <div className="w-full col-start-4 col-span-full max-lg:col-start-1">
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <div className="overflow-hidden h-fit">
                  <motion.label
                    className="text-s/75 text-[10px] tracking-[-0.60px] uppercase mb-2 block"
                    variants={textSlideAnim}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    custom={1}
                  >
                    Year
                  </motion.label>
                </div>
                <div className="mb-4 overflow-hidden">
                  <motion.p
                    variants={textSlideAnim}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    custom={1}
                    className="text-[14px] text-s tracking-[-0.60px] uppercase"
                  >
                    {card.year}
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="h-fit overflow-hidden">
                  <motion.label
                    className="text-s/75 text-[10px] tracking-[-0.60px] uppercase mb-2 block"
                    variants={textSlideAnim}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    custom={2}
                  >
                    Stack
                  </motion.label>
                </div>
                <div className="mb-4 overflow-hidden">
                  <motion.p
                    variants={textSlideAnim}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    custom={2}
                    className="text-[14px] text-s tracking-[-0.60px] uppercase"
                  >
                    {card.stack.filter(Boolean).join(" • ")}
                  </motion.p>
                </div>
              </div>
            </div>

            <div className="w-full flex items-start justify-start">
              <div className="h-fit overflow-hidden">
                <motion.h1
                  className="font-medium text-s text-[68px] tracking-[-3px] leading-[100%] uppercase"
                  variants={textSlideAnim}
                  initial="initial"
                  animate={inView ? "animate" : "initial"}
                  custom={3}
                >
                  {card.title}
                </motion.h1>
              </div>
            </div>
            <div className="mt-4 overflow-hidden">
              <motion.p
                variants={textSlideAnim}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                className="text-[14px] text-s tracking-[-0.60px] uppercase hover:underline"
                custom={4}
              >
                VIEW WORK
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const WorksSection = ({ data }) => {
  const headlinePhrases = [
    `<span class="text-s/50">REVIVAL®</span> Case studies <span class="text-s/50 text-[14px] tracking-normal">[0${data.length}]</span>`,
  ];
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <section className="h-full bg-bg-dark">
        <div className="p-10 py-20 grid grid-cols-12 max-lg:p-5 max-lg:py-20">
          <div className="col-start-4 col-span-full h-fit overflow-hidden max-lg:col-start-1">
            {headlinePhrases.map((phrase, i) => (
              <div className="overflow-hidden h-fit">
                <motion.h2
                  className="block font-medium text-s text-[2.7vw] tracking-[-2.5px] leading-[130%] uppercase 
                       max-lg:tracking-[-1.5px] max-md:tracking-[-1px] max-lg:font-normal max-lg:text-[5vw] max-md:text-[6vw]"
                  custom={i}
                  key={i}
                  variants={textSlideAnim}
                  initial="initial"
                  animate="animate"
                  dangerouslySetInnerHTML={{ __html: phrase }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="size-full flex flex-col">
          {data.map((card, i) => (
            <Cards key={i} card={card} customClass="w-full h-screen" />
          ))}
        </div>
      </section>
    </>
  );
};

export default WorksSection;
