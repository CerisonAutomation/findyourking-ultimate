import { NextResponse, type NextRequest } from "next/server";
import { createSupabaseMiddlewareClient } from "@fyk/supabase/middleware";

const PROTECTED_ROUTES = [
  "/discover",
  "/matches",
  "/messages",
  "/profile/edit",
  "/settings",
  "/onboarding",
];

const AUTH_ROUTES = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createSupabaseMiddlewareClient(request, response);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const pathname = request.nextUrl.pathname;

  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname === route);

  if (isProtectedRoute && !session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/discover", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
