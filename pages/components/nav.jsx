"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Contact from "./contact";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.5 + 0.075 * i,
    },
  }),
};
const underlineVariants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Nav = () => {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(`${formatted} BR`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const nav = [
    { title: "index", link: "/" },
    { title: "works", link: "/works" },
    { title: "about", link: "/about" },
    { title: "connect", action: "contact" },
  ];
  return (
    <>
      <nav
        className="fixed top-0 left-0 px-10 py-5 w-full grid grid-cols-12 items-center z-100 mix-blend-difference 
      max-lg:px-5"
      >
        <div
          className="overflow-hidden h-fit col-start-1 col-span-2"
          data-cursor="hover"
        >
          <motion.p
            className="font-light text-s text-[14px] tracking-[-0.60px] leading-[100%] uppercase cursor-default"
            {...textSlideAnim}
            custom={1}
          >
            REVIVAL®
          </motion.p>
        </div>

        <div className="col-start-4 col-span-8 flex items-center gap-4">
          {nav.map((item, i) => {
            const isActive = pathname === item.link;
            if (item.action === "contact") {
              return (
                <div className="overflow-hidden h-fit" key={i}>
                  <motion.button
                    data-cursor="hover"
                    onClick={() => setIsContactOpen(true)}
                    {...textSlideAnim}
                    custom={4}
                    className="font-light text-s text-[14px] tracking-[-0.60px] leading-[120%] uppercase hover:opacity-50"
                  >
                    connect
                  </motion.button>
                </div>
              );
            }
            return (
              <div key={i} className="overflow-hidden" data-cursor="hover">
                <Link href={item.link}>
                  <motion.div
                    className="relative inline-block cursor-default"
                    initial="hidden"
                    whileHover="visible"
                    animate={isActive ? "visible" : "hidden"}
                  >
                    <motion.p
                      {...textSlideAnim}
                      custom={2 + i}
                      className="font-light text-s text-[14px] tracking-[-0.60px] leading-[120%] uppercase "
                    >
                      {item.title}
                    </motion.p>

                    <motion.span
                      variants={underlineVariants}
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-s/75"
                    />
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>

        <div
          className="h-6 overflow-hidden col-start-12 col-span-2 flex justify-end max-ds:hidden"
          data-cursor="hover"
        >
          <motion.p
            className="font-light text-s text-[14px] tracking-[-0.60px] leading-5 uppercase "
            {...textSlideAnim}
            custom={3}
          >
            {time}
          </motion.p>
        </div>
      </nav>
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Nav;
