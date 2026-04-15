"use client";

import { useState } from "react";
import { Camera, Save } from "lucide-react";

export default function ProfileEditPage() {
  const [activeTab, setActiveTab] = useState<"about" | "photos" | "preferences">("about");
  const [isSaving, setIsSaving] = useState(false);
  const [displayName, setDisplayName] = useState("Alex");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("27");
  const [gender, setGender] = useState("woman");
  const [lookingFor, setLookingFor] = useState("everyone");
  const [city, setCity] = useState("New York");
  const [ageMin, setAgeMin] = useState(22);
  const [ageMax, setAgeMax] = useState(38);
  const [distance, setDistance] = useState(50);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSaving(false);
  };

  const tabs = [
    { id: "about" as const, label: "About" },
    { id: "photos" as const, label: "Photos" },
    { id: "preferences" as const, label: "Preferences" },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Edit Profile</h1>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 disabled:opacity-60 transition-colors"
        >
          <Save className="h-4 w-4" />
          {isSaving ? "Saving..." : "Save"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-muted p-1 rounded-xl">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 rounded-lg py-2 text-sm font-medium transition-colors ${
              activeTab === id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === "about" && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              maxLength={500}
              className="w-full resize-none rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Tell people about yourself..."
            />
            <p className="text-xs text-muted-foreground text-right mt-1">{bio.length}/500</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min={18}
                max={120}
                className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="Your city"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">I am a</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="man">Man</option>
                <option value="woman">Woman</option>
                <option value="nonbinary">Non-binary</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Looking for</label>
              <select
                value={lookingFor}
                onChange={(e) => setLookingFor(e.target.value)}
                className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="everyone">Everyone</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {activeTab === "photos" && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Add up to 6 photos. Your first photo is your profile picture.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`aspect-[3/4] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-950/20 transition-colors ${
                  i === 0
                    ? "border-purple-400 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/40 dark:to-pink-950/40"
                    : "border-border"
                }`}
              >
                {i === 0 ? (
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl">👸</span>
                    <span className="text-xs text-purple-600 font-medium">Primary</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1 text-muted-foreground">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Add photo</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "preferences" && (
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Age Range</label>
              <span className="text-sm font-semibold text-purple-600">{ageMin} – {ageMax}</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Min: {ageMin}</span>
                  <span>18 – 80</span>
                </div>
                <input
                  type="range"
                  min={18}
                  max={80}
                  value={ageMin}
                  onChange={(e) => setAgeMin(Math.min(Number(e.target.value), ageMax - 1))}
                  className="w-full accent-purple-600"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Max: {ageMax}</span>
                  <span>18 – 80</span>
                </div>
                <input
                  type="range"
                  min={18}
                  max={80}
                  value={ageMax}
                  onChange={(e) => setAgeMax(Math.max(Number(e.target.value), ageMin + 1))}
                  className="w-full accent-purple-600"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Max Distance</label>
              <span className="text-sm font-semibold text-purple-600">{distance} km</span>
            </div>
            <input
              type="range"
              min={1}
              max={500}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full accent-purple-600"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1 km</span>
              <span>500 km</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
