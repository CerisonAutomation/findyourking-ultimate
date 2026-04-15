import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env["NEXT_PUBLIC_APP_URL"] ?? "http://localhost:3000"),
  title: {
    default: "FindYourKing — Luxury Dating Platform",
    template: "%s | FindYourKing",
  },
  description:
    "FindYourKing is a luxury dating platform connecting ambitious, successful singles. Find your perfect match with AI-powered compatibility matching.",
  keywords: [
    "dating",
    "luxury dating",
    "matchmaking",
    "online dating",
    "relationships",
    "singles",
  ],
  authors: [{ name: "FindYourKing" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "FindYourKing",
    title: "FindYourKing — Luxury Dating Platform",
    description:
      "Connect with ambitious, successful singles. AI-powered compatibility matching.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FindYourKing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FindYourKing — Luxury Dating Platform",
    description:
      "Connect with ambitious, successful singles. AI-powered compatibility matching.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster position="top-right" richColors />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
