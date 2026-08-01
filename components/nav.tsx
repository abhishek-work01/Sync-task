"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#realtime", label: "Real-time" },
  { href: "#ai", label: "AI engine" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-xl border px-4 py-3 backdrop-blur-xl transition-colors duration-500 ${
          scrolled
            ? "border-neutral-800 bg-black/80"
            : "border-transparent bg-black/30"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          {/* Replaced teal signal with a sleek metallic/white indicator */}
          <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-white/10 border border-white/20">
            <span className="h-2 w-2 rounded-sm bg-white" />
          </span>
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
            SyncTask
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.78rem] text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden font-mono text-[0.78rem] text-neutral-400 transition-colors hover:text-white sm:block"
          >
            Sign in
          </a>
          <Button size="sm" className="!h-9 !px-4 !text-[0.82rem]">
            Start free
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}