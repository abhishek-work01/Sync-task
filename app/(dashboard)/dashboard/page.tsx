import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { PostCreateButton } from "@/components/post-create-button"
import { PostItem } from "@/components/post-item"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard | SyncTask",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  const tasks = await db.task.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  })

  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Tasks" 
        text="Create and manage your tasks in real-time."
      >
        <PostCreateButton className="rounded-full bg-white text-black hover:bg-zinc-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all font-medium" />
      </DashboardHeader>
      
      <div className="mt-6">
        {tasks?.length ? (
          /* Premium Glassmorphic List Container */
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.01] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md divide-y divide-white/5">
            {tasks.map((task: any) => (
              <div key={task.id} className="transition-colors hover:bg-white/[0.02]">
                <PostItem post={task} />
              </div>
            ))}
          </div>
        ) : (
          /* Premium Empty State */
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
            <EmptyPlaceholder>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-4">
                <EmptyPlaceholder.Icon name="post" className="text-zinc-400" />
              </div>
              <EmptyPlaceholder.Title className="text-xl font-medium text-zinc-100">No tasks created</EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description className="text-zinc-400 font-light max-w-sm mx-auto">
                Your workspace is clear. Start managing your workflow by creating your first task.
              </EmptyPlaceholder.Description>
              <PostCreateButton variant="outline" className="mt-6 border-white/10 hover:bg-white/5 hover:text-white rounded-full" />
            </EmptyPlaceholder>
          </div>
        )}
      </div>
    </DashboardShell>
  )
}