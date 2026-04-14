import Link from "next/link";
import { Crown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Auth",
    template: "%s | FindYourKing",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 flex flex-col">
      <header className="p-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <Crown className="h-6 w-6 text-purple-600" />
          <span className="text-xl font-bold">
            Find<span className="text-purple-600">Your</span>King
          </span>
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 pb-12">
        {children}
      </main>
    </div>
  );
}
