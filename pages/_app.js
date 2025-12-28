import "@/styles/globals.css";

import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "./components/loader";
import { AnimatePresence, motion } from "motion/react";
import CustomCursor from "./components/common/custom-cursor";

const clipVariants = {
  initial: {
    clipPath: "inset(100% 0% 0% 0%)",
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);
  const pathname = router.pathname;

  useEffect(() => {
    const isDark = pathname === "/" || pathname.startsWith("/works/");
    document.body.classList.toggle("bg-[#fdfdfd]", isDark);
    document.body.classList.toggle("bg-[#030303]", !isDark);
  }, [pathname]);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");

    if (hasSeenPreloader) {
      setLoading(false);
    } else {
      sessionStorage.setItem("hasSeenPreloader", "true");
    }
  }, []);

  return (
    <>
      <Head>
        <title>REVIVAL®</title>
      </Head>

      {loading && <Loader onFinish={() => setLoading(false)} />}
      <CustomCursor />
      {!loading && (
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            className="relative top-0 left-0 size-full z-8888"
            variants={clipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
