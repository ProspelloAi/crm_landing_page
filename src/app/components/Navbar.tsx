"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="flex items-center justify-between w-full bg-[#FAFAFA]/20 backdrop-blur-md border border-white/70 shadow-lg rounded-full px-6 py-3">
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
        <div
          className="flex items-center space-x-8 "
          style={{ fontFamily: "'Schibsted Grotesk', sans-serif" }}
        >
          <Link
            href="#about"
            className="text-gray-800 text-base font-medium hover:text-black transition"
          >
            About
          </Link>
          <Link
            href="#solution"
            className="text-gray-800 text-base font-medium hover:text-black transition"
          >
            Solution
          </Link>
          <Link
            href="#pricing"
            className="text-gray-800 text-base font-medium hover:text-black transition"
          >
            Pricing
          </Link>
        </div>

        {/* CTA Button */}
        <div className="relative" ref={buttonRef}>
          <Link
            href="/buy"
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-full shadow-md hover:from-blue-600 hover:to-green-700 transition"
          >
            Book a Demo
          </Link>
          <span
            ref={shineRef}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#D1E9FF]/40 to-transparent opacity-0"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    </nav>
  );
}
