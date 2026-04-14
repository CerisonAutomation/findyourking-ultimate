import type { Profile } from "@fyk/types";

const PLACEHOLDER_AVATAR = "/placeholder-avatar.png";

/**
 * Format a profile's display name with age.
 */
export function formatProfileTitle(profile: Pick<Profile, "displayName" | "age">): string {
  return `${profile.displayName}, ${profile.age}`;
}

/**
 * Get a profile's primary photo URL (first photo, or placeholder).
 */
export function getPrimaryPhoto(profile: Pick<Profile, "photos">): string {
  return profile.photos[0] ?? PLACEHOLDER_AVATAR;
}

/**
 * Check whether a profile is complete (all required fields filled).
 */
export function isProfileComplete(
  profile: Partial<Profile>
): profile is Profile {
  return (
    typeof profile.displayName === "string" &&
    profile.displayName.length > 0 &&
    typeof profile.age === "number" &&
    Array.isArray(profile.photos)
  );
}
