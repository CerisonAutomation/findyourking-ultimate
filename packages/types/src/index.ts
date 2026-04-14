// Core TypeScript types for the FindYourKing platform

export type UserId = string;
export type ProfileId = string;
export type MatchId = string;

export interface User {
  id: UserId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Profile {
  id: ProfileId;
  userId: UserId;
  displayName: string;
  bio?: string;
  age: number;
  photos: string[];
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Match {
  id: MatchId;
  userAId: UserId;
  userBId: UserId;
  matchedAt: Date;
  status: MatchStatus;
}

export type MatchStatus = "pending" | "accepted" | "rejected" | "expired";

export interface ApiResponse<T = unknown> {
  data: T | null;
  error: string | null;
  success: boolean;
}
