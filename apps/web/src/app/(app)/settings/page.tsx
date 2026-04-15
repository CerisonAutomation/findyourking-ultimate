"use client";

import { useState } from "react";
import { Bell, Lock, Eye, Crown, Trash2, ChevronRight } from "lucide-react";
import { Switch } from "@fyk/ui";

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"account" | "notifications" | "privacy" | "subscription" | "danger">("account");
  const [notifications, setNotifications] = useState({
    newMatch: true,
    newMessage: true,
    profileLike: false,
    email: true,
    push: true,
  });
  const [privacy, setPrivacy] = useState({
    showAge: true,
    showLocation: true,
    showOnlineStatus: true,
  });

  const tabs = [
    { id: "account" as const, label: "Account", icon: Lock },
    { id: "notifications" as const, label: "Notifications", icon: Bell },
    { id: "privacy" as const, label: "Privacy", icon: Eye },
    { id: "subscription" as const, label: "Subscription", icon: Crown },
    { id: "danger" as const, label: "Danger Zone", icon: Trash2 },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground mb-6">Settings</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-48 shrink-0">
          <nav className="space-y-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === id
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "account" && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <input
                  type="email"
                  defaultValue="user@example.com"
                  className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Current Password</label>
                <input
                  type="password"
                  placeholder="{chr(8226) * 8}"
                  className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">New Password</label>
                <input
                  type="password"
                  placeholder="{chr(8226) * 8}"
                  className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <button className="rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition-colors">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-4">
              {(
                [
                  ["newMatch", "New matches"],
                  ["newMessage", "New messages"],
                  ["profileLike", "Someone likes your profile"],
                  ["email", "Email notifications"],
                  ["push", "Push notifications"],
                ] as const
              ).map(([key, label]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-foreground">{label}</span>
                  <Switch
                    checked={notifications[key]}
                    onCheckedChange={(checked) => setNotifications((n) => ({ ...n, [key]: checked }))}
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="space-y-4">
              {(
                [
                  ["showAge", "Show my age on profile"],
                  ["showLocation", "Show my location"],
                  ["showOnlineStatus", "Show when I'm online"],
                ] as const
              ).map(([key, label]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-foreground">{label}</span>
                  <Switch
                    checked={privacy[key]}
                    onCheckedChange={(checked) => setPrivacy((p) => ({ ...p, [key]: checked }))}
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "subscription" && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground">Current Plan</p>
                    <p className="text-sm text-muted-foreground">Free tier</p>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">FREE</span>
                </div>
                <p className="text-sm text-muted-foreground">10 swipes/day · 5 messages/day</p>
              </div>
              <div className="rounded-2xl border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-card p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-semibold text-foreground">Premium</p>
                    <p className="text-3xl font-extrabold text-foreground">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                  </div>
                  <Crown className="h-8 w-8 text-purple-600" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">Unlimited swipes, messages, and more</p>
                <button className="w-full rounded-xl bg-purple-600 py-2.5 text-sm font-semibold text-white hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  Upgrade to Premium
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {activeTab === "danger" && (
            <div className="space-y-4">
              <div className="rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-5">
                <h3 className="font-semibold text-destructive mb-2">Delete Account</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This action is permanent and cannot be undone. All your matches, messages,
                  and profile data will be permanently deleted.
                </p>
                <button className="rounded-xl border-2 border-destructive px-4 py-2.5 text-sm font-semibold text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Delete My Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
