import Link from "next/link";
import { LayoutDashboard, Users, Flag, Settings, Crown } from "lucide-react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = { title: { default: "Admin", template: "%s | FYK Admin" } };

const navItems = [
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/users", icon: Users, label: "Users" },
  { href: "/reports", icon: Flag, label: "Reports" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-gray-50 dark:bg-gray-950">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col fixed h-full">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center gap-2">
              <Crown className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-gray-900 dark:text-white">FYK Admin</span>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(({ href, icon: Icon, label }) => (
                <Link key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 p-2 rounded-lg">
                <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">A</div>
                <div><p className="text-sm font-medium text-gray-900 dark:text-white">Admin</p><p className="text-xs text-gray-500">Super Admin</p></div>
              </div>
            </div>
          </aside>
          <div className="flex-1 ml-64">
            <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">FindYourKing Admin</h1>
              <span className="text-sm text-gray-500">Logged in as Admin</span>
            </header>
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
