"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@fyk/supabase/server";
import { createUserSchema } from "@fyk/schemas";

export async function signupAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    redirect(`/signup?error=${encodeURIComponent("Passwords do not match")}`);
  }

  const parsed = createUserSchema.safeParse({ email, password });
  if (!parsed.success) {
    const message = parsed.error.errors[0]?.message ?? "Invalid input";
    redirect(`/signup?error=${encodeURIComponent(message)}`);
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      emailRedirectTo: `${process.env["NEXT_PUBLIC_APP_URL"]}/auth/callback`,
    },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/onboarding");
}
