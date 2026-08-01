"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: "$0",
    description: "For small teams exploring distributed sync capabilities.",
    features: [
      "Up to 5 team members",
      "Standard sub-100ms sync",
      "Community support",
      "7-day state history",
    ],
    featured: false,
    cta: "Start free",
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: "$29",
    description: "For production teams needing guaranteed uptime and AI tools.",
    features: [
      "Unlimited team members",
      "Deterministic AI engine",
      "Priority 24/7 support",
      "90-day state history",
      "Custom Webhooks",
    ],
    featured: true,
    cta: "Start Pro trial",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Custom",
    description: "Dedicated infrastructure and compliance for large organizations.",
    features: [
      "Bare-metal dedicated instances",
      "SOC 2 Type II reports",
      "SAML / Single Sign-On (SSO)",
      "Unlimited state history",
      "Dedicated success engineer",
    ],
    featured: false,
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-neutral-900 bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Pricing
          </h2>
          <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Priced for deployment.
          </p>
        </div>
        
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-neutral-400">
          Start for free, scale infinitely. Our pricing is designed to map directly to the compute and storage your team actually consumes.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: tierIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-8 xl:p-10 ${
                tier.featured
                  ? "bg-neutral-900/40 ring-1 ring-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                  : "bg-black ring-1 ring-neutral-800"
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={`text-lg font-semibold leading-8 ${
                    tier.featured ? "text-white" : "text-neutral-200"
                  }`}
                >
                  {tier.name}
                </h3>
                {tier.featured && (
                  <p className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase leading-5 text-white">
                    Most popular
                  </p>
                )}
              </div>
              
              <p className="mt-4 text-sm leading-6 text-neutral-400">
                {tier.description}
              </p>
              
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.priceMonthly}
                </span>
                {tier.priceMonthly !== "Custom" && (
                  <span className="text-sm font-semibold leading-6 text-neutral-500">
                    /month
                  </span>
                )}
              </p>
              
              <Button
                variant={tier.featured ? "default" : "outline"}
                className={`mt-6 w-full ${
                  tier.featured
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "border-neutral-800 text-white hover:bg-neutral-900"
                }`}
              >
                {tier.cta}
              </Button>
              
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-neutral-400 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-5 w-5 flex-none ${
                        tier.featured ? "text-white" : "text-neutral-500"
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}