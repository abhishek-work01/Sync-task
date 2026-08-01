"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t border-neutral-900 bg-black py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 p-[300px] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to drop the lag?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            Join thousands of engineers building on the fastest state synchronization engine available. Deploy in minutes, scale forever.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
              Start building free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-800 bg-black/50 text-white backdrop-blur-sm hover:bg-neutral-900">
              Read the documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}