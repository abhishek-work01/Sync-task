import { notFound } from "next/navigation"

import { dashboardConfig } from "@/config/dashboard"
import { getCurrentUser } from "@/lib/session"
import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/nav"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-black text-zinc-50 selection:bg-zinc-800 selection:text-white">
      
      {/* 1. Film Grain Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* 2. Cinematic Ambient Lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-start justify-center">
        <div className="h-[500px] w-[800px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_80%)] blur-3xl"></div>
      </div>

      {/* 3. Frosted Glass Header */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="container flex h-16 items-center justify-between py-4 relative z-10">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header>

      {/* 4. Dashboard Content Area */}
      <div className="container relative z-10 grid flex-1 gap-12 md:grid-cols-[200px_1fr] pt-8 pb-12">
        <aside className="hidden w-[200px] flex-col md:flex border-r border-white/5 pr-6">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        
        {/* CSS Animate-in to mimic Framer Motion on the server */}
        <main className="flex w-full flex-1 flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out fill-mode-both">
          {children}
        </main>
      </div>

      <SiteFooter className="border-t border-white/5 bg-black z-10 relative" />
    </div>
  )
}