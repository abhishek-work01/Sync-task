"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { UserAuthForm } from "@/components/user-auth-form";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 selection:bg-neutral-800">
      {/* Back Button */}
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <div className="w-full max-w-[400px] flex flex-col items-center justify-center space-y-6 sm:w-[350px]">
        {/* Header */}
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-8 w-8 mb-4 text-white" />
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Create an account
          </h1>
          <p className="text-sm text-neutral-400">
            Enter your email below to create your SyncTask account
          </p>
        </div>

        {/* The Auth Form Component */}
        <div className="w-full">
          <UserAuthForm />
        </div>

        {/* Footer Links */}
        <p className="px-8 text-center text-sm text-neutral-500">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <p className="px-8 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}