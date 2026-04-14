import Link from "next/link";
import { Search, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
};

interface MockConversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  emoji: string;
  gradient: string;
  online: boolean;
}

const MOCK_CONVERSATIONS: MockConversation[] = [
  { id: "1", name: "Alexandra", lastMessage: "That sounds amazing! I'd love to go 😊", timestamp: "2m", unread: 2, emoji: "👸", gradient: "from-purple-400 to-pink-500", online: true },
  { id: "2", name: "Marcus", lastMessage: "Haha yes, I know exactly what you mean!", timestamp: "1h", unread: 0, emoji: "🤴", gradient: "from-blue-400 to-purple-500", online: true },
  { id: "3", name: "Sophia", lastMessage: "Let's grab coffee this weekend?", timestamp: "3h", unread: 1, emoji: "💎", gradient: "from-pink-400 to-rose-500", online: false },
  { id: "4", name: "Jordan", lastMessage: "The architect exhibit was incredible!", timestamp: "Yesterday", unread: 0, emoji: "🌟", gradient: "from-green-400 to-teal-500", online: false },
  { id: "5", name: "Priya", lastMessage: "You should definitely check it out", timestamp: "2d", unread: 0, emoji: "🌸", gradient: "from-orange-400 to-pink-400", online: false },
];

export default function MessagesPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-4 z-10">
        <h1 className="text-2xl font-bold text-foreground mb-4">Messages</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search conversations..."
            className="w-full rounded-xl border border-input bg-muted/50 pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <div className="divide-y divide-border">
        {MOCK_CONVERSATIONS.length === 0 ? (
          <div className="text-center py-24">
            <MessageCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground/40" />
            <h3 className="text-xl font-bold text-foreground mb-2">No messages yet</h3>
            <p className="text-muted-foreground">Match with someone to start chatting!</p>
          </div>
        ) : (
          MOCK_CONVERSATIONS.map((conv) => (
            <Link
              key={conv.id}
              href={`/messages/${conv.id}`}
              className="flex items-center gap-4 px-4 py-4 hover:bg-muted/50 transition-colors"
            >
              <div className="relative shrink-0">
                <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${conv.gradient} flex items-center justify-center text-2xl`}>
                  {conv.emoji}
                </div>
                {conv.online && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-semibold ${conv.unread > 0 ? "text-foreground" : "text-muted-foreground"}`}>
                    {conv.name}
                  </p>
                  <p className="text-xs text-muted-foreground shrink-0 ml-2">{conv.timestamp}</p>
                </div>
                <div className="flex items-center justify-between mt-0.5">
                  <p className={`text-sm truncate ${conv.unread > 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                    {conv.lastMessage}
                  </p>
                  {conv.unread > 0 && (
                    <span className="ml-2 shrink-0 h-5 w-5 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
