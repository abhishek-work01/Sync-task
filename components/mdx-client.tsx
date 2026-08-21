"use client"

import { Mdx } from "@/components/mdx-components"

interface MdxClientProps {
  code: string
}

export function MdxClient({ code }: MdxClientProps) {
  return <Mdx code={code} />
}