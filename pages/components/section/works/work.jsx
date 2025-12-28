"use client";

import Lenis from "lenis";

import { useEffect, useRef } from "react";
import WorkGallery from "./gallery";
import WorkIntro from "./intro";

export default function WorkPage({ data }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, duration: 1 });
    lenisRef.current = lenis;

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <section className="p-10 py-20 w-full h-full bg-s max-lg:p-5 max-lg:py-20">
        <div className="size-full flex justify-between items-start gap-6 max-lg:flex-col">
          <div className="w-full flex-2 max-lg:mt-10 max-lg:flex-none">
            <WorkGallery data={data} />
          </div>
          <div className="w-full flex-1 sticky top-6 max-lg:relative max-lg:flex-none max-lg:order-first">
            <WorkIntro data={data} />
          </div>
        </div>
      </section>
    </>
  );
}
