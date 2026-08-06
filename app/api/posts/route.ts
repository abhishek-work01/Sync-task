import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

const taskCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response("Unauthorized", { status: 403 })
    }

    const { user } = session
    const json = await req.json()
    const body = taskCreateSchema.parse(json)

    const task = await db.task.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: user.id,
      },
      select: {
        id: true,
      },
    })

    return new Response(JSON.stringify(task))
  } catch (error) {
    // This console.log is crucial. If the 500 error persists, 
    // the exact Prisma failure will print in your VS Code terminal!
    console.error("TASK CREATION ERROR:", error)

    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}