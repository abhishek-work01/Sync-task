import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {
  return (
    <>
      {/* 1. HERO SECTION (Image 3 Fixes) */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Sync your tasks, master your workflow.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            The ultimate dashboard to coordinate your projects, organize your teams, and boost your daily productivity. Built for speed and efficiency.
          </p>
          <div>
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION (Image 2 Fixes) */}
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Everything you need
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            SyncTask comes packed with the tools you need to manage your daily operations, track your progress, and hit your long-term goals without the clutter.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Task Organization</h3>
                <p className="text-sm text-muted-foreground">
                  Break down complex projects into simple, manageable tasks.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.883 5.04-2.83 5.82-5.39 7.14l2.84 5.81c-2.65.62-5.14-.11-6.19-2.58-1.07 2.47-3.56 3.2-6.22 2.58l2.85-5.81c-2.56-1.32-6.28-2.1-5.39-7.14 2.14 1.15 4.54 1.24 6.72.44l-2.06-6.12c2.4-.95 5.09-.44 6.55 1.54 1.45-1.98 4.14-2.49 6.53-1.54l-2.06 6.12c2.18.8 4.59.71 6.73-.44z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Work seamlessly with your team in real-time on shared goals.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Progress Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your productivity with intuitive dashboards and charts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Custom Workflows</h3>
                <p className="text-sm text-muted-foreground">
                  Tailor your task stages to fit your unique process and style.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Secure Access</h3>
                <p className="text-sm text-muted-foreground">
                  Keep your team's data safe with role-based permissions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Deadline Management</h3>
                <p className="text-sm text-muted-foreground">
                  Never miss a due date with built-in scheduling and reminders.
                </p>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            SyncTask integrates perfectly into your daily workflow, ensuring nothing slips through the cracks and your team stays on exactly the same page.
          </p>
        </div>
      </section>

      {/* 3. OPEN SOURCE SECTION (Image 1 Fixes) */}
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Built for Ultimate Productivity
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            SyncTask is designed to simplify your operations so you can focus on what matters most. Start tracking your progress today.
          </p>
        </div>
      </section>
    </>
  )
}