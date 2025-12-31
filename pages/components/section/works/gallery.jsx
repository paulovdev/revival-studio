"use client";

import { motion } from "motion/react";
import Image from "next/image";

const clipAnim = {
  initial: { clipPath: "inset(100% 0% 0% 0%)" },
  animate: (i) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2 + i * 0.1,
    },
  }),
};
export default function WorkGallery({ data }) {
  return (
    <div className="size-full flex flex-col gap-4">
      {data.imgs.map((item, i) => {
        return (
          <motion.figure
            key={item.id || i}
            className="size-full border border-p/5 overflow-hidden"
            initial="initial"
            animate="animate"
            variants={clipAnim}
            custom={i}
          >
            <Image
              src={item}
              width={2000}
              height={2000}
              className="object-cover w-full h-screen max-lg:h-[75vh] max-md:h-[50vh]"
              preload={true}
              alt={item.alt || data.title || "Work media"}
            />
          </motion.figure>
        );
      })}
    </div>
  );
}
