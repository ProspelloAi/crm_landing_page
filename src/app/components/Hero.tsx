"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../../../src/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#FAFAFA] min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Waitlist Callout */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="flex -space-x-3">
              <Avatar className="border-2 border-white">
                <AvatarImage src="https:i.pravatar.cc/40?img=4" alt="User 1" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https:i.pravatar.cc/40?img=5" alt="User 2" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https:github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https:github.com/leerob.png" alt="@leerob" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https:github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-sm text-gray-800 mx-4">Join 4K+ Teams</span>
            <Button
              variant="secondary"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded-full px-4 py-1 text-sm transition-all duration-300"
            >
              Get Early Access →
            </Button>
          </div>
        </div>

        {/* Main Headline and Content */}
        <h1 className="mt-16 gradient-text max-w-4xl mx-auto text-center md:text-6xl text-5xl">
          Elevate Your Business with Smart CRM Solutions
        </h1>

        <p className="mt-6 max-w-8xl mx-auto text-gray-800 md:text-lg text-base">
          Empower your team with intuitive tools, enhanced data security, and
          streamlined workflows to boost productivity and growth.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex justify-center space-x-6">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-3 text-lg transition-all duration-300">
            <Link href="/signup">Start Free Trial</Link>
          </Button>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-3 text-lg transition-all duration-300"
          >
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        {/* Logos Section */}
        <div className="mt-20">
          <span className="text-xl text-blue-500 font-bold">Trusted by</span>
          <div
            className="mt-4 overflow-hidden relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            }}
          >
            <motion.div
              className="flex justify-center gap-4 whitespace-nowrap"
              animate={{
                x: ["0%", "-50%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
            >
              {/* Duplicate set for infinite effect */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((set) => (
                <>
                  <Image
                    key={`a-${set}`}
                    src="/trusted_by/layers.png"
                    alt="Brand A"
                    width={100}
                    height={60}
                    className="flex-shrink-0"
                  />
                  <Image
                    key={`b-${set}`}
                    src="/trusted_by/polymath.png"
                    alt="Brand B"
                    width={100}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <Image
                    key={`c-${set}`}
                    src="/trusted_by/layers.png"
                    alt="Brand C"
                    width={100}
                    height={60}
                    className="flex-shrink-0"
                  />
                  <Image
                    key={`d-${set}`}
                    src="/trusted_by/layers.png"
                    alt="Brand D"
                    width={100}
                    height={60}
                    className="flex-shrink-0"
                  />
                  <Image
                    key={`e-${set}`}
                    src="/trusted_by/layers.png"
                    alt="Brand E"
                    width={100}
                    height={20}
                    className="flex-shrink-0"
                  />
                </>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
