import { SubscriptionPlan } from "types"

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description:
    "The free plan is limited to 10 tasks. Upgrade to the PRO plan for unlimited tasks.",
  stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "Unlimited tasks, priority sync, and task analytics for just $3.99/month.",
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
}