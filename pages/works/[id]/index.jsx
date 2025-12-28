"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

import WorkGallery from "@/pages/components/section/works/gallery";
import WorkIntro from "@/pages/components/section/works/intro";
import { data } from "@/pages/data/data";
import { useRouter } from "next/router";
import Nav from "@/pages/components/nav";

export default function Work() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) return null;

  const project = data.find((item) => item.id === id);

  if (!project) return null;

  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1,
    });

    lenisRef.current = lenis;
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Nav />
      <main className="p-10 py-20 size-full min-h-screen bg-s max-lg:p-5 max-lg:py-20">
        <div className="size-full flex justify-between items-start gap-6 max-lg:flex-col">
          <div className="w-full flex-2 max-lg:mt-10 max-lg:flex-none">
            <WorkGallery data={project} />
          </div>

          <div className="w-full flex-1 sticky top-6 max-lg:relative max-lg:flex-none max-lg:order-first">
            <WorkIntro data={project} />
          </div>
        </div>
      </main>
    </>
  );
}
