"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@fyk/supabase/server";
import { loginSchema } from "@fyk/schemas";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const redirectTo = (formData.get("redirectTo") as string) ?? "/discover";

  const parsed = loginSchema.safeParse({ email, password });
  if (!parsed.success) {
    const message = parsed.error.errors[0]?.message ?? "Invalid input";
    redirect(`/login?error=${encodeURIComponent(message)}`);
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect(redirectTo);
}
