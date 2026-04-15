import Link from "next/link";
import { Crown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 flex flex-col items-center justify-center px-4">
      <Crown className="h-16 w-16 text-purple-600 mb-6" />
      <h1 className="text-6xl font-extrabold text-foreground mb-2">404</h1>
      <p className="text-xl font-semibold text-foreground mb-2">Page Not Found</p>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
