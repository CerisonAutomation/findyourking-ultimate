import Link from "next/link";
import { Heart, MessageCircle, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matches",
};

interface MockMatch {
  id: string;
  name: string;
  age: number;
  location: string;
  matchedAt: string;
  emoji: string;
  gradient: string;
  isNew?: boolean;
}

const MOCK_MATCHES: MockMatch[] = [
  { id: "1", name: "Alexandra", age: 27, location: "New York, NY", matchedAt: "2 hours ago", emoji: "👸", gradient: "from-purple-400 to-pink-500", isNew: true },
  { id: "2", name: "Sophia", age: 25, location: "Manhattan, NY", matchedAt: "Yesterday", emoji: "💎", gradient: "from-pink-400 to-rose-500", isNew: true },
  { id: "3", name: "Jordan", age: 29, location: "Jersey City, NJ", matchedAt: "3 days ago", emoji: "🌟", gradient: "from-green-400 to-teal-500" },
  { id: "4", name: "Priya", age: 28, location: "Hoboken, NJ", matchedAt: "5 days ago", emoji: "🌸", gradient: "from-orange-400 to-pink-400" },
  { id: "5", name: "Camille", age: 30, location: "Brooklyn, NY", matchedAt: "1 week ago", emoji: "🦋", gradient: "from-blue-400 to-indigo-500" },
  { id: "6", name: "Emma", age: 26, location: "Queens, NY", matchedAt: "2 weeks ago", emoji: "🌺", gradient: "from-yellow-400 to-orange-400" },
];

function MatchCard({ match }: { match: MockMatch }) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5">
      {match.isNew && (
        <div className="absolute top-3 right-3 z-10">
          <span className="rounded-full bg-purple-600 px-2 py-0.5 text-xs font-bold text-white">NEW</span>
        </div>
      )}
      <div className={`h-40 bg-gradient-to-br ${match.gradient} flex items-center justify-center`}>
        <span className="text-6xl">{match.emoji}</span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="font-semibold text-card-foreground">{match.name}, {match.age}</p>
            <p className="text-xs text-muted-foreground">{match.location}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mb-3">Matched {match.matchedAt}</p>
        <Link
          href={`/messages/${match.id}`}
          className="flex items-center justify-center gap-2 w-full rounded-lg bg-purple-600 py-2 text-xs font-semibold text-white hover:bg-purple-700 transition-colors"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Say Hello
        </Link>
      </div>
    </div>
  );
}

export default function MatchesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Matches</h1>
        <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-semibold text-purple-700 dark:text-purple-300">
          {MOCK_MATCHES.length} total
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-muted p-1 rounded-xl w-fit">
        {["Matches", "Likes Received", "Superlikes"].map((tab, i) => (
          <button
            key={tab}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              i === 0
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {MOCK_MATCHES.length === 0 ? (
        <div className="text-center py-24">
          <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground/40" />
          <h3 className="text-xl font-bold text-foreground mb-2">No matches yet</h3>
          <p className="text-muted-foreground mb-6">
            Start swiping to find your matches!
          </p>
          <Link
            href="/discover"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
          >
            <Users className="h-4 w-4" />
            Discover People
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {MOCK_MATCHES.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Previous
            </button>
            <span className="px-4 py-2 text-sm text-muted-foreground">Page 1 of 1</span>
            <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
