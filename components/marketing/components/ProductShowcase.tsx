"use client";

import { motion } from "framer-motion";

export function ProductShowcase() {
  return (
    <section id="product" className="relative border-t border-neutral-900 bg-black py-24 sm:py-32">
      {/* Subtle background glow - transitioned from teal to a metallic white/silver */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 p-[400px] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-neutral-500 font-mono uppercase tracking-widest">
            The Sync Engine
          </h2>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See reality, not a refresh button.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-neutral-400">
            Every action is instantly synchronized across all clients. No polling, no websockets to manage, just native multiplayer state out of the box.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flow-root sm:mt-24"
        >
          {/* Outer Glass Frame */}
          <div className="relative -m-2 rounded-xl bg-neutral-900/30 p-2 ring-1 ring-inset ring-neutral-800/50 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-3xl">
            
            {/* Mockup UI Window */}
            <div className="overflow-hidden rounded-md border border-neutral-800 bg-black shadow-2xl">
              
              {/* Window Header */}
              <div className="flex items-center gap-2 border-b border-neutral-800 bg-[#0a0a0a] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
                </div>
                <div className="ml-4 flex-1 text-center font-mono text-[0.65rem] text-neutral-500">
                  synctask.app/workspace/board
                </div>
              </div>
              
              {/* Window Body (Mockup Content) */}
              <div className="grid grid-cols-1 md:grid-cols-3 min-h-[400px]">
                
                {/* Sidebar */}
                <div className="hidden border-r border-neutral-900 bg-[#050505] p-6 md:block">
                  <div className="h-4 w-24 rounded bg-neutral-800" />
                  <div className="mt-8 space-y-4">
                    <div className="h-3 w-full rounded bg-neutral-900" />
                    <div className="h-3 w-4/5 rounded bg-neutral-900" />
                    <div className="h-3 w-5/6 rounded bg-neutral-900" />
                    <div className="h-3 w-3/4 rounded bg-neutral-900" />
                  </div>
                </div>
                
                {/* Main Board Area */}
                <div className="col-span-2 bg-black p-6 md:p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="h-5 w-32 rounded bg-neutral-800" />
                    <div className="flex -space-x-2">
                       <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-white text-[0.5rem] font-bold text-black">
                         RK
                       </span>
                       <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-neutral-800 text-[0.5rem] font-bold text-white">
                         AS
                       </span>
                    </div>
                  </div>

                  {/* Kanban Cards Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className={`rounded-lg border bg-neutral-900/40 p-5 relative overflow-hidden transition-colors ${
                          i === 2 ? 'border-neutral-600' : 'border-neutral-800/80'
                        }`}
                      >
                        {/* Active user editing indicator - Pure White */}
                        {i === 2 && (
                          <div className="absolute top-0 left-0 h-full w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                        )}
                        
                        <div className="mb-4 h-2 w-12 rounded bg-neutral-700" />
                        <div className="h-4 w-3/4 rounded bg-neutral-300" />
                        <div className="mt-2 h-4 w-1/2 rounded bg-neutral-600" />
                        
                        <div className="mt-8 flex items-center justify-between">
                          <div className="h-6 w-16 rounded-full bg-neutral-800" />
                          
                          {/* Real-time typing indicator */}
                          {i === 2 && (
                            <div className="text-[0.65rem] font-mono text-white flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-sm">
                              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                              RK is editing...
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}