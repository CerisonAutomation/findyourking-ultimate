"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Smile } from "lucide-react";

interface MockMessage {
  id: string;
  content: string;
  senderId: string;
  createdAt: Date;
  isOwn: boolean;
}

const CURRENT_USER_ID = "me";
const MOCK_NAME = "Alexandra";
const MOCK_EMOJI = "👸";
const MOCK_GRADIENT = "from-purple-400 to-pink-500";

const INITIAL_MESSAGES: MockMessage[] = [
  { id: "1", content: "Hey! I saw we matched 😊 How are you?", senderId: "them", createdAt: new Date(Date.now() - 3600000 * 2), isOwn: false },
  { id: "2", content: "Hi Alexandra! I'm great, thanks for reaching out! How's your day going?", senderId: CURRENT_USER_ID, createdAt: new Date(Date.now() - 3600000 * 1.9), isOwn: true },
  { id: "3", content: "Pretty good! I just got back from an art gallery opening downtown. You're into art too, right? I saw it on your profile!", senderId: "them", createdAt: new Date(Date.now() - 3600000 * 1.5), isOwn: false },
  { id: "4", content: "Yes! I love contemporary art. Which gallery was it?", senderId: CURRENT_USER_ID, createdAt: new Date(Date.now() - 3600000), isOwn: true },
  { id: "5", content: "The new one on 5th Ave — they had an incredible installation by a local artist. You should check it out!", senderId: "them", createdAt: new Date(Date.now() - 1800000), isOwn: false },
  { id: "6", content: "That sounds amazing! I'd love to go 😊", senderId: "them", createdAt: new Date(Date.now() - 120000), isOwn: false },
];

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

function isSameDay(d1: Date, d2: Date): boolean {
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function formatDateSeparator(date: Date): string {
  const now = new Date();
  if (isSameDay(date, now)) return "Today";
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (isSameDay(date, yesterday)) return "Yesterday";
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export default function ChatPage() {
  const [messages, setMessages] = useState<MockMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const content = input.trim();
    if (!content) return;
    const newMessage: MockMessage = {
      id: String(Date.now()),
      content,
      senderId: CURRENT_USER_ID,
      createdAt: new Date(),
      isOwn: true,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Group messages by date
  const groupedMessages: { date: Date; msgs: MockMessage[] }[] = [];
  for (const msg of messages) {
    const lastGroup = groupedMessages[groupedMessages.length - 1];
    if (!lastGroup || !isSameDay(lastGroup.date, msg.createdAt)) {
      groupedMessages.push({ date: msg.createdAt, msgs: [msg] });
    } else {
      lastGroup.msgs.push(msg);
    }
  }

  return (
    <div className="flex flex-col h-screen max-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card shrink-0">
        <Link href="/messages" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${MOCK_GRADIENT} flex items-center justify-center text-xl shrink-0`}>
          {MOCK_EMOJI}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground">{MOCK_NAME}</p>
          <p className="text-xs text-green-500">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {groupedMessages.map(({ date, msgs }) => (
          <div key={date.toISOString()}>
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground px-2">{formatDateSeparator(date)}</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-2">
              {msgs.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${msg.isOwn ? "bg-purple-600 text-white rounded-br-sm" : "bg-muted text-foreground rounded-bl-sm"}`}>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.isOwn ? "text-purple-200" : "text-muted-foreground"}`}>
                      {formatTime(msg.createdAt)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card px-4 py-3 shrink-0">
        <div className="flex items-end gap-2">
          <button className="text-muted-foreground hover:text-foreground transition-colors mb-2">
            <Smile className="h-5 w-5" />
          </button>
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              rows={1}
              className="w-full resize-none rounded-2xl border border-input bg-muted/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring max-h-32"
              style={{ minHeight: "44px" }}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="mb-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
