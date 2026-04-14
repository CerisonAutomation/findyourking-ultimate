import type { Profile, MatchStatus } from "@fyk/types";

/**
 * Calculate a compatibility score between two profiles.
 * Returns a value between 0 and 1.
 */
export function calculateCompatibilityScore(
  profileA: Pick<Profile, "age">,
  profileB: Pick<Profile, "age">
): number {
  const ageDiff = Math.abs(profileA.age - profileB.age);
  const ageScore = Math.max(0, 1 - ageDiff / 20);
  return ageScore;
}

/**
 * Determine if two match actions result in a mutual match.
 */
export function isMutualMatch(
  actionA: "like" | "pass" | "superlike",
  actionB: "like" | "pass" | "superlike"
): boolean {
  return (
    (actionA === "like" || actionA === "superlike") &&
    (actionB === "like" || actionB === "superlike")
  );
}

/**
 * Get human-readable label for a match status.
 */
export function getMatchStatusLabel(status: MatchStatus): string {
  const labels: Record<MatchStatus, string> = {
    pending: "Pending",
    accepted: "Matched!",
    rejected: "Passed",
    expired: "Expired",
  };
  return labels[status];
}
