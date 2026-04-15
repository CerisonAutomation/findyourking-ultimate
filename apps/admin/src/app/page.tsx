import { Users, Heart, TrendingUp, Flag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dashboard" };

const metrics = [
  { label: "Total Users", value: "52,341", change: "+12%", icon: Users, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/30" },
  { label: "Active Today", value: "8,102", change: "+5%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50 dark:bg-green-950/30" },
  { label: "New Matches", value: "1,843", change: "+18%", icon: Heart, color: "text-pink-600", bg: "bg-pink-50 dark:bg-pink-950/30" },
  { label: "Open Reports", value: "24", change: "-3%", icon: Flag, color: "text-red-600", bg: "bg-red-50 dark:bg-red-950/30" },
];

const activity = [
  { text: "New user registered: james.t@email.com", time: "2m ago" },
  { text: "Report #1024 resolved", time: "15m ago" },
  { text: "Profile verified: sophia_ny", time: "32m ago" },
  { text: "Subscription upgrade: premium → VIP", time: "1h ago" },
  { text: "New match formed between users #8821 and #9034", time: "2h ago" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ label, value, change, icon: Icon, color, bg }) => (
          <div key={label} className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">{label}</span>
              <div className={"h-10 w-10 rounded-xl " + bg + " flex items-center justify-center"}>
                <Icon className={"h-5 w-5 " + color} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            <p className="text-xs text-gray-500 mt-1">
              <span className={change.startsWith("+") ? "text-green-600" : "text-red-500"}>{change}</span> vs last month
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {activity.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.text}</p>
                <span className="text-xs text-gray-400 shrink-0 ml-4">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Platform Health</h3>
          <div className="space-y-4">
            {[
              { label: "Profile Completion Rate", value: 72 },
              { label: "Match Acceptance Rate", value: 94 },
              { label: "User Retention (30d)", value: 68 },
              { label: "Verified Profiles", value: 81 },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">{label}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{value}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                  <div className="h-2 rounded-full bg-purple-600" style={{width: value + "%"}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
