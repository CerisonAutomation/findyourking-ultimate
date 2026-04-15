import Link from "next/link";
import {
  Sparkles,
  Shield,
  MessageCircle,
  Star,
  Check,
  ArrowRight,
  Heart,
  Users,
  TrendingUp,
  Crown,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FindYourKing — Luxury Dating Platform",
  description:
    "Find your perfect match with AI-powered compatibility matching on the most exclusive dating platform.",
};

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Crown className="h-6 w-6 text-purple-600" />
          <span className="text-xl font-bold text-foreground">
            Find<span className="text-purple-600">Your</span>King
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

function ProfileCardMock({
  name,
  age,
  emoji,
  gradient,
  rotateClass,
}: {
  name: string;
  age: number;
  emoji: string;
  gradient: string;
  rotateClass: string;
}) {
  return (
    <div
      className={`absolute rounded-2xl shadow-2xl overflow-hidden w-52 h-72 ${rotateClass}`}
    >
      <div className={`w-full h-full ${gradient} flex flex-col justify-end p-4`}>
        <div className="text-6xl mb-2 text-center">{emoji}</div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
          <p className="font-bold text-white text-lg">
            {name}, {age}
          </p>
          <p className="text-white/80 text-xs">📍 New York, NY</p>
          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-purple-200/40 dark:bg-purple-900/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-pink-200/40 dark:bg-pink-900/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300">
              <Sparkles className="h-4 w-4" />
              AI-Powered Luxury Matchmaking
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Find Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                King.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-muted-foreground lg:text-xl">
              Join the most exclusive dating platform for ambitious, successful
              singles. Our AI matches you with compatible partners who share
              your values and vision.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-purple-700 transition-all hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                Start for Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground hover:bg-muted transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required • Free forever plan available
            </p>
          </div>

          <div className="relative hidden lg:flex items-center justify-center h-96">
            <ProfileCardMock
              name="Alexandra"
              age={27}
              emoji="👸"
              gradient="bg-gradient-to-br from-purple-500 to-pink-500"
              rotateClass="-rotate-6 left-0 top-0"
            />
            <ProfileCardMock
              name="Marcus"
              age={31}
              emoji="🤴"
              gradient="bg-gradient-to-br from-blue-500 to-purple-500"
              rotateClass="rotate-3 right-0 top-8"
            />
            <ProfileCardMock
              name="Sophia"
              age={25}
              emoji="💎"
              gradient="bg-gradient-to-br from-pink-500 to-rose-500"
              rotateClass="-rotate-3 left-12 bottom-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { icon: Users, value: "50k+", label: "Members" },
    { icon: Heart, value: "94%", label: "Match Rate" },
    { icon: TrendingUp, value: "10k+", label: "Couples Formed" },
  ];

  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Icon className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">{value}</p>
              <p className="text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Matching",
      description:
        "Our proprietary algorithm analyzes 50+ compatibility factors to find your ideal partner. No more swiping blindly — every match is intentional.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description:
        "Every member undergoes identity verification. Photo verification and background checks ensure you're meeting real, authentic people.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description:
        "Seamless messaging with read receipts, photo sharing, and GIF support. Our smart conversation starters help you break the ice.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FindYourKing
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Built for people who take relationships seriously. Every feature
            designed to help you find lasting love.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description, gradient }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description:
        "Build a rich profile with photos, interests, and what you're looking for. The more you share, the better your matches.",
      emoji: "✨",
    },
    {
      step: "02",
      title: "Discover Matches",
      description:
        "Browse curated profiles matched to your preferences. Like, superlike, or pass with a simple swipe.",
      emoji: "💫",
    },
    {
      step: "03",
      title: "Start Chatting",
      description:
        "When it's mutual, start a conversation! Use our smart prompts or dive straight into what matters to you.",
      emoji: "💬",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Three simple steps to finding your perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map(({ step, title, description, emoji }) => (
            <div key={step} className="relative text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <span className="text-4xl">{emoji}</span>
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-full">
                <span className="text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-950 rounded-full px-2 py-0.5">
                  Step {step}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I was skeptical about online dating, but FindYourKing matched me with someone who truly gets me. We've been together for 8 months now!",
      name: "Priya S.",
      title: "Marketing Director",
      emoji: "💜",
    },
    {
      quote:
        "The quality of matches here is incredible. No fake profiles, no time-wasters. Met my fiancé within 2 weeks of joining.",
      name: "James T.",
      title: "Software Engineer",
      emoji: "💙",
    },
    {
      quote:
        "As someone who travels for work, the distance preferences and location features are perfect. Found someone amazing in my city!",
      name: "Camille M.",
      title: "Investment Banker",
      emoji: "🩷",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Love Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real people, real connections.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, name, title, emoji }) => (
            <div
              key={name}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground italic leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{emoji}</span>
                <div>
                  <p className="font-semibold text-card-foreground">{name}</p>
                  <p className="text-sm text-muted-foreground">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Get started and see who's out there",
      features: [
        "10 swipes per day",
        "Basic matching",
        "Send 5 messages/day",
        "View matches",
      ],
      cta: "Get Started",
      href: "/signup",
      highlight: false,
    },
    {
      name: "Premium",
      price: "$29",
      period: "/month",
      description: "Unlimited matches and messaging",
      features: [
        "Unlimited swipes",
        "Advanced AI matching",
        "Unlimited messaging",
        "See who liked you",
        "Priority in search",
        "Read receipts",
      ],
      cta: "Start Premium",
      href: "/signup?plan=premium",
      highlight: true,
    },
    {
      name: "VIP",
      price: "$79",
      period: "/month",
      description: "The ultimate luxury experience",
      features: [
        "Everything in Premium",
        "Profile boost (weekly)",
        "Superlike x5 daily",
        "Incognito mode",
        "Dedicated concierge",
        "Advanced filters",
        "Verified badge",
      ],
      cta: "Go VIP",
      href: "/signup?plan=vip",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Simple Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your journey to love.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 shadow-sm ${
                plan.highlight
                  ? "border-purple-500 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/50 dark:to-card shadow-lg shadow-purple-500/20 scale-105"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-purple-600 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-card-foreground">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block w-full rounded-xl px-6 py-3 text-center font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Ready to find your match?
        </h2>
        <p className="mt-4 text-xl text-purple-100">
          Join 50,000+ members already finding love on FindYourKing.
        </p>
        <Link
          href="/signup"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-purple-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Create Your Profile Free
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="h-5 w-5 text-purple-600" />
              <span className="text-lg font-bold">
                Find<span className="text-purple-600">Your</span>King
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The luxury dating platform for ambitious singles seeking meaningful
              connections.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "How it Works", "Safety"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FindYourKing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
}
