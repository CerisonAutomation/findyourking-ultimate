import type { Profile, MatchAction, MatchStatus } from "@fyk/types";

function haversineDistanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function getLookingForGenders(lookingFor: string): string[] {
  if (lookingFor === "men") return ["man"];
  if (lookingFor === "women") return ["woman"];
  return ["man", "woman", "nonbinary", "other"];
}

export function calculateCompatibilityScore(
  profileA: Profile,
  profileB: Profile
): number {
  let score = 0;
  let factors = 0;

  // Age compatibility (30% weight)
  const midA = (profileA.preferences.ageMin + profileA.preferences.ageMax) / 2;
  const midB = (profileB.preferences.ageMin + profileB.preferences.ageMax) / 2;
  const ageDiff = Math.abs(profileA.age - profileB.age);
  const targetAgeDiff = Math.abs(midA - profileB.age);
  const ageScore = Math.max(0, 1 - ageDiff / 30) * 0.5 + Math.max(0, 1 - targetAgeDiff / 15) * 0.5;
  score += ageScore * 0.3;
  factors += 0.3;

  // Mutual preference compatibility (40% weight)
  const aWantsB = getLookingForGenders(profileA.lookingFor).includes(profileB.gender);
  const bWantsA = getLookingForGenders(profileB.lookingFor).includes(profileA.gender);
  const prefScore = (aWantsB ? 0.5 : 0) + (bWantsA ? 0.5 : 0);
  score += prefScore * 0.4;
  factors += 0.4;

  // Distance compatibility (30% weight)
  if (
    profileA.location.lat !== 0 &&
    profileA.location.lng !== 0 &&
    profileB.location.lat !== 0 &&
    profileB.location.lng !== 0
  ) {
    const distKm = haversineDistanceKm(
      profileA.location.lat,
      profileA.location.lng,
      profileB.location.lat,
      profileB.location.lng
    );
    const maxDist = Math.min(profileA.preferences.maxDistanceKm, profileB.preferences.maxDistanceKm);
    const distScore = Math.max(0, 1 - distKm / maxDist);
    score += distScore * 0.3;
    factors += 0.3;
  }

  return factors > 0 ? score / factors : 0;
}

export function filterProfilesByPreferences(
  profiles: Profile[],
  currentProfile: Profile
): Profile[] {
  return profiles.filter((p) => {
    if (p.id === currentProfile.id) return false;

    // Age filter
    if (
      p.age < currentProfile.preferences.ageMin ||
      p.age > currentProfile.preferences.ageMax
    ) {
      return false;
    }

    // Gender preference filter
    const wantedGenders = getLookingForGenders(currentProfile.lookingFor);
    if (!wantedGenders.includes(p.gender)) return false;

    // Distance filter
    if (
      currentProfile.location.lat !== 0 &&
      currentProfile.location.lng !== 0 &&
      p.location.lat !== 0 &&
      p.location.lng !== 0
    ) {
      const distKm = haversineDistanceKm(
        currentProfile.location.lat,
        currentProfile.location.lng,
        p.location.lat,
        p.location.lng
      );
      if (distKm > currentProfile.preferences.maxDistanceKm) return false;
    }

    return true;
  });
}

export function isMutualMatch(actionA: MatchAction, actionB: MatchAction): boolean {
  return (
    (actionA === "like" || actionA === "superlike") &&
    (actionB === "like" || actionB === "superlike")
  );
}

export function getMatchStatusLabel(status: MatchStatus): string {
  const labels: Record<MatchStatus, string> = {
    pending: "Pending",
    matched: "Matched!",
    rejected: "Passed",
    expired: "Expired",
  };
  return labels[status];
}

export function sortProfilesByScore(
  profiles: Profile[],
  currentProfile: Profile
): Profile[] {
  return [...profiles].sort(
    (a, b) =>
      calculateCompatibilityScore(currentProfile, b) -
      calculateCompatibilityScore(currentProfile, a)
  );
}
