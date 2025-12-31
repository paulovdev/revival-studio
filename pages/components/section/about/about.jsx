"use client";

import { motion } from "motion/react";

const headlinePhrases = [
  `<span class="text-s/50">REVIVAL®</span> is a Creative production studio rooted in Brazil,`,
  `offers a wide array of creative services. Our expertise`,
  `spans commercials, music videos, digital content, and a `,
  `variety of other projects.`,
];

const infoGrid = [
  {
    id: "01",
    title: "WHAT WE DO",
    colStart: "col-start-1",
    items: [
      "BRAND STRATEGY",
      "VISUAL SYSTEMS",
      "CREATIVE DIRECTION",
      "INTERFACE DESIGN",
      "PRODUCT EXPERIENCES",
      "INTERACTIVE MOTION",
      "IMMERSIVE ENVIRONMENTS",
    ],
  },
  {
    id: "02",
    title: "TRUSTED BY",
    colStart: "col-start-4",
    items: [
      "GLOBAL TECH LEADERS",
      "CULTURAL INSTITUTIONS",
      "FASHION HOUSES",
      "EMERGING STARTUPS",
      "LUXURY BRANDS",
      "MEDIA PLATFORMS",
      "INNOVATION LABS",
      "FINANCIAL GROUPS",
      "AUTOMOTIVE BRANDS",
      "RETAIL NETWORKS",
      "ENTERTAINMENT STUDIOS",
      "DESIGN-DRIVEN COMPANIES",
    ],
  },
  {
    id: "03",
    title: "RECOGNITION",
    colStart: "col-start-8",
    items: [
      "INTERNATIONAL DESIGN HONORS",
      "DIGITAL EXCELLENCE AWARDS",
      "CREATIVE INDUSTRY SHORTLISTS",
      "EDITORIAL FEATURES",
      "CURATED GALLERIES",
      "GLOBAL SHOWCASES",
      "DESIGN FESTIVAL SELECTIONS",
      "INNOVATION PRIZES",
      "CREATIVE LEADERSHIP AWARDS",
      "JURY DISTINCTIONS",
      "BEST-IN-CLASS NOMINATIONS",
      "ANNUAL DESIGN RANKINGS",
    ],
  },
];

const textSlideAnim = {
  initial: { y: "100%", opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25 + 0.075 * i,
    },
  }),
};
const AboutSection = () => {
  return (
    <section className="p-10 py-20 h-screen bg-bg-dark max-lg:h-fit max-lg:p-5 max-lg:py-20">
      {headlinePhrases.map((phrase, i) => (
        <div className="overflow-hidden h-fit">
          <motion.h2
            className="block font-medium text-s text-[2.7vw] tracking-[-2.5px] leading-[130%] uppercase 
        max-lg:tracking-[-1.5px] max-md:tracking-[-1px] max-lg:font-normal"
            custom={i}
            key={i}
            variants={textSlideAnim}
            initial="initial"
            animate="animate"
            dangerouslySetInnerHTML={{ __html: phrase }}
          />
        </div>
      ))}

      <div className="w-full grid grid-cols-12 mt-20 max-lg:flex max-lg:flex-col">
        {infoGrid.map((column, i) => (
          <div
            key={column.id}
            className={`${column.colStart} flex flex-col gap-4 whitespace-nowrap max-lg:mb-8 max-lg:gap-0`}
          >
            <motion.p
              custom={i}
              variants={textSlideAnim}
              initial="initial"
              animate="animate"
              className="mb-4 font-light text-s/50 text-[12px] tracking-[-0.45px] leading-[100%] uppercase  "
            >
              ({column.id}) {column.title}
            </motion.p>

            <ul className="flex flex-col">
              {column.items.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={textSlideAnim}
                  initial="initial"
                  animate="animate"
                  className="p-0.5 font-light text-s text-[12px] tracking-[-0.60px] leading-[120%] uppercase 
                     cursor-default"
                >
                  → {item}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
