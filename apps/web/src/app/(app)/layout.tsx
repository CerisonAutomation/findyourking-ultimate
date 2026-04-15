import Link from "next/link";
import { Crown } from "lucide-react";
import type { Metadata } from "next";
import { NavLinks } from "@/components/nav-links";

export const metadata: Metadata = {
  title: {
    default: "App",
    template: "%s | FindYourKing",
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card fixed left-0 top-0 h-full z-40">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-bold">
              Find<span className="text-purple-600">Your</span>King
            </span>
          </Link>
        </div>
        <NavLinks variant="sidebar" />
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors cursor-pointer">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
              U
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">My Profile</p>
              <p className="text-xs text-muted-foreground">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0 min-h-screen">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border bg-card/95 backdrop-blur-sm">
        <NavLinks variant="bottom" />
      </nav>
    </div>
  );
}
