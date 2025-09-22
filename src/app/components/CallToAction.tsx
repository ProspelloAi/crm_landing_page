"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function CallToAction() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const shineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const shine = shineRef.current;

    if (button && shine) {
      const handleMouseEnter = () => {
        gsap.fromTo(
          shine,
          { x: "-100%", opacity: 0.7 },
          {
            x: "100%",
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            onComplete: () => {
              shine.style.opacity = "0";
              shine.style.x = "-100%";
            },
          }
        );
      };

      button.addEventListener("mouseenter", handleMouseEnter);

      return () => button.removeEventListener("mouseenter", handleMouseEnter);
    }
  }, []);

  return (
    <section className="py-12 bg-[#FAFAFA]/20 backdrop-blur-md border border-white/70 shadow-lg rounded-lg mx-auto max-w-4xl px-4 mt-12">
      <div className="flex items-center justify-between">
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span
            className="font-semibold text-lg text-gray-900"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            CRM
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-8">
          <Link
            href="#features"
            className="text-gray-800 text-sm font-medium hover:text-black transition"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-800 text-sm font-medium hover:text-black transition"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-gray-800 text-sm font-medium hover:text-black transition"
          >
            FAQ
          </Link>
        </div>

        {/* CTA Button */}
        <div className="relative" ref={buttonRef}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden"
          >
            <Link
              href="/explore"
              className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-full shadow-md hover:from-blue-600 hover:to-green-700 transition"
            >
              Explore More
            </Link>
            <span
              ref={shineRef}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#D1E9FF]/40 to-transparent opacity-0"
              style={{ pointerEvents: "none" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
