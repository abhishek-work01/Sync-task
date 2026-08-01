"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, ShieldCheck } from "lucide-react";

const features = [
  {
    id: "realtime",
    title: "Sub-100ms Global Sync",
    description:
      "Our distributed architecture guarantees that state changes propagate to every connected client on earth in milliseconds.",
    icon: Zap,
    metric: "43ms",
    metricLabel: "AVG LATENCY",
    span: "md:col-span-2",
  },
  {
    id: "ai",
    title: "Deterministic AI Engine",
    description:
      "Context-aware issue triaging and PR linking without the hallucinations. Powered by fine-tuned models running on bare metal.",
    icon: Cpu,
    metric: "99.9%",
    metricLabel: "UPTIME",
    span: "md:col-span-1",
  },
  {
    id: "security",
    title: "Enterprise-Grade Security",
    description:
      "End-to-end encryption for all payload data. SOC 2 Type II certified, GDPR compliant, and ready for your red team.",
    icon: ShieldCheck,
    metric: "SOC 2",
    metricLabel: "TYPE II",
    span: "md:col-span-3",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="relative border-t border-neutral-900 bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        <div className="mb-16 max-w-2xl">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-500">
            System Capabilities
          </h2>
          <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for scale. Designed for speed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/20 p-8 transition-colors hover:bg-neutral-900/40 ${feature.span}`}
            >
              {/* Subtle hover glow effect */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-black shadow-inner">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-3 font-display text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 flex items-end gap-3 border-t border-neutral-800/50 pt-6">
                <div className="font-mono text-3xl tracking-tight text-white">
                  {feature.metric}
                </div>
                <div className="mb-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-neutral-500">
                  {feature.metricLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}