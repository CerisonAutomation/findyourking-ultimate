import type { Profile } from "@fyk/types";

const PLACEHOLDER_PHOTO = "https://placehold.co/600x800/7c3aed/ffffff?text=No+Photo";

export function formatProfileTitle(profile: Pick<Profile, "displayName" | "age">): string {
  return `${profile.displayName}, ${profile.age}`;
}

export function getPrimaryPhoto(profile: Pick<Profile, "photos">): string {
  return profile.photos.length > 0 ? profile.photos[0] : PLACEHOLDER_PHOTO;
}

export function isProfileComplete(profile: Profile): boolean {
  return (
    profile.displayName.trim().length >= 2 &&
    profile.age >= 18 &&
    profile.gender !== undefined &&
    profile.lookingFor !== undefined &&
    profile.location.city.trim().length > 0 &&
    profile.location.country.trim().length > 0 &&
    profile.photos.length > 0 &&
    profile.bio.trim().length > 0
  );
}

export function getProfileCompletionPercent(profile: Profile): number {
  const checks: boolean[] = [
    profile.displayName.trim().length >= 2,
    profile.age >= 18,
    profile.gender !== undefined && profile.gender !== null,
    profile.lookingFor !== undefined && profile.lookingFor !== null,
    profile.location.city.trim().length > 0,
    profile.location.country.trim().length > 0,
    profile.photos.length > 0,
    profile.bio.trim().length > 0,
    profile.preferences.ageMin >= 18,
    profile.preferences.maxDistanceKm > 0,
  ];

  const completed = checks.filter(Boolean).length;
  return Math.round((completed / checks.length) * 100);
}

export function getLastActiveDuration(profile: Pick<Profile, "lastActiveAt">): string {
  const now = new Date();
  const diffMs = now.getTime() - new Date(profile.lastActiveAt).getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 60) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks !== 1 ? "s" : ""} ago`;
  const diffMonths = Math.floor(diffDays / 30);
  return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
}
