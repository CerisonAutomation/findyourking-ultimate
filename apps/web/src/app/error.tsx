"use client";

import { useEffect } from "react";
import { Crown } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 flex flex-col items-center justify-center px-4">
      <Crown className="h-16 w-16 text-purple-600 mb-6" />
      <h1 className="text-4xl font-extrabold text-foreground mb-2">Something went wrong</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
        <a
          href="/"
          className="rounded-xl border border-border px-8 py-3 font-semibold text-foreground hover:bg-muted transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
