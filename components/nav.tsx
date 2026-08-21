"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#realtime", label: "Real-time" },
  { href: "#ai", label: "AI engine" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
];

// 1. YOUR MARKETING NAVBAR (Fixed routing links)
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
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-white/10 border border-white/20">
            <span className="h-2 w-2 rounded-sm bg-white" />
          </span>
          <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
            SyncTask
          </span>
        </Link>

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
          {/* FIXED: Pointing to actual /login route */}
          <Link
            href="/login"
            className="hidden font-mono text-[0.78rem] text-neutral-400 transition-colors hover:text-white sm:block"
          >
            Sign in
          </Link>
          {/* FIXED: Pointing to actual /register route */}
          <Link href="/register">
            <Button size="sm" className="!h-9 !px-4 !text-[0.82rem]">
              Start free
            </Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

// 2. THE MISSING DASHBOARD NAV (Safe icon resolution)
export function DashboardNav({ items }: { items: any[] }) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        // Safely resolve icon to prevent server-side context crashes
        const Icon = (Icons as Record<string, any>)[item.icon] || Icons.arrowRight;

        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-800 hover:text-white transition-colors",
                  path === item.href ? "bg-neutral-800 text-white" : "text-neutral-400",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}