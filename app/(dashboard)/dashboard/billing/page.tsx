import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BillingForm } from "@/components/billing-form"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Billing | SyncTask",
  description: "Manage billing and your subscription plan.",
}

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-8">
        <Alert className="!pl-14">
          {/* Pure SVG to bypass Server Component errors entirely */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-4 top-4 h-5 w-5 text-yellow-500"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <AlertTitle>SyncTask Billing Demo</AlertTitle>
          <AlertDescription>
            SyncTask uses Stripe test mode. You will not be charged.
          </AlertDescription>
        </Alert>
        
        <BillingForm
          subscriptionPlan={{
            name: "Free",
            description: "The free plan.",
            stripePriceId: "",
            isPro: false,
            stripeCurrentPeriodEnd: 0,
          } as any}
        />
      </div>
    </DashboardShell>
  )
}