// Branded ID types
export type UserId = string & { readonly __brand: "UserId" };
export type ProfileId = string & { readonly __brand: "ProfileId" };
export type MatchId = string & { readonly __brand: "MatchId" };
export type ConversationId = string & { readonly __brand: "ConversationId" };
export type MessageId = string & { readonly __brand: "MessageId" };
export type NotificationId = string & { readonly __brand: "NotificationId" };

export type Gender = "man" | "woman" | "nonbinary" | "other";
export type LookingFor = "men" | "women" | "everyone";
export type SubscriptionTier = "free" | "premium" | "vip";

export type MatchAction = "like" | "pass" | "superlike" | "pending";
export type MatchStatus = "pending" | "matched" | "rejected" | "expired";

export type NotificationType =
  | "new_match"
  | "new_message"
  | "profile_like"
  | "profile_superlike"
  | "subscription_expiry"
  | "verification_approved";

export type ReportReason =
  | "spam"
  | "fake_profile"
  | "inappropriate_photos"
  | "harassment"
  | "underage"
  | "other";

export interface Location {
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export interface ProfilePreferences {
  ageMin: number;
  ageMax: number;
  maxDistanceKm: number;
  lookingFor: LookingFor;
}

export interface User {
  id: UserId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  subscriptionTier: SubscriptionTier;
  isEmailVerified: boolean;
  isBanned: boolean;
}

export interface Profile {
  id: ProfileId;
  userId: UserId;
  displayName: string;
  bio: string;
  age: number;
  gender: Gender;
  lookingFor: LookingFor;
  location: Location;
  photos: string[];
  isVerified: boolean;
  isProfileComplete: boolean;
  lastActiveAt: Date;
  preferences: ProfilePreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface MessagePreview {
  content: string;
  senderId: UserId;
  createdAt: Date;
}

export interface Conversation {
  id: ConversationId;
  participants: UserId[];
  lastMessage: MessagePreview | null;
  unreadCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: MessageId;
  conversationId: ConversationId;
  senderId: UserId;
  content: string;
  type: "text" | "image" | "gif";
  readBy: UserId[];
  createdAt: Date;
}

export interface Match {
  id: MatchId;
  profiles: {
    userAId: UserId;
    userBId: UserId;
  };
  actions: {
    actionA: MatchAction;
    actionB: MatchAction;
  };
  matchedAt: Date | null;
  status: MatchStatus;
  conversationId: ConversationId | null;
}

export interface Notification {
  id: NotificationId;
  userId: UserId;
  type: NotificationType;
  title: string;
  body: string;
  isRead: boolean;
  data: Record<string, unknown>;
  createdAt: Date;
}

export interface Report {
  id: string;
  reporterId: UserId;
  reportedProfileId: ProfileId;
  reason: ReportReason;
  description: string;
  status: "open" | "reviewing" | "resolved" | "dismissed";
  createdAt: Date;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
