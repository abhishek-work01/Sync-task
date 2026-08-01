"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { SyncGraph } from "./sync-graph"; // Fixed import path

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-transparent pt-40 pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-50" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/60 px-3 py-1.5 font-mono text-[0.72rem] text-neutral-400 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            v2.4 &mdash; distributed sync engine, generally available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: EASE }}
            className="text-balance font-display text-[2.75rem] font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.25rem]"
          >
            State changes travel
            <br />
            <span className="text-neutral-400">at the speed of your team.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
            className="mt-7 max-w-lg text-balance text-lg leading-relaxed text-neutral-400"
          >
            SyncTask is a task platform built on the same primitives as the
            systems your team already ships. Every card, comment, and cursor
            updates for everyone in under 100ms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
              Start syncing free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-800 text-white hover:bg-neutral-900 bg-black/50 backdrop-blur-sm">
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch the architecture
            </Button>
          </motion.div>
        </div>

        {/* Signature visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="relative aspect-square w-full max-w-[480px] justify-self-center lg:justify-self-end"
        >
          <div className="absolute inset-0 z-0 rounded-3xl border border-neutral-800 bg-black/40 backdrop-blur-sm" />
          
          <SyncGraph className="absolute inset-0 z-10 h-full w-full" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -left-4 top-8 z-20 w-44 rounded-xl border border-neutral-800 bg-black/90 p-3 shadow-2xl backdrop-blur-md sm:-left-8"
          >
            <div className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-wide text-neutral-500">
              broadcast
            </div>
            <div className="text-[0.78rem] leading-snug text-white">
              task.status &rarr; <span className="text-neutral-300">in_review</span>
            </div>
            <div className="mt-1.5 font-mono text-[0.62rem] text-neutral-500 tabular">
              propagated in 43ms
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="absolute -right-4 bottom-10 z-20 w-40 rounded-xl border border-neutral-800 bg-black/90 p-3 shadow-2xl backdrop-blur-md sm:-right-8"
          >
            <div className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-wide text-neutral-500">
              6 clients subscribed
            </div>
            <div className="flex -space-x-2">
              {["RK", "AS", "MT", "PJ"].map((initials) => (
                <span
                  key={initials}
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-neutral-800 font-mono text-[0.55rem] text-white"
                >
                  {initials}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}