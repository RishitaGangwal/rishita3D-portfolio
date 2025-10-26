"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#experience" },
  { name: "Builds", href: "#projects" },
  { name: "Connect", href: "#contact" },
];

export const SquigglyUnderline = () => {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className="flex gap-4 sm:gap-6 md:gap-10 justify-center items-center md:sticky sticky top-0 w-full h-[64px] backdrop-filter backdrop-blur-[5px] border-b-[1px] px-4 sm:px-8 md:px-[100px] z-50 border-[rgba(255,_255,_255,_.15)] pb-8 bg-[rgba(255,_255,_255,_.50)] transition-colors duration-300">
      {navigation.map((item) => {
        const isSelected = item.name === selectedLink;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative text-xs sm:text-sm md:text-md leading-6 no-underline mt-10 font-poppins whitespace-nowrap ${
              isSelected ? "font-semibold text-black" : "text-gray-500"
            }`}
            onClick={() => setSelectedLink(item.name)}
          >
            {item.name}
            {isSelected ? (
              <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                <svg
                  width="60"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  className="w-full"
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#7043EC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.20591735839844,
                      strokeDashoffset: 84.20591735839844,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                  />
                </svg>
              </motion.div>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};
