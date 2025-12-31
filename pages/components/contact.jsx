"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const textSlideAnim = {
  initial: { y: "100%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.25 + 0.075 * i,
    },
  }),
};

const contactVariants = {
  closed: {
    bottom: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  open: {
    bottom: "0%",
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const overlayVariants = {
  closed: { opacity: 0, pointerEvents: "none" },
  open: { opacity: 1, pointerEvents: "auto" },
};

const socials = [
  {
    label: "code source",
    href: "https://paulovdev.gumroad.com/l/layaut-source-access",
  },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

const Contact = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const isOnRoute = pathname === "/" || pathname.startsWith("/work");

  useEffect(() => {
    if (isOpen) onClose();
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-800 brightness-25 backdrop-blur-xs"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            data-cursor="hover"
          />

          <motion.div
            className={`fixed left-0 w-full h-[50vh] z-900
              ${isOnRoute ? "bg-bg-dark text-s" : "bg-bg-light text-p"}
            `}
            variants={contactVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-10 h-full flex flex-col justify-between max-lg:p-5">
              <div className="flex justify-between items-center">
                <span className="text-[14px] uppercase opacity-50">
                  Contact
                </span>

                <button
                  onClick={onClose}
                  className="text-[14px] tracking-[-0.6px] uppercase  cursor-default"
                  data-cursor="hover"
                >
                  close
                </button>
              </div>

              <div>
                <div className="overflow-hidden h-fit">
                  <motion.h2
                    className="block font-medium text-[6vw] tracking-[-2.5px] leading-[130%] uppercase 
                       max-lg:tracking-[-1.5px] max-md:tracking-[-1px] max-lg:font-normal"
                    {...textSlideAnim}
                    custom={1}
                  >
                    Let’s connect
                  </motion.h2>
                </div>
                <div className="overflow-hidden h-fit">
                  <motion.p
                    className="mt-4 max-w-xl text-[14px] tracking-[-0.60px] leading-[100%] uppercase opacity-70"
                    {...textSlideAnim}
                    custom={2}
                  >
                    Projects, partnerships or just a good conversation.
                  </motion.p>
                </div>
              </div>

              <div className="flex justify-between items-end max-lg:pb-5 max-lg:flex-col max-lg:items-start">
                <div className="space-y-2 text-[14px]">
                  <div className="overflow-hidden h-fit">
                    <motion.a
                      href="mailto:hello@studio.com"
                      className="text-[14px] tracking-[-0.60px] leading-[100%] uppercase block cursor-default hover:underline"
                      {...textSlideAnim}
                      custom={3}
                      data-cursor="hover"
                    >
                      revival@studio.com
                    </motion.a>
                  </div>
                  <div className="overflow-hidden h-fit max-lg:mb-8">
                    <motion.p
                      className="text-[12px] tracking-[-0.60px] leading-[100%] uppercase block opacity-60"
                      {...textSlideAnim}
                      custom={4}
                    >
                      Based in Brazil — working worldwide
                    </motion.p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden h-fit max-lg:mb-8">
                      <motion.p
                        className="text-[12px] tracking-[-0.60px] leading-[100%] uppercase block"
                        {...textSlideAnim}
                        custom={5}
                      >
                        <span className=" opacity-60">FONT: </span>
                        GOOGLE
                      </motion.p>
                    </div>
                    <div className="overflow-hidden h-fit max-lg:mb-8">
                      <motion.p
                        className="text-[12px] tracking-[-0.60px] leading-[100%] uppercase block"
                        {...textSlideAnim}
                        custom={6}
                      >
                        <span className=" opacity-60">IMAGES: </span>
                        UNSPLASH & PEXELS
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="overflow-hidden h-fit mb-4">
                    <motion.p
                      className="text-[12px] tracking-[-0.60px] leading-[120%] uppercase block opacity-60"
                      {...textSlideAnim}
                      custom={7}
                    >
                      ONLY A CONCEPT WORK DONE WITH PAULOVDEV TO SHOW UR
                      CAPABILITIES
                    </motion.p>
                  </div>
                  <ul className="overflow-hidden flex gap-6">
                    {socials.map((item, i) => (
                      <motion.li
                        key={item.label}
                        {...textSlideAnim}
                        custom={8 + i}
                        data-cursor="hover"
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] tracking-[-0.60px] leading-[100%] uppercase hover:opacity-60 transition-opacity cursor-default"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Contact;
