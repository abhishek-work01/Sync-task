"use client"

import dynamic from "next/dynamic"

import Link from "next/link"

import { motion } from "framer-motion"

import {

  ArrowRight,

  BarChart3,

  CheckCircle2,

  Clock,

  ShieldCheck,

  Users,

  Zap,

} from "lucide-react"



import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"

import LenisProvider, {

  useScrollProgressRef,

} from "@/components/marketing/lenis-provider"



// WebGL must never touch SSR — load it client-only.

const HeroScene = dynamic(

  () => import("@/components/marketing/hero-scene"),

  { ssr: false }

)



// Ultra-smooth Apple/Vercel style easing curve

const premiumEasing = [0.16, 1, 0.3, 1]



const containerVariants = {

  hidden: { opacity: 0 },

  visible: {

    opacity: 1,

    transition: {

      staggerChildren: 0.1,

      delayChildren: 0.2,

    },

  },

}



const itemVariants = {

  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },

  visible: {

    opacity: 1,

    y: 0,

    filter: "blur(0px)",

    transition: { duration: 0.8, ease: premiumEasing },

  },

}



function PageContent() {

  // ref, not state — scrolling drives WebGL uniforms without re-rendering the DOM

  const scrollRef = useScrollProgressRef()



  return (

    <div className="relative min-h-screen bg-black text-zinc-50 selection:bg-zinc-800 selection:text-white overflow-hidden">



      {/* 0. WebGL fluid background — sits behind everything else */}

      <HeroScene scrollRef={scrollRef} />



      {/* 1. THE SECRET SAUCE: Film Grain Noise Overlay */}

      <div

        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]"

        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}

      ></div>



      {/* 2. CINEMATIC LIGHTING: Top Spotlight */}

      <div className="pointer-events-none absolute inset-0 z-0 flex items-start justify-center">

        <div className="h-[600px] w-[800px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15)_0%,rgba(0,0,0,0)_80%)] blur-2xl"></div>

      </div>



      <main className="relative z-10 flex flex-col items-center">



        {/* HERO SECTION */}

        <section className="w-full space-y-6 pb-12 pt-24 md:pb-20 md:pt-32 lg:pt-40">

          <motion.div

            initial="hidden"

            animate="visible"

            variants={containerVariants}

            className="container flex max-w-[64rem] flex-col items-center gap-8 text-center"

          >

            {/* Animated Pill Badge with Inner Glow */}

            <motion.div

              variants={itemVariants}

              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-zinc-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl"

            >

              <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse"></span>

              <span>SyncTask 2.0 Engine Live</span>

            </motion.div>



            {/* Typography: Tighter tracking, pure white to grey gradient */}

            <motion.h1

              variants={itemVariants}

              className="font-heading text-5xl font-medium tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent"

            >

              Sync your tasks, <br className="hidden sm:inline" />

              master your workflow.

            </motion.h1>



            <motion.p

              variants={itemVariants}

              className="max-w-[42rem] text-lg leading-relaxed text-zinc-400 sm:text-xl font-light tracking-wide"

            >

              The ultimate dashboard to coordinate your projects, organize your teams, and boost your daily productivity. Built for speed and efficiency.

            </motion.p>



            {/* Premium Button: White background with subtle inner shadow to look 3D */}

            <motion.div variants={itemVariants} className="flex pt-4">

              <Link

                href="/login"

                className={cn(

                  buttonVariants({ size: "lg" }),

                  "group relative overflow-hidden rounded-full bg-white text-black px-8 py-6 text-base font-medium transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]"

                )}

              >

                <span className="relative z-10 flex items-center">

                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

                </span>

                {/* Button Hover Glow */}

                <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 transition-opacity group-hover:opacity-100"></div>

              </Link>

            </motion.div>

          </motion.div>

        </section>



        {/* BENTO GRID FEATURES SECTION */}

        <section id="features" className="container w-full space-y-16 py-20 md:py-32 relative">



          <motion.div

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, margin: "-100px" }}

            transition={{ duration: 0.8, ease: premiumEasing }}

            className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center"

          >

            <h2 className="font-heading text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl text-zinc-100">

              Everything you need

            </h2>

            <p className="max-w-[85%] text-zinc-400 sm:text-lg font-light tracking-wide">

              SyncTask comes packed with the tools you need to manage your daily operations, track your progress, and hit your long-term goals without the clutter.

            </p>

          </motion.div>



          <motion.div

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-50px" }}

            variants={containerVariants}

            className="mx-auto grid max-w-[64rem] gap-4 sm:grid-cols-2 md:grid-cols-3"

          >

            {/* Reusable Data for Grid to keep code clean */}

            {[

              { icon: CheckCircle2, title: "Task Organization", desc: "Break down complex projects into simple, manageable tasks with real-time sync.", color: "text-indigo-400" },

              { icon: Users, title: "Team Collaboration", desc: "Work seamlessly with your team in real-time on shared goals and boards.", color: "text-purple-400" },

              { icon: BarChart3, title: "Progress Analytics", desc: "Monitor your productivity with intuitive dark-mode dashboards and visual charts.", color: "text-blue-400" },

              { icon: Zap, title: "Custom Workflows", desc: "Tailor your task stages to fit your unique process and operational style.", color: "text-emerald-400" },

              { icon: ShieldCheck, title: "Secure Access", desc: "Keep your team's data safe with role-based permissions and encrypted auth.", color: "text-amber-400" },

              { icon: Clock, title: "Deadline Management", desc: "Never miss a due date with built-in scheduling, tags, and timeline reminders.", color: "text-rose-400" },

            ].map((feature, idx) => (

              <motion.div

                key={idx}

                variants={itemVariants}

                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}

                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-colors hover:bg-white/[0.03] hover:border-white/10"

              >

                {/* Radial gradient hover effect */}

                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>



                <div className="relative z-10 flex h-full flex-col justify-between space-y-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500 ease-out">

                    <feature.icon className={cn("h-5 w-5", feature.color)} />

                  </div>

                  <div className="space-y-2">

                    <h3 className="font-medium tracking-tight text-lg text-zinc-100">{feature.title}</h3>

                    <p className="text-sm text-zinc-400 leading-relaxed font-light">

                      {feature.desc}

                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </section>



        {/* BOTTOM CTA: Borderless glass panel */}

        <section className="container w-full py-20 pb-32">

          <motion.div

            initial={{ opacity: 0, y: 40, scale: 0.95 }}

            whileInView={{ opacity: 1, y: 0, scale: 1 }}

            viewport={{ once: true }}

            transition={{ duration: 1, ease: premiumEasing }}

            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center rounded-3xl border border-white/10 bg-zinc-950/50 p-8 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl sm:p-16 relative overflow-hidden"

          >

            {/* Background CTA Glow */}

            <div className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>



            <h2 className="font-heading text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl text-zinc-100">

              Built for Ultimate Productivity

            </h2>

            <p className="mt-4 max-w-[85%] text-zinc-400 sm:text-lg font-light">

              SyncTask is designed to simplify your operations so you can focus on what matters most.

            </p>

            <div className="mt-10">

              <Link

                href="/login"

                className={cn(

                  buttonVariants({ size: "lg" }),

                  "rounded-full bg-white px-8 text-black hover:bg-zinc-200 transition-colors font-medium shadow-[0_0_20px_rgba(255,255,255,0.15)]"

                )}

              >

                Start building today

              </Link>

            </div>

          </motion.div>

        </section>

      </main>

    </div>

  )

}



export default function IndexPage() {

  return (

    <LenisProvider>

      <PageContent />

    </LenisProvider>

  )

} 