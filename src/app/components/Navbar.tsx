"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  // Fix TypeScript: Use HTMLDivElement for the div element
  const buttonRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLSpanElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="flex items-center justify-between w-full bg-[#FAFAFA]/20 backdrop-blur-md border border-white/70 shadow-lg rounded-full px-4 py-3 md:px-6">
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="CRM Logo"
            width={32}
            height={32}
            className="rounded-full"
            priority
          />
          <span
            className="font-semibold text-lg text-gray-900"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            CRM
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links - Desktop */}
        <div
          className="hidden md:flex items-center space-x-8"
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

        {/* CTA Button - Desktop */}
        <div className="hidden md:block relative" ref={buttonRef}>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#FAFAFA]/20 backdrop-blur-md border border-white/70 shadow-lg rounded-lg px-4 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-gray-800 text-base font-medium hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#solution"
                className="text-gray-800 text-base font-medium hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Solution
              </Link>
              <Link
                href="#pricing"
                className="text-gray-800 text-base font-medium hover:text-black transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="relative" ref={buttonRef}>
                <Link
                  href="/buy"
                  className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 rounded-full shadow-md hover:from-blue-600 hover:to-green-700 transition"
                  onClick={() => setIsMenuOpen(false)}
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
          </div>
        )}
      </div>
    </nav>
  );
}
