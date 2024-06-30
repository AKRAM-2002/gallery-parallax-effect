"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const words = `If you can imagine it, you can achieve it. If you can dream it, you can become it.`;

export function TextEffect() {
  const [bannerOpacity, setBannerOpacity] = useState(0);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBannerOpacity(1);
        } else {
          setBannerOpacity(0);
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  const words = `If you can imagine it, you can achieve it. If you can dream it, you can become it.`;

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        ref={bannerRef}
        className="absolute inset-0 bg-gradient-to-r from-blue-700 "
        initial={{ opacity: 0 }}
        animate={{ opacity: bannerOpacity }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/banner-alterok.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: bannerOpacity * 0.2 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <TextGenerateEffect words={words} />
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: bannerOpacity }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
