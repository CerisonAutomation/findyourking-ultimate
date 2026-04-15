"use client";

import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { Heart, X, Star, MapPin, Shield, SlidersHorizontal } from "lucide-react";

// Note: metadata export won't work in client components; handled by parent layout

interface MockProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  compatibility: number;
  emoji: string;
  gradient: string;
  tags: string[];
}

const MOCK_PROFILES: MockProfile[] = [
  {
    id: "1",
    name: "Alexandra",
    age: 27,
    location: "New York, NY",
    bio: "Art director by day, amateur chef by night. Looking for someone to explore the city's hidden gems with.",
    compatibility: 94,
    emoji: "👸",
    gradient: "from-purple-500 via-pink-500 to-rose-400",
    tags: ["Art", "Cooking", "Travel", "Music"],
  },
  {
    id: "2",
    name: "Marcus",
    age: 31,
    location: "Brooklyn, NY",
    bio: "Software engineer who loves hiking and building things. Looking for a partner who is ambitious and kind.",
    compatibility: 88,
    emoji: "🤴",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    tags: ["Tech", "Hiking", "Books", "Coffee"],
  },
  {
    id: "3",
    name: "Sophia",
    age: 25,
    location: "Manhattan, NY",
    bio: "Investment banker with a passion for contemporary art and weekend getaways to Montauk.",
    compatibility: 91,
    emoji: "💎",
    gradient: "from-pink-400 via-rose-500 to-red-400",
    tags: ["Finance", "Art", "Travel", "Yoga"],
  },
  {
    id: "4",
    name: "Jordan",
    age: 29,
    location: "Jersey City, NJ",
    bio: "Architect designing sustainable buildings. Loves jazz, farmers markets, and meaningful conversations.",
    compatibility: 85,
    emoji: "🌟",
    gradient: "from-green-400 via-teal-500 to-cyan-500",
    tags: ["Architecture", "Jazz", "Sustainability"],
  },
];

function ProfileCard({
  profile,
  onSwipe,
  isTop,
  index,
}: {
  profile: MockProfile;
  onSwipe: (id: string, direction: "left" | "right" | "up") => void;
  isTop: boolean;
  index: number;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setIsDragging(false);
    setDragX(0);
    const threshold = 100;
    if (info.offset.x > threshold) {
      onSwipe(profile.id, "right");
    } else if (info.offset.x < -threshold) {
      onSwipe(profile.id, "left");
    } else if (info.offset.y < -threshold) {
      onSwipe(profile.id, "up");
    }
  };

  const likeOpacity = Math.max(0, Math.min(1, dragX / 100));
  const passOpacity = Math.max(0, Math.min(1, -dragX / 100));

  return (
    <motion.div
      drag={isTop}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.8}
      onDragStart={() => setIsDragging(true)}
      onDrag={(_, info) => setDragX(info.offset.x)}
      onDragEnd={handleDragEnd}
      animate={{
        scale: isTop ? 1 : 1 - index * 0.03,
        y: index * -12,
        zIndex: 10 - index,
      }}
      whileDrag={{ cursor: "grabbing" }}
      className={`absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ${isTop ? "cursor-grab" : "pointer-events-none"}`}
      style={{ touchAction: "none" }}
    >
      {/* Gradient background as photo placeholder */}
      <div className={`w-full h-full bg-gradient-to-br ${profile.gradient} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[120px] opacity-80 select-none">{profile.emoji}</span>
        </div>

        {/* Swipe indicators */}
        {isDragging && (
          <>
            <motion.div
              className="absolute top-8 left-8 rounded-xl border-4 border-green-500 bg-green-500/20 px-4 py-2 rotate-[-20deg]"
              style={{ opacity: likeOpacity }}
            >
              <span className="text-green-500 font-black text-2xl">LIKE</span>
            </motion.div>
            <motion.div
              className="absolute top-8 right-8 rounded-xl border-4 border-red-500 bg-red-500/20 px-4 py-2 rotate-[20deg]"
              style={{ opacity: passOpacity }}
            >
              <span className="text-red-500 font-black text-2xl">PASS</span>
            </motion.div>
          </>
        )}

        {/* Card info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {profile.name}, {profile.age}
              </h2>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="h-3.5 w-3.5 text-white/70" />
                <span className="text-sm text-white/70">{profile.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
              <Shield className="h-3.5 w-3.5 text-green-400" />
              <span className="text-sm font-bold text-white">{profile.compatibility}%</span>
            </div>
          </div>
          <p className="text-sm text-white/80 line-clamp-2 mb-3">{profile.bio}</p>
          <div className="flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DiscoverPage() {
  const [profiles, setProfiles] = useState<MockProfile[]>(MOCK_PROFILES);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const handleSwipe = (id: string, direction: "left" | "right" | "up") => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
    if (direction === "right") setLastAction("❤️ Liked!");
    else if (direction === "left") setLastAction("✕ Passed");
    else if (direction === "up") setLastAction("⭐ Super Liked!");
    setTimeout(() => setLastAction(null), 1500);
  };

  const currentProfile = profiles[0];

  const handleAction = (action: "like" | "pass" | "superlike") => {
    if (!currentProfile) return;
    handleSwipe(
      currentProfile.id,
      action === "like" ? "right" : action === "superlike" ? "up" : "left"
    );
  };

  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
        <h1 className="text-xl font-bold text-foreground">Discover</h1>
        <button className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* Action feedback */}
      {lastAction && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-foreground text-background rounded-full px-6 py-2 text-sm font-bold shadow-lg"
        >
          {lastAction}
        </motion.div>
      )}

      {/* Card stack area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-4">
        {profiles.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              You&apos;ve seen everyone!
            </h3>
            <p className="text-muted-foreground mb-6">
              Check back later for new profiles, or expand your preferences.
            </p>
            <button
              onClick={() => setProfiles(MOCK_PROFILES)}
              className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
            >
              Reset &amp; Start Over
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-sm" style={{ height: "480px" }}>
            {profiles
              .slice(0, 3)
              .reverse()
              .map((profile, reversedIndex) => {
                const index = Math.min(2, profiles.length - 1) - reversedIndex;
                return (
                  <ProfileCard
                    key={profile.id}
                    profile={profile}
                    onSwipe={handleSwipe}
                    isTop={index === 0}
                    index={index}
                  />
                );
              })}
          </div>
        )}
      </div>

      {/* Action buttons */}
      {profiles.length > 0 && (
        <div className="flex items-center justify-center gap-4 pb-8 px-6 shrink-0">
          <button
            onClick={() => handleAction("pass")}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-card shadow-sm hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-all hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={() => handleAction("superlike")}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card shadow-sm hover:border-blue-300 hover:bg-blue-50 hover:text-blue-500 transition-all hover:scale-110"
          >
            <Star className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleAction("like")}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg hover:shadow-purple-500/40 hover:scale-110 transition-all text-white"
          >
            <Heart className="h-6 w-6 fill-white" />
          </button>
        </div>
      )}
    </div>
  );
}
