"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Heart, MessageCircle, User, Settings } from "lucide-react";
import { cn } from "@fyk/ui";

const navItems = [
  { href: "/discover", icon: Compass, label: "Discover" },
  { href: "/matches", icon: Heart, label: "Matches" },
  { href: "/messages", icon: MessageCircle, label: "Messages" },
  { href: "/profile/edit", icon: User, label: "Profile" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export function NavLinks({ variant }: { variant: "sidebar" | "bottom" }) {
  const pathname = usePathname();

  if (variant === "sidebar") {
    return (
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-purple-600" : "group-hover:text-purple-600"
                )}
              />
              {label}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <div className="flex items-center justify-around px-2 py-2">
      {navItems.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-colors",
              isActive ? "text-purple-600" : "text-muted-foreground hover:text-purple-600"
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
