import { MapPin, Shield, Heart, Star, X, Flag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfileViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Mock profile data
  const profile = {
    id,
    name: "Alexandra",
    age: 27,
    location: "New York, NY",
    bio: "Art director by day, amateur chef by night. I love exploring the city's hidden gems, trying new restaurants, and taking spontaneous weekend trips. Looking for someone genuine who appreciates the small moments as much as the big adventures.",
    isVerified: true,
    compatibility: 94,
    emoji: "👸",
    gradient: "from-purple-500 via-pink-500 to-rose-400",
    tags: ["Art", "Cooking", "Travel", "Music", "Photography", "Wine"],
    photos: ["photo1", "photo2", "photo3"],
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Primary photo */}
      <div className={`relative h-96 bg-gradient-to-br ${profile.gradient} flex items-center justify-center`}>
        <span className="text-[120px]">{profile.emoji}</span>
        {profile.isVerified && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5">
            <Shield className="h-4 w-4 text-green-400" />
            <span className="text-sm font-semibold text-white">Verified</span>
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">{profile.name}, {profile.age}</h1>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="h-3.5 w-3.5 text-white/70" />
                  <span className="text-sm text-white/70">{profile.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1.5">
                <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold text-white">{profile.compatibility}% match</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo thumbnails */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto border-b border-border">
        {profile.photos.map((_, i) => (
          <div
            key={i}
            className={`h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center text-2xl cursor-pointer ring-2 ${i === 0 ? "ring-purple-500" : "ring-transparent"} hover:ring-purple-400 transition-all`}
          >
            {profile.emoji}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Bio */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-2">About</h2>
          <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
        </div>

        {/* Tags */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-3">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-border py-3 font-semibold text-foreground hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-all">
            <X className="h-5 w-5" />
            Pass
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-border px-4 py-3 font-semibold text-foreground hover:border-blue-300 hover:bg-blue-50 hover:text-blue-500 transition-all">
            <Star className="h-5 w-5" />
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-semibold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            <Heart className="h-5 w-5 fill-white" />
            Like
          </button>
        </div>

        {/* Report */}
        <div className="flex justify-center pt-2 pb-8">
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors">
            <Flag className="h-3.5 w-3.5" />
            Report this profile
          </button>
        </div>
      </div>
    </div>
  );
}
