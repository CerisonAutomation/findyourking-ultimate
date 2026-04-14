/**
 * NextAuth v5 configuration for the FindYourKing platform.
 * Re-export and extend this config in each app that needs auth.
 */
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/auth/error",
  },
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
};

export * from "next-auth";
