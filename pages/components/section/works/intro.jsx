"use client";
import { motion } from "motion/react";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0%",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25 + 0.075 * i,
    },
  }),
};

export default function WorkIntro({ data }) {
  return (
    <section className="size-full flex flex-col gap-1">
      <label className="text-p/75 text-[10px] tracking-[-0.60px] uppercase mb-2 block">
        Title
      </label>
      <div className="mb-4 overflow-hidden">
        <motion.p
          variants={textSlideAnim}
          initial="initial"
          animate="animate"
          custom={1}
          className="text-p text-[14px] tracking-[-0.60px] uppercase"
        >
          {data.title}
        </motion.p>
      </div>

      <label className="text-p/75 text-[10px] tracking-[-0.60px] uppercase mb-2 block">
        Year
      </label>
      <div className="mb-4 overflow-hidden">
        <motion.p
          variants={textSlideAnim}
          initial="initial"
          animate="animate"
          custom={3}
          className="text-[14px] tracking-[-0.60px] uppercase"
        >
          {data.year}
        </motion.p>
      </div>
      <label className="text-p/75 text-[10px] tracking-[-0.60px] uppercase mb-2 block">
        Stack
      </label>
      <div className="mb-4 overflow-hidden">
        <motion.p
          variants={textSlideAnim}
          initial="initial"
          animate="animate"
          custom={2}
          className="text-[14px] tracking-[-0.60px] uppercase"
        >
          {data.stack.filter(Boolean).join(" • ")}
        </motion.p>
      </div>

      <label className="text-p/75 text-[10px] tracking-[-0.60px] uppercase mb-2 block">
        Description
      </label>
      <div className="max-w-300 w-full mb-4 ">
        {data.description.map((phrase, i) => (
          <div className="overflow-hidden h-fit">
            <motion.h2
              className="block font-medium text-p text-[18px] tracking-[-1.25px] leading-[130%] uppercase 
                        max-md:tracking-[-1px]"
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

      <label className="text-p/75 text-[10px] tracking-[-0.60px] uppercase mb-2 block">
        Client
      </label>
      <div className="mb-4 overflow-hidden">
        <motion.p
          variants={textSlideAnim}
          initial="initial"
          animate="animate"
          custom={5}
          className="text-[14px] tracking-[-0.60px] uppercase"
        >
          {data.client}
        </motion.p>
      </div>

      {data.site?.trim() && (
        <>
          <label className="text-p/75 text-[10px] tracking-[-0.60px] uppercase mb-2 block">
            Visit
          </label>
          <div className="mb-4 overflow-hidden" data-cursor="hover">
            <motion.a
              variants={textSlideAnim}
              initial="initial"
              animate="animate"
              custom={6}
              href={data.site}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <ScrambleHover
                text="visit website"
                className="text-p text-[14px] tracking-[-0.60px] uppercase hover:underline cursor-default"
              />
            </motion.a>
          </div>
        </>
      )}
    </section>
  );
}
