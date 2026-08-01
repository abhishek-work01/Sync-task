"use client";

import { Terminal, MessageSquare, Globe } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Community", href: "#" },
    { name: "Blog", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="relative flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-white/10">
                <span className="h-2 w-2 rounded-sm bg-white" />
              </span>
              <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white">
                SyncTask
              </span>
            </a>
            <p className="text-sm leading-6 text-neutral-400">
              State changes traveling at the speed of your team.
              <br />
              Built for modern engineering workflows.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Terminal className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.product.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-neutral-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-neutral-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-neutral-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-neutral-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-800/50 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs leading-5 text-neutral-500">
            &copy; {new Date().getFullYear()} SyncTask, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-neutral-500 font-mono">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}