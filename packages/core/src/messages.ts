import type { Message, UserId } from "@fyk/types";

export function formatMessageTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  if (diffDays === 1) {
    return "Yesterday";
  }

  if (diffDays < 7) {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

interface MessageGroup {
  date: string;
  messages: Message[];
}

export function groupMessagesByDate(messages: Message[]): MessageGroup[] {
  const groups = new Map<string, Message[]>();

  for (const message of messages) {
    const date = new Date(message.createdAt);
    const key = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const existing = groups.get(key);
    if (existing) {
      existing.push(message);
    } else {
      groups.set(key, [message]);
    }
  }

  return Array.from(groups.entries()).map(([date, msgs]) => ({
    date,
    messages: msgs,
  }));
}

export function isOwnMessage(message: Message, userId: UserId): boolean {
  return message.senderId === userId;
}
