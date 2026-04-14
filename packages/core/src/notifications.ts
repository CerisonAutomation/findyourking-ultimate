import type { Notification, NotificationType } from "@fyk/types";

const notificationLabels: Record<NotificationType, string> = {
  new_match: "You have a new match!",
  new_message: "You have a new message",
  profile_like: "Someone liked your profile",
  profile_superlike: "Someone super-liked your profile ⭐",
  subscription_expiry: "Your subscription is expiring soon",
  verification_approved: "Your profile has been verified ✓",
};

export function formatNotificationMessage(notification: Notification): string {
  return notification.body || notificationLabels[notification.type] || "New notification";
}

interface GroupedNotifications {
  today: Notification[];
  yesterday: Notification[];
  older: Notification[];
}

function isToday(date: Date): boolean {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

function isYesterday(date: Date): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return (
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate()
  );
}

export function groupNotificationsByDate(
  notifications: Notification[]
): GroupedNotifications {
  const groups: GroupedNotifications = { today: [], yesterday: [], older: [] };

  for (const notification of notifications) {
    const date = new Date(notification.createdAt);
    if (isToday(date)) {
      groups.today.push(notification);
    } else if (isYesterday(date)) {
      groups.yesterday.push(notification);
    } else {
      groups.older.push(notification);
    }
  }

  return groups;
}
